import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


const Signup = () => {

  const [form, setform] = useState({
    name: "",
    email: "",
    mobile: "",
    pass: "",
    cpass: ""
  })


  let navigate= useNavigate()

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.name.trim() === "") {
      alert("Please enter Name")
      return
    }

    let users = JSON.parse(localStorage.getItem("user")) || []

    let alreadyuser = users.find(
      (u) => u.email === form.email
    )

    if (alreadyuser) {
      alert("You have already signed up kindly login")
      navigate("/login")
      return
    }

    users.push(form)
    localStorage.setItem("user", JSON.stringify(users))

    navigate("/home")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-red-600 mb-2">
          Book Your Show
        </h1>

        <h2 className="text-xl font-semibold text-center mb-6">  
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-red-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-red-500"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-red-500"
          />

          <input
            type="password"
            name="pass"
            placeholder="Password"
            value={form.pass}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-red-500"
          />

          <input
            type="password"
            name="cpass"
            placeholder="Confirm Password"
            value={form.cpass}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-red-500"
          />

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm text-gray-600">
              I accept Terms & Conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center text-gray-500 mt-5">
  Already have an account?{" "}
  <Link
    to="/login"
    className="!text-red-500 !no-underline hover:!underline font-semibold"
  >
    Login
  </Link>
</p>

      </div>

    </div>
  )
}

export default Signup