import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";


const Login = () => {
  const [form, setForm] = useState({
    email: "",
    pass: "",
  });

  let navigate= useNavigate()


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("user")) || [];

    let alreadyuser = users.find(
      (e) => e.email === form.email
    );

    if (!alreadyuser) {
      
      navigate("/signup")
      return;
    }

    if (alreadyuser.pass !== form.pass) {
      alert("Invalid Password");
      return;
    }

    navigate("/home")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center text-red-500 mb-2">
          Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Welcome Back
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="password"
            name="pass"
            placeholder="Enter Password"
            value={form.pass}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Login
          </button>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup"  className="!text-red-500 font-semibold !no-underline hover:!underline">Sign Up</Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;