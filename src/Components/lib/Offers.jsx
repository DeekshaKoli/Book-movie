import React from "react";

const offers = [
  {
    id: 1,
    title: "50% OFF on First Booking",
    description: "Use code FIRST50 and save up to ₹250.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Free Popcorn Combo",
    description: "Get a free popcorn combo on selected cinemas.",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    title: "20% Cashback",
    description: "Pay using UPI and get instant cashback.",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b?w=600",
    color: "bg-green-500",
  },
];

const Offers = () => {
  return (
    <section className="py-12 bg-black-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          🎉 Latest Offers
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <span
                  className={`${offer.color} text-white px-3 py-1 rounded-full text-sm`}
                >
                  Special Offer
                </span>

                <h3 className="text-xl font-bold mt-4">{offer.title}</h3>

                <p className="text-gray-600 mt-2">{offer.description}</p>

                <button className="mt-5 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;