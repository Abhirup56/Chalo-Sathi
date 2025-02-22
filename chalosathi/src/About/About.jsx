import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121a21] to-[#1e2a35] text-white py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-info">
          About Chalo Sathi
        </h1>

        {/* Main Idea Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Chalo Sathi makes ride-hailing easier for both drivers and passengers. Drivers often miss good rides because they have to check multiple apps. Our platform shows all ride requests in one place, helping them earn more. Passengers also use many apps to find the cheapest ride. Our app compares fares in real-time, so they always get the best price. This saves time, money, and effort for everyone.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#1e2a35] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-info">For Drivers</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>All ride requests in one place</li>
                <li>Real-time ride matching</li>
                <li>Earnings tracker and analytics</li>
                <li>Easy-to-use interface</li>
              </ul>
            </div>
            <div className="bg-[#1e2a35] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-info">For Passengers</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Real-time fare comparison</li>
                <li>Quick and reliable bookings</li>
                <li>Transparent pricing</li>
                <li>Multiple payment options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-[#1e2a35] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2 text-info">Abhirup kumar ghosh</h3>
              <p className="text-gray-300">Team Lead</p>
            </div>
            <div className="bg-[#1e2a35] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2 text-info">Prabudhha Chatterjee</h3>
              <p className="text-gray-300">Project Manager</p>
            </div>
            <div className="bg-[#1e2a35] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2 text-info">Moitreyo Ghosh</h3>
              <p className="text-gray-300">Lead Developer</p>
            </div>
            <div className="bg-[#1e2a35] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2 text-info">Sayan Chakroborty</h3>
              <p className="text-gray-300">Team Member</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;