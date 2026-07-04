import React from "react";

const movies = [
  {
    name: "Avengers",
    image: "https://picsum.photos/300/450?1",
  },
  {
    name: "Pushpa 2",
    image: "https://picsum.photos/300/450?2",
  },
  {
    name: "Jawan",
    image: "https://picsum.photos/300/450?3",
  },
  {
    name: "KGF",
    image: "https://picsum.photos/300/450?4",
  },
];

const TrendingMovies = () => {
  return (
    <div className="bg-gray-900 py-14">

      <h1 className="text-4xl font-bold text-center text-white">
        Trending Movies
      </h1>

      <div className="grid grid-cols-4 gap-8 mt-10 px-20">

        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 duration-300"
          >
            <img
              src={movie.image}
              className="h-80 w-full object-cover"
              alt={movie.name}
            />

            <div className="p-4">

              <h2 className="text-white text-xl font-bold">
                {movie.name}
              </h2>

              <button className="bg-red-600 w-full py-2 rounded-lg mt-4 hover:bg-red-700">
                Book Ticket
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default TrendingMovies;