import React from "react";

const Hero = () => {
  return (
    <section
      className="h-[85vh] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 flex items-center " >

        <div className="ml-10">

          <h1 className="text-6xl font-bold text-white">
            Unlimited Movies,
            <br />
            Endless Entertainment
          </h1>

          <p className="text-gray-300 mt-6 w-[500px] text-lg">
            Book tickets for the latest Bollywood, Hollywood and South Indian
            movies with just one click.
          </p>

          <button className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-white font-bold">
            Book Now
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;