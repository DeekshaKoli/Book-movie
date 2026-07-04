import React from "react";
import {
  FaTicketAlt,
  FaShieldAlt,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTicketAlt size={45} className="text-red-500" />,
    title: "Easy Booking",
    description: "Book your favorite movies and shows in just a few clicks.",
  },
  {
    icon: <FaShieldAlt size={45} className="text-red-500" />,
    title: "Secure Payment",
    description: "100% safe and secure payment with trusted gateways.",
  },
  {
    icon: <FaMobileAlt size={45} className="text-red-500" />,
    title: "Mobile Tickets",
    description: "No need to print tickets. Just show your mobile QR code.",
  },
  {
    icon: <FaHeadset size={45} className="text-red-500" />,
    title: "24/7 Support",
    description: "Our support team is always available to help you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-8 text-center border border-gray-700 hover:border-red-500 hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-5">
              {item.icon}
            </div>

            <h3 className="text-white text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;