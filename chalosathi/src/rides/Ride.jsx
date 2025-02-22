import React, { useState } from 'react';

function Ride() {
  const rideOptions = [
    {
      name: 'UberX',
      timeAway: '3 min',
      price: '366.71',
      logo: 'https://static-00.iconduck.com/assets.00/uber-icon-2048x2048-qbj0bfi1.png',
      driverImage: 'driver.png' // Relative path - adjust if needed
    },
    {
      name: 'Ola',
      timeAway: '4 min',
      price: '356.71',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctcobUgfq8bMp52TffagiL9QZv93tr6o5Hg&s',
      driverImage: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.pn"
    },
    {
      name: 'Lyft',
      timeAway: '4 min',
      price: '350.71',
      logo: 'https://www.onlinepalette.com/wp-content/uploads/2021/07/Lyft-Mobile-App.png',
      driverImage: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.pn"
    },
    {
      name: 'InDrive',
      timeAway: '4 min',
      price: '356.71',
      logo: 'https://cdn6.aptoide.com/imgs/3/0/3/30379cd77799350f716780b1e827256c_icon.jpg',
      driverImage: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.pn"
    },
  ];

  return (
    <>
      {rideOptions.map((option, index) => (
        <RideOption key={index} {...option} modalId={`my_modal_${index}`} />
      ))}
    </>
  );
}

function RideOption({ name, timeAway, price, logo, driverImage, modalId }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="bg-[#212d39] shadow-lg rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center w-full space-y-3 sm:space-y-0">
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">{name}</h1>
        <p className="text-sm text-gray-300">{timeAway} away</p>
        <button
          className="btn btn-sm md:btn-md lg:btn-lg btn-info text-white mt-2 w-full sm:w-auto"
          onClick={openModal}
        >
          Book {name}
        </button>

        <dialog id={modalId} className="modal modal-bottom sm:modal-middle" open={modalOpen}>
          <div className="modal-box flex flex-col justify-center items-center space-y-5">
            <p>Fetching the nearest Driver . . .</p>
            <span className="loading loading-spinner text-info"></span>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://cdn-icons-png.flaticon.com/512/1535/1535791.png" alt="Driver" />
              </div>
            </div>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>

      <span className="text-lg md:text-xl font-bold text-white sm:relative sm:right-10 md:relative md:right-0 lg:relative lg:right-20">
        ₹ {price}
      </span>

      <div className="w-20 lg:w-24">
        <img src={logo} alt={`${name} Icon`} className="rounded-lg" />
      </div>
    </div>
  );
}

export default Ride;