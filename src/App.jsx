import React from 'react'


import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Movies from './Pages/Movies'
import Home from './Pages/Home'
import Books from './Pages/Books'
import Show from './Pages/Show'
import Profile from './Pages/Profile'
import Booking from './Pages/Booking'
import {  Routes, Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Navbar from './Components/Navbar'
import Seats from './Pages/Seat'
import Payment from './Pages/Payment'


export const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/booking" element={<Booking />} />
        
         <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    
    <Route path="/movies" element={<Movies />} />
    <Route path="/books" element={<Books />} />
    <Route path="/show" element={<Show />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/seats" element={<Seats />} />
    <Route path="/payment" element={<Payment />} />
  </Route>

    </Routes>
    
    
    </>
  )
}
export default App