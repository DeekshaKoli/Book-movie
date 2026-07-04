import React from "react";
import { FaFilm, FaMusic, FaFootballBall, FaLaugh } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="bg-black py-16">

      <h1 className="text-center text-white text-4xl font-bold">
        Categories
      </h1>

      <div className="flex justify-center gap-10 mt-12">

        <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-red-600 duration-300">
          <FaFilm className="text-5xl text-white mx-auto" />
          <h2 className="text-white mt-4">Movies</h2>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-red-600 duration-300">
          <FaMusic className="text-5xl text-white mx-auto" />
          <h2 className="text-white mt-4">Concerts</h2>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-red-600 duration-300">
          <FaFootballBall className="text-5xl text-white mx-auto" />
          <h2 className="text-white mt-4">Sports</h2>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-red-600 duration-300">
          <FaLaugh className="text-5xl text-white mx-auto" />
          <h2 className="text-white mt-4">Comedy</h2>
        </div>

      </div>

    </div>
  );
};

export default Categories;