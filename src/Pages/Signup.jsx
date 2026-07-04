import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    pass: "",
    cpass: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "") {
      alert("Please enter Name");
      return;
    }

    if (form.pass !== form.cpass) {
      alert("Password and Confirm Password do not match");
      return;
    }

    let users = JSON.parse(localStorage.getItem("user")) || [];

    let alreadyUser = users.find((u) => u.email === form.email);

    if (alreadyUser) {
      alert("You have already signed up. Kindly login.");
      navigate("/login");
      return;
    }

    users.push(form);
    localStorage.setItem("user", JSON.stringify(users));

    localStorage.setItem("loggedInUser", form.email);

    navigate("/home");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900 px-4">

      {/* Animated Background */}
      <div className="absolute w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10"></div>

      <div className="absolute w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-30 animate-bounce bottom-10 right-10"></div>

      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8 transition duration-500 hover:scale-105">

        <h1 className="text-4xl font-extrabold text-center text-red-500">
          🎬 Book Your Show
        </h1>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Create your account to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            name="pass"
            placeholder="Password"
            value={form.pass}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            name="cpass"
            placeholder="Confirm Password"
            value={form.cpass}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-red-600 w-4 h-4"
              required
            />
            <label className="text-gray-200 text-sm">
              I accept Terms & Conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-lg hover:shadow-red-500/50 hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-400 hover:text-red-300 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;