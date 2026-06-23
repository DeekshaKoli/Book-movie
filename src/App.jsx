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


export const App = () => {
  return (
    <>
    
    <Routes>
        
         <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/books" element={<Books />} />
    <Route path="/show" element={<Show />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/profile" element={<Profile />} />
  </Route>

    </Routes>
    
    
    </>
  )
}
export default App