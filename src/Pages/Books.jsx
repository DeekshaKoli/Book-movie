// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Books = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     const res = await axios.get(
//       "http://localhost:3001/bookings"

//     );

//     setBookings(res.data);
//   };

//   const deleteBooking = async (id) => {
//     await axios.delete(
//       `http://localhost:3001/bookings/${id}`
//     );

//     fetchBookings();
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-10">

//       <h1 className="text-4xl font-bold text-center mb-8">
//         🎟 My Booked Shows
//       </h1>

//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-700">

//           <thead className="bg-red-600">
//             <tr>
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Seats</th>
//               <th className="p-3">Date</th>
//               <th className="p-3">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {bookings.map((item) => (
//               <tr
//                 key={item.id}
//                 className="text-center border-b border-gray-700"
//               >
//                 <td className="p-3">{item.name}</td>
//                 <td className="p-3">{item.email}</td>
//                 <td className="p-3">{item.seats}</td>
//                 <td className="p-3">{item.date}</td>

//                 <td className="p-3">
//                   <button
//                     onClick={() =>
//                       deleteBooking(item.id)
//                     }
//                     className="bg-red-600 px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>

//     </div>
//   );
// };

// export default Books;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editBooking, setEditBooking] = useState(null);

  const [editData, setEditData] = useState({
    date: "",
    showTime: "",
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:3001/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3001/bookings/${id}`);
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (booking) => {
    setEditBooking(booking);

    setEditData({
      date: booking.date,
      showTime: booking.showTime,
    });

    setShowModal(true);
  };

  const filteredBookings = bookings.filter((item) =>
    item?.movie?.title?.toLowerCase().includes(search.toLowerCase())
  );

  let FilterData= filteredBookings.filter((items)=>{
    

    return items.user.email == localStorage.getItem("loggedInUser")

  })


  

  const updateBooking = async () => {
  try {

    await axios.put(

      `http://localhost:3001/bookings/${editBooking.id}`,

      {
        ...editBooking,
        date: editData.date,
        showTime: editData.showTime,
      }

    );

    setShowModal(false);

    fetchBookings();

  } catch (err) {

    console.log(err);

  }
};

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">

      <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
        🎟 My Bookings
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none"
        />
      </div>

      {filteredBookings.length === 0 ? (
        <h2 className="text-center text-2xl text-gray-400">
          No Bookings Found
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {FilterData.map((item) => (

            <div
              key={item.id}
              className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition"
            >

              {/* Movie Image */}
              {/* <img
                src={item.movie?.img}
                alt={item.movie?.title}
                className="w-full h-60 object-cover"
              /> */}

              <div className="p-5">

                <h2 className="text-2xl font-bold text-green-400">
                  {item.movie?.title}
                </h2>

                <p className="mt-2">
                  ⭐ {item.movie?.rating}
                </p>

                <hr className="my-4 border-gray-600" />

                <p><b>👤 Name :</b> {item.user?.name}</p>

                <p><b>📧 Email :</b> {item.user?.email}</p>

                <p><b>📱 Mobile :</b> {item.user?.mobile}</p>

                <p><b>📅 Date :</b> {item.date}</p>

                <p><b>🕒 Time :</b> {item.showTime}</p>

                <p>
                  <b>💺 Seats :</b>{" "}
                  {item.seats?.join(", ")}
                </p>

                <p className="text-yellow-400 mt-2">
                  <b>Total :</b> ₹{item.total}
                </p>

                <div className="mt-3">
                  <span className="bg-green-600 px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 py-2 rounded-lg font-bold"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => deleteBooking(item.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-bold"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}


      {showModal && (

<div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

<div className="bg-gray-800 p-6 rounded-xl w-[400px]">

<h2 className="text-2xl text-center font-bold text-yellow-400 mb-5">

Update Booking

</h2>

<label>Date</label>

<input

type="date"

value={editData.date}

onChange={(e)=>

setEditData({

...editData,

date:e.target.value

})

}

className="w-full p-3 rounded bg-gray-700 mt-2 mb-4"

/>

<label>Show Time</label>

<select

value={editData.showTime}

onChange={(e)=>

setEditData({

...editData,

showTime:e.target.value

})

}

className="w-full p-3 rounded bg-gray-700"

>

<option>10:00 AM</option>

<option>01:30 PM</option>

<option>05:00 PM</option>

<option>09:00 PM</option>

</select>

<div className="flex gap-4 mt-6">

<button

onClick={updateBooking}

className="flex-1 bg-green-600 py-2 rounded"

>

Save

</button>

<button

onClick={()=>setShowModal(false)}

className="flex-1 bg-red-600 py-2 rounded"

>

Cancel

</button>

</div>

</div>

</div>

)}

    </div>
  );
};

export default Books;