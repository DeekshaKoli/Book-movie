import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await axios.get(
      "http://localhost:3000/bookings"
      
    );

    setBookings(res.data);
  };

  const deleteBooking = async (id) => {
    await axios.delete(
      `http://localhost:3000/bookings/${id}`
    );

    fetchBookings();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-4xl font-bold text-center mb-8">
        🎟 My Booked Shows
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">

          <thead className="bg-red-600">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Seats</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item) => (
              <tr
                key={item.id}
                className="text-center border-b border-gray-700"
              >
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.seats}</td>
                <td className="p-3">{item.date}</td>

                <td className="p-3">
                  <button
                    onClick={() =>
                      deleteBooking(item.id)
                    }
                    className="bg-red-600 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Books;