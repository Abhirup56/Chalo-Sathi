import React from "react";

function Profile() {
  return (
    <div className="min-h-screen bg-[#121a21] text-white flex justify-center items-center">
      <div className="bg-[#1b252f] p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        {/* Profile Picture */}
        <div className="avatar flex justify-center">
          <div className="w-24 h-24">
          <div className="avatar">
            <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            </div>
          </div>
        </div>

        {/* Name & Occupation */}
        <h2 className="text-2xl font-bold mt-4">John Doe</h2>


        {/* User Type */}
        <div className="mt-4">
          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Driver</span>
        </div>

        {/* Contact Details */}
        <div className="mt-4 space-y-2">
          <p className="text-lg">✉️ johndoe@email.com</p>
          <p className="text-lg">📞 +91 9876543210</p>
        </div>

        {/* Edit Button */}
        <button className="btn mt-5 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg w-full text-white font-semibold" onClick={()=>document.getElementById('my_modal_3').showModal()}>Edit Profile</button>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Edit Profile</h3>
                <br />
                <div >
                    <form action="POST" className="space-y-9 flex flex-col items-center">
                    <div className="avatar w-20 h-20">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs focus:border-blue-500 outline-none transition-all duration-300" />
                    <input
                        type="text"
                        placeholder="New name"
                        className="w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none transition-all duration-400 p-2 bg-transparent" />

                        <input
                        type="number"
                        placeholder="New Phone number"
                        className="w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none transition-all duration-300 p-2 bg-transparent"/>
                    </form>
                </div>
            </div>
        </dialog>
      </div>
    </div>
  );
}

export default Profile;
