import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Film } from "lucide-react";
import Animatedbg from "../Components/Animatedbg";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("user")) || [];

    const alreadyuser = users.find(
      (u) => u.email === form.email
    );

    if (!alreadyuser) {
      alert("Account not found!");
      navigate("/signup");
      return;
    }

    if (alreadyuser.pass !== form.pass) {
      alert("Invalid Password");
      return;
    }

    localStorage.setItem("loggedInUser", form.email);
    navigate("/home");
  };


  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b] flex items-center justify-center">

      {/* Background Animation */}
      <Animatedbg />

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-red-600/30 blur-[120px] rounded-full -top-20 -left-20"></div>

      <div className="absolute w-80 h-80 bg-pink-600/20 blur-[120px] rounded-full bottom-0 right-0"></div>

      {/* Login Card */}
     <div className="relative z-10 w-[430px] rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-8 fade-in">

        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 rounded-full shadow-xl">
            <Film size={34} className="text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-white mt-5">
          Welcome Back
        </h1>

        <p className="text-center text-gray-300 mt-2 mb-8">
          Login to continue your movie journey 🍿
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/40 transition"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="password"
              name="pass"
              placeholder="Enter your password"
              value={form.pass}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/40 transition"
            />

          </div>

          {/* Login Button */}

          <button
            type="submit"
           className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg glow-red hover:scale-105 transition-all duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-red-400 font-semibold hover:text-red-300 transition"
            >
              Sign Up
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
};

export default Login;