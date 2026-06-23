import React from 'react'
import movieImg from '../assets/img5.jpg'

const Movies = () => {
  return (
    <>
    
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
  <img src={movieImg} alt="" className="w-50 h-84 object-cover" />

  <div className="p-4">
    <h3 className="text-xl font-bold">Pushpa 2</h3>

    <p className="text-gray-600">
      Action • Drama
    </p>

    <p className="text-yellow-500 mt-2">
      ⭐ 8.5/10
    </p>

    <button className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
      Book Ticket
    </button>
  </div>
</div>
    
    </>
  )
}

export default Movies