import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useAuthContext } from "../context/UserProvider";

function Profile() {
  const { user: clerkUser, isSignedIn } = useAuthContext();
  const { getToken } = useAuth();
  const [profile, setProfile] = useState(null);
  const [newName, setNewName] = useState("");
  const [userType, setUserType] = useState("Rider");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [carNumber, setCarNumber] = useState(""); // New state for car number

  useEffect(() => {
    // Fetch user data from MongoDB when clerkUser is available and isSignedIn is true
    if (clerkUser && isSignedIn) {
      fetchUserProfile();
    }
  }, [clerkUser, isSignedIn]);

  const fetchUserProfile = async () => {
    try {
      const res = await fetch(`http://localhost:5002/api/users/${clerkUser.id}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch user profile: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      console.log("User profile from MongoDB:", data);
      setProfile(data);
      setNewName(data.name || "");
      setUserType(data.userType || "Rider");
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setError("Failed to load user profile.");
    }
  };

  // ✅ Handle Profile Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!newName.trim()) {
      setError("Name cannot be empty!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const token = await getToken();
      console.log("🔹 Received token:", token?.slice(0, 10), "...");

      const response = await fetch("http://localhost:5002/api/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          clerkUserId: clerkUser.id,
          name: newName,
          userType,
        }),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      alert("Profile updated successfully!");
      fetchUserProfile(); // ✅ Refresh user details
    } catch (error) {
      console.error("Profile update failed:", error);
      setError(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Please sign in to view your profile.
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121a21] text-white flex justify-center items-center">
      <div className="bg-[#1b252f] p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        {/* Profile Header */}
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={clerkUser.imageUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold mt-4">{newName}</h2>
        <p className="text-lg mt-2">✉️ {clerkUser.primaryEmailAddress.emailAddress}</p>
        <p className="text-lg mt-2">📞 {clerkUser.primaryPhoneNumber?.phoneNumber || "Not provided"}</p>
        {userType === "Driver" && (
          <p className="text-lg mt-2">🚗 Car Number: {carNumber || "Not provided"}</p>
        )}

        <div className="mt-4">
          <span className="badge badge-lg badge-accent">{userType}</span>
        </div>

        {/* Edit Button */}
        <button
          className="btn btn-primary mt-5 w-full"
          onClick={() => document.getElementById("edit_profile_modal").showModal()}
        >
          Edit Profile
        </button>

        {/* Edit Modal */}
        <dialog id="edit_profile_modal" className="modal">
          <div className="modal-box bg-[#1b252f] text-white">
            <form method="dialog" className="absolute right-4 top-4">
              <button className="btn btn-circle btn-ghost">✕</button>
            </form>

            <h3 className="text-xl font-bold mb-6">Edit Profile</h3>

            {error && <div className="alert alert-error mb-4">{error}</div>}

            <form className="space-y-4" onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Full Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">User Type</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="Rider">Rider</option>
                  <option value="Driver">Driver</option>
                </select>
              </div>

              {/* Car Number Field (Only Shown When Driver) */}
              {userType === "Driver" && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Car Number</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={carNumber}
                    onChange={(e) => setCarNumber(e.target.value)}
                  />
                </div>
              )}

              <button
                type="submit"
                className="btn btn-success w-full"
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner"></span> : "Save Changes"}
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Profile;