import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Booking = () => {
const location = useLocation();
const navigate = useNavigate();

const movie = location.state?.movie;

const [formData, setFormData] = useState({
name: "",
email: "",
mobile: "",
seats: "",
date: "",
showTime: "10:00 AM",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const bookingData = {
    movieName: movie?.title,
    movieImage: movie?.img,
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,
    seats: formData.seats,
    date: formData.date,
    showTime: formData.showTime,
    bookingDate: new Date().toLocaleDateString(),
  };

  try {
    await axios.post(
      "http://localhost:3001/bookings",
      bookingData
    );

    alert("🎉 Booking Successful!");

    navigate("/books"); // Booked Shows page
  } catch (error) {
     console.log("ERROR:", error);
  console.log("RESPONSE:", error.response);
  alert("Booking Failed!");
  }
};

return ( <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">


  <div className="max-w-3xl w-full bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

    {/* Movie Details */}
    <div className="p-5 bg-gradient-to-b from-red-600/20 to-black">

      <div className="flex justify-center">
        <img
          src={movie?.img}
          alt={movie?.title}
          className="w-44 h-64 object-cover rounded-2xl shadow-xl"
        />
      </div>

      <div className="mt-4 text-center">
        <h1 className="text-2xl font-bold text-white">
          {movie?.title}
        </h1>

        <p className="text-yellow-400 mt-2">
          ⭐ 8.5 / 10
        </p>

        <div className="mt-4 space-y-1 text-sm text-gray-300">
          <p>🎬 Action / Adventure</p>
          <p>⏳ 2h 45m</p>
          <p>🌍 Hindi / English</p>
          <p>📍 PVR Cinemas</p>
        </div>
      </div>
    </div>

    {/* Booking Form */}
    <div className="p-5">

      <h2 className="text-xl font-bold text-white mb-5 text-center">
        🎟 Complete Your Booking
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-gray-300 mb-1">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">
            Mobile Number
          </label>

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">
            Number of Seats
          </label>

          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            placeholder="Seats"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 outline-none"
          />
        </div>

        <div>
  <label className="block text-gray-300 mb-1">
    Select Date
  </label>

  <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    required
    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 outline-none"
  />
</div>

        <div>
          <label className="block text-gray-300 mb-1">
            Show Time
          </label>
           
          <select
            name="showTime"
            value={formData.showTime}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-red-500 outline-none"
          >
            <option>10:00 AM</option>
            <option>01:30 PM</option>
            <option>05:00 PM</option>
            <option>09:00 PM</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-base font-bold transition-all duration-300 hover:scale-105"
        >
          🎟 Confirm Booking
        </button>

      </form>

    </div>

  </div>

</div>


);
};

export default Booking;
