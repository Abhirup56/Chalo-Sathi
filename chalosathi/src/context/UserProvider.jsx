import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user, isSignedIn } = useUser();
  const [hasBeenCreated, setHasBeenCreated] = useState(false);

  useEffect(() => {
    if (user && !hasBeenCreated) {
      checkUserExists();
    }
  }, [user, hasBeenCreated]);

  const checkUserExists = async () => {
    if (!user) return;

    try {
      const response = await fetch(`http://localhost:5002/api/users/${user.id}`);
      if (response.ok) {
        setHasBeenCreated(true);
      } else {
        handleSignup();
      }
    } catch (error) {
      console.error("Error checking user existence:", error);
    }
  };

  const handleSignup = async () => {
    if (!user || hasBeenCreated) return;

    try {
      const response = await fetch("http://localhost:5002/api/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkUserId: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          phoneNumber: user.primaryPhoneNumber?.phoneNumber || "",
          userType: "Rider",
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      
      setHasBeenCreated(true);
      console.log("✅ User created successfully");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, isSignedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuthContext = () => useContext(UserContext);
