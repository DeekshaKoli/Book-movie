// Show.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import m1 from '../assets/m1.jpg'
import m2 from '../assets/m2.jpg'
import m3 from '../assets/m3.jpg'
import m4 from '../assets/m4.jpg'
import m5 from '../assets/m5.jpg'
import m6 from '../assets/m6.jpg'
import m7 from '../assets/m7.jpg'
import m8 from '../assets/m8.jpg'




const Show = () => {

const [showForm, setShowForm] = useState(false);
const [selectedMovie, setSelectedMovie] = useState(null);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  mobile: "",
});


const handleBookTicket = (movie) => {
  setSelectedMovie(movie);
  setShowForm(true);
};

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Login wali email
  
  const loggedInEmail = localStorage.getItem("loggedInUser");

  // Agar login nahi hai
  if (!loggedInEmail) {
    alert("Please login first.");
    navigate("/login");
    return;
  }

  // Email match check
  if (
    formData.email.trim().toLowerCase() !==
    loggedInEmail.trim().toLowerCase()
  ) {
    alert("Kindly use your login email ID.");
    return;
  }

  console.log({
    movie: selectedMovie,
    user: formData,
  });

  setShowForm(false);

 
  navigate("/seats", {
    state: {
      movie: selectedMovie,
      user: formData,
    },
  });


  
};

  const navigate = useNavigate();

  const movie = {
    id: 1,
    title: "Avengers: Endgame",
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
    genre: "Action, Adventure",
    duration: "3h 1m",
    rating: "8.4/10",
    shows: ["10:00 AM", "01:30 PM", "05:00 PM", "09:00 PM"],
  };

  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      rating: "8.4",
      img: m1
    },
    {
      id: 2,
      title: "Batman",
      rating: "8.2",
      img: m2
    },
    {
      id: 3,
      title: "Joker",
      rating: "8.8",
      img:m8,
    },
    {
      id: 4,
      title: "Interstellar",
      rating: "9.0",
      img:m1,
    },
    {
      id: 5,
      title: "Inception",
      rating: "8.9",
     img:m2,
    },
    {
      id: 6,
      title: "Doctor Strange",
      rating: "8.0",
      img:m3,
    },
    {
      id: 7,
      title: "Spider-Man",
      rating: "8.5",
     img:m4,
    },
    {
      id: 8,
      title: "Iron Man",
      rating: "8.1",
      img:m8,
    },
    {
      id: 9,
      title: "Thor",
      rating: "7.9",
      img:m5,
    },
    {
      id: 10,
      title: "Black Panther",
      rating: "8.3",
      img:m6,
    },
    {
      id: 11,
      title: "King",
      rating: "8.4",
      img:m7,
    },
    {
      id: 12,
      title: "I am Legend",
      rating: "8.2",
      img:m8,
    },
  ];

  const handleBooking = (time) => {
    navigate("/seats", {
      state: {
        movie,
        showTime: time,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        
       

        {/* Show Timings */}
        <div className="mt-12">
          <h2 className="text-center text-4xl font-extrabold mb-8">
  <span className="text-green-400">Available</span>{" "}
  <span className="text-white">Shows</span>
</h2>
          <div className=" rounded-2xl p-8 shadow-xl ">
  <div className="flex flex-wrap justify-center gap-5">
    {movie.shows.map((time, index) => (
      <button
        key={index}
        onClick={() => handleBooking(time)}
        className="bg-gray-900 border-2 border-green-500 text-green-400 
        px-8 py-4 rounded-xl font-bold text-lg
        hover:bg-green-500 hover:text-white
        hover:scale-105 transition-all duration-300"
      >
        🎬 {time}
      </button>
    ))}
  </div>
</div>
        </div>
<div className="my-16 flex items-center">
  <div className="flex-1 h-px bg-gray-700"></div>
  <span className="px-6 text-gray-400 text-lg">
    More Movies You May Like
  </span>
  <div className="flex-1 h-px bg-gray-700"></div>
</div>
       
       
        {/* Recommended Movies */}
        <div className="mt-10">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-red-500 mb-30 uppercase tracking-wider">
            Recommended Movies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {movies.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-red-500/40 hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-yellow-400 mt-2">
                    ⭐ {item.rating}/10
                  </p>

                  <button
                   onClick={() => handleBookTicket(item)}
                    className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
                  >
                    🎟 Book Ticket
                  </button>
                </div>
              </div>
            ))}

              {showForm && (
  <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
    <div className="bg-gray-800 p-6 rounded-xl w-[350px] relative">

      <button
        onClick={() => setShowForm(false)}
        className="absolute top-2 right-3 text-white text-2xl"
      >
        ✖
      </button>

      <h2 className="text-2xl text-center text-red-500 font-bold mb-4">
        Book Ticket
      </h2>

      <p className="text-center text-green-400 mb-4">
        {selectedMovie?.title}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-bold"
        >
          Continue
        </button>

      </form>

    </div>
  </div>
)}


          </div>
        </div>

      </div>
    </div>
  );
};

export default Show;