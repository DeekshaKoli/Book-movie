import React from "react";
import img1 from '../assets/img3.jpg'
import img2 from '../assets/img4.jpg'
import img3 from '../assets/img5.jpg'
import GradientBlinds from '../Components/lib/GradientBlinds'
import Sliders from "./Sliders";
// import Slider from '../Pages/Sliders'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-black  text-white py-20 text-center">


<GradientBlinds/>
        

        {/* <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true"> */}
          {/* <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={img1} className="mx-auto w-[800px] h-[400px] object-cover" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="mx-auto w-[800px] h-[400px] object-cover" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="mx-auto w-[800px] h-[400px] object-cover" alt="..." />
            </div>
          </div> */}
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button> */}
          {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        {/* </div> */}
       <div className="absolute top-80 pl-80 ">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to BookMovie 🎬
        </h1>
        <p className="text-lg">
          Book Movies, Shows and Events in Just One Click
        </p>

        <button className="mt-6 bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600">
          Book Now
        </button>
      </div>
</div>
<div>
      <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="shadow-lg hover:border-red-500 hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-500">
  <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white uppercase tracking-widest">
    <span className="text-red-500 hover:text-red-400 transition-colors duration-300">
      Popular Movies
    </span>
  </h2>
</div>


</div>

<div className="bg-black  text-white py-20 text-center">
  
                <Sliders></Sliders>

</div>
<div >
    </div>
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://picsum.photos/300/200?1"
              alt=""
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                Avengers Endgame
              </h3>
              <p className="text-gray-600">
                Action / Adventure
              </p>
              <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded">
                Book Ticket
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://picsum.photos/300/200?2"
              alt=""
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                Pushpa 2
              </h3>
              <p className="text-gray-600">
                Action / Drama
              </p>
              <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded">
                Book Ticket
              </button>
            </div>
          </div>



          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://picsum.photos/300/200?3"
              alt=""
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                Kalki 2898 AD
              </h3>
              <p className="text-gray-600">
                Sci-Fi / Action
              </p>
              <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded">
                Book Ticket
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;