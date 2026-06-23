import React from "react";
import { Link } from "react-router-dom";
// import './Telwind.css'

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-2 flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1
  className="text-4xl font-bold"
  style={{ color: "red" }}
>
  BookMovie
</h1>
        </div>

        
        <div className="flex gap-8 font-medium">
          <Link to="/home" className="!text-white hover:!text-red-500 transition">Home</Link>

          <Link to="/movies" className=" !text-white hover:!text-red-500 transition">Movie</Link>

          <Link to="/show" className="!text-white hover:!text-red-500 transition">Show</Link>

          <Link to="/books" className="!text-white hover:!text-red-500 transition">Books</Link>

          <Link to="/profile" className="!text-white hover:!text-red-500 transition">Profile</Link>

        </div>

        {/* Buttons */}
        <div className="flex gap-3">
  <Link
    to="/login"
    className="!bg-red-500 !text-white px-4 py-2 rounded-lg hover:!bg-red-600"
  >
    Login
  </Link>

  <Link
    to="/signup"
    className="!border !border-red-500 !text-white px-4 py-2 rounded-lg hover:!bg-red-500"
  >
    Sign Up
  </Link>
</div>

      </div>
    </nav>
  );
};

export default Navbar;