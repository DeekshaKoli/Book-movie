import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-black text-white py-10 mt-10">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-red-500">
      BookMovie 🎬
    </h2>

    <div className="flex flex-wrap gap-6 mt-4">
      <a href="/">Home</a>
      <a href="/movies">Movies</a>
      <a href="/shows">Shows</a>
      <a href="/events">Events</a>
    </div>

    <div className="mt-6">
      <h3 className="font-semibold">About Us</h3>
      <p className="text-gray-400">
        Book tickets for movies, shows and events in just one click.
      </p>
    </div>

    <div className="mt-6">
      <h3 className="font-semibold">Contact</h3>
      <p>Email: support@bookmovie.com</p>
      <p>Phone: +91 9876543210</p>
    </div>

    <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
      © 2026 BookMovie. All Rights Reserved.
    </div>

  </div>
</footer>
    
    </>
  )
}

export default Footer