import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        movie,
        user,
        seats,
        total,
        date,
        showTime,
    } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState("UPI");
    const [showSuccess, setShowSuccess] = useState(false);

    const bookingId =
        "BMS" + Math.floor(Math.random() * 1000000);

    const handlePayment = async () => {
        try {

            const booking = {
                movie,
                user,
                date: location.state?.date,
                showTime: location.state?.showTime,
                seats,
                total,
                status: "Confirmed",
                bookingId,
            };

            await axios.post(
                "http://localhost:3001/bookings",
                booking
            );

            setTimeout(() => {
                setShowSuccess(true);
            }, 1500);

        } catch (err) {
            console.log(err);
            alert("Booking Failed");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">

            <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-xl p-8">

                <h1 className="text-4xl text-center font-bold text-red-500 mb-6">
                    Payment
                </h1>

                {/* Movie */}
                <div className="mb-5 border-b border-gray-700 pb-4">
                    <h2 className="text-2xl font-bold">{movie?.title}</h2>

                    <p className="text-gray-300">
                        Rating : ⭐ {movie?.rating}
                    </p>
                </div>

                {/* User */}
                <div className="mb-5 border-b border-gray-700 pb-4">
                    <p>
                        <b>Name :</b> {user?.name}
                    </p>

                    <p>
                        <b>Email :</b> {user?.email}
                    </p>

                    <p>
                        <b>Mobile :</b> {user?.mobile}
                    </p>
                </div>

                {/* Seats */}
                <div className="mb-5 border-b border-gray-700 pb-4">

                    <p>
                        <b>Seats :</b> {seats?.join(", ")}
                    </p>

                    <p className="text-green-400 text-xl mt-2">
                        Total : ₹{total}
                    </p>

                </div>

                {/* Payment Method */}
                <h3 className="text-xl font-bold mb-4">
                    Select Payment Method
                </h3>

                <div className="space-y-3">

                    <label className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg cursor-pointer">
                        <input
                            type="radio"
                            checked={paymentMethod === "UPI"}
                            onChange={() => setPaymentMethod("UPI")}
                        />
                        UPI
                    </label>

                    <label className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg cursor-pointer">
                        <input
                            type="radio"
                            checked={paymentMethod === "Card"}
                            onChange={() => setPaymentMethod("Card")}
                        />
                        Credit / Debit Card
                    </label>

                    <label className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg cursor-pointer">
                        <input
                            type="radio"
                            checked={paymentMethod === "Net Banking"}
                            onChange={() => setPaymentMethod("Net Banking")}
                        />
                        Net Banking
                    </label>

                </div>

                <button
                    onClick={handlePayment}
                    className="w-full mt-8 bg-green-600 hover:bg-green-700 py-3 rounded-xl text-xl font-bold"
                >
                    Pay ₹{total}
                </button>

            </div>

            {/* Success Popup */}

            {showSuccess && (

                <div className="fixed inset-0 bg-black/70 flex justify-center items-center">

                    <div className="bg-white text-black rounded-2xl p-8 w-[400px] text-center">

                        <div className="text-7xl">
                            ✅
                        </div>

                        <h2 className="text-3xl font-bold text-green-600 mt-3">
                            Booking Confirmed
                        </h2>

                        <p className="mt-4">
                            Your ticket has been booked successfully.
                        </p>

                        <div className="mt-5 text-left">

                            <p>
                                <b>Booking ID :</b> {bookingId}
                            </p>

                            <p>
                                <b>Movie :</b> {movie?.title}
                            </p>

                            <p>
                                <b>Seats :</b> {seats?.join(", ")}
                            </p>

                            <p>
                                <b>Total :</b> ₹{total}
                            </p>
                            <p>
                                <b>Date :</b> {date}
                            </p>

                            <p>
                                <b>Show Time :</b> {showTime}
                            </p>

                        </div>

                        <button
                            onClick={() => navigate("/books")}
                            className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold"
                        >
                    Check Bookings                    </button>

                    </div>

                </div>

            )}

        </div>
    );
};

export default Payment;