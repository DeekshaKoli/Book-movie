import React, { useState } from "react";

const Movies = () => {
  const [active, setActive] = useState("Movies");

  const categories = [
    "Movies",
    "TV Shows",
    "Sports",
    "Events",
    "Comedy",
    "Plays",
  ];

  const data = {
    Movies: [
      "Sitaare Zameen Par",
      "Saiyaara",
      "War 2",
      "Coolie",
      "Housefull 5",
      "Maa",
    ],
    "TV Shows": [
      "Stranger Things",
      "Wednesday",
      "Money Heist",
      "Squid Game",
      "The Boys",
    ],
    Sports: [
      "IPL",
      "Cricket",
      "Football",
      "Kabaddi",
      "Tennis",
    ],
    Events: [
      "Music Concert",
      "DJ Night",
      "Food Festival",
      "Stand-up Show",
    ],
    Comedy: [
      "Zakir Khan Live",
      "Abhishek Upmanyu",
      "Harsh Gujral",
    ],
    Plays: [
      "Hamlet",
      "Romeo & Juliet",
      "Local Theatre",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black" >

      {/* Header */}
      <div className="bg-red-600 text-white py-6">
        <h1 className="text-4xl font-bold text-center">
          Entertainment
        </h1>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-md sticky top-0 z-20 text-black ">
        <div className="max-w-7xl mx-auto flex overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-6 py-4 font-semibold whitespace-nowrap transition ${
                active === item
                  ? "border-b-4 border-red-600 text-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto py-10 px-5">
        <h2 className="text-3xl font-bold mb-8">{active}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data[active].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden text-black"
            >
              <img
                src={`https://picsum.photos/300/400?random=${index + 1}`}
                alt={item}
                className="w-full h-72 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">{item}</h3>

                <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Movies;