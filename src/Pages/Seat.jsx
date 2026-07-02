import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Seats = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state?.movie;
  const user = location.state?.user;

  const [selectedDate, setSelectedDate] = useState("");
  const [showTime, setShowTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = ["A", "B", "C", "D", "E"];
  const cols = 8;

  const bookedSeats = ["A3", "A4", "B5", "C2", "D7", "E4"];

  const showTimes = [
    "10:00 AM",
    "01:30 PM",
    "05:00 PM",
    "09:00 PM",
  ];

  const seatPrice = 200;
  const total = selectedSeats.length * seatPrice;

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
          Select Your Seats
        </h1>

        {/* Movie & User */}
        <div className="bg-gray-800 rounded-xl p-5 mb-8 flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold text-green-400">
              {movie?.title}
            </h2>
            <p>⭐ {movie?.rating}</p>
          </div>

          <div className="mt-4 md:mt-0">
            <p><b>Name:</b> {user?.name}</p>
            <p><b>Email:</b> {user?.email}</p>
            <p><b>Mobile:</b> {user?.mobile}</p>
          </div>
        </div>

        {/* Date & Time */}
        <div className="bg-gray-800 rounded-xl p-5 mb-8">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">
            Select Date & Show Time
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2">Show Date</label>

              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
              />
            </div>

            <div>
              <label className="block mb-2">Show Time</label>

              <select
                value={showTime}
                onChange={(e) => setShowTime(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
              >
                <option value="">Select Show Time</option>

                {showTimes.map((time) => (
                  <option key={time}>{time}</option>
                ))}

              </select>
            </div>

          </div>
        </div>

        {/* Screen */}
        <div className="flex justify-center mb-8">
          <div className="w-3/4 bg-white text-black text-center py-3 rounded-full font-bold shadow-lg">
            SCREEN
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-8">

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-600 rounded"></div>
            <span>Available</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded"></div>
            <span>Selected</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-red-600 rounded"></div>
            <span>Booked</span>
          </div>

        </div>

        {/* Seats */}
        <div className="space-y-4">

          {rows.map((row) => (
            <div
              key={row}
              className="flex justify-center items-center gap-3"
            >

              <span className="font-bold w-5">{row}</span>

              {Array.from({ length: cols }, (_, i) => {

                const seat = `${row}${i + 1}`;

                const isBooked = bookedSeats.includes(seat);
                const isSelected = selectedSeats.includes(seat);

                return (
                  <button
                    key={seat}
                    disabled={isBooked}
                    onClick={() => handleSeatClick(seat)}
                    className={`w-10 h-10 rounded-lg font-bold transition
                      ${
                        isBooked
                          ? "bg-red-600 cursor-not-allowed"
                          : isSelected
                          ? "bg-green-500"
                          : "bg-gray-700 hover:bg-yellow-500"
                      }`}
                  >
                    {i + 1}
                  </button>
                );

              })}

            </div>
          ))}

        </div>

        {/* Summary */}
        <div className="bg-gray-800 mt-10 rounded-xl p-6">

          <h2 className="text-xl font-bold">
            Selected Seats
          </h2>

          <p className="text-green-400 mt-2">
            {selectedSeats.length
              ? selectedSeats.join(", ")
              : "No Seat Selected"}
          </p>

          <p className="mt-3">
            <b>Date:</b> {selectedDate || "Not Selected"}
          </p>

          <p className="mt-2">
            <b>Show Time:</b> {showTime || "Not Selected"}
          </p>

          <h2 className="text-2xl mt-5 text-yellow-400">
            Total: ₹{total}
          </h2>

          <button
            disabled={
              selectedSeats.length === 0 ||
              !selectedDate ||
              !showTime
            }
            onClick={() =>
              navigate("/payment", {
                state: {
                  movie,
                  user,
                  seats: selectedSeats,
                  total,
                  date: selectedDate,
                  showTime,
                },
              })
            }
            className="w-full mt-6 bg-red-600 hover:bg-red-700 py-3 rounded-lg text-lg font-bold disabled:bg-gray-600"
          >
            Proceed To Payment
          </button>

        </div>

      </div>
    </div>
  );
};

export default Seats;