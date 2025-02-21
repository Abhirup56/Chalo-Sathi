import React from "react";

const rideRequests = [
    {
      id: 1,
      riderName: "Aarav Sharma",
      pickup: "Indira Nagar Metro Station",
      dropoff: "Cubbon Park",
      fare: "₹250",
      imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    },
    {
      id: 2,
      riderName: "Priya Patel",
      pickup: "Phoenix Marketcity Mall",
      dropoff: "Kempegowda International Airport",
      fare: "₹450",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJryFTSQUV8Zuu_EGw2iUCpMbIIKWHBl2eQ&s",
    },
    {
      id: 3,
      riderName: "Rahul Verma",
      pickup: "Christ University",
      dropoff: "Electronic City",
      fare: "₹180",
      imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg",
    },
    {
      id: 4,
      riderName: "Ananya Reddy",
      pickup: "MG Road",
      dropoff: "Manyata Tech Park",
      fare: "₹300",
      imgSrc: "https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg",
    },
    {
      id: 5,
      riderName: "Vikram Singh",
      pickup: "Koramangala",
      dropoff: "Indian Institute of Science",
      fare: "₹150",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
    },
  ];

function Request() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Ride Requests</h2>
      <div className="overflow-x-auto"> {/* Horizontal Scroll */}
        <div className="flex flex-nowrap gap-4"> {/* Prevent wrapping */}
          {rideRequests.length > 0 ? (
            rideRequests.map((request) => (
              <div
                key={request.id}
                className="card bg-base-100 shadow-xl w-80 md:w-96" // Fixed width for cards
              >
                <figure>
                  <img
                    src={request.imgSrc}
                    alt="Rider"
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{request.riderName}</h2>
                  <p>
                    <span className="font-semibold">Pickup:</span> {request.pickup}
                  </p>
                  <p>
                    <span className="font-semibold">Dropoff:</span> {request.dropoff}
                  </p>
                  <div className="card-actions justify-end items-center mt-2">
                    <span className="text-xl font-bold text-success mr-2">{request.fare}</span> 
                    <button className="btn btn-sm btn-success">Accept</button> 
                    <button className="btn btn-sm btn-error">Decline</button> 
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-300">No ride requests available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Request;