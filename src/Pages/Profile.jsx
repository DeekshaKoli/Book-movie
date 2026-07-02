import React from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Ticket,
  Heart,
  Gift,
  Settings,
  LogOut,
  BadgeCheck,
  Edit,
  Calendar,
  Star,
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  const loggedInEmail = localStorage.getItem("loggedInUser");
  const users = JSON.parse(localStorage.getItem("user")) || [];

  const user = users.find((u) => u.email === loggedInEmail);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black-100">
        <h1 className="text-3xl  text-red-600 font-bold">
          Please Login First
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eef2f7] flex justify-center items-center p-8">

      <div className="w-[1100px] h-[1320px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] flex overflow-hidden">

        {/* LEFT PANEL */}

        <div className="w-[300px] bg-gradient-to-b from-[#e11d48] via-[#b91c1c] to-[#111827] text-white p-7 flex flex-col">

          <div className="flex flex-col items-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
              alt=""
            />

            <h2 className="text-3xl font-bold mt-4">
              {user.name}
            </h2>

            <p className="text-red-100 mt-1">
              Movie Enthusiast 🎬
            </p>

            <div className="mt-4 bg-white/20 px-5 py-2 rounded-full flex items-center gap-2">
              <BadgeCheck size={18} />
              <span className="text-sm">
                Silver Member
              </span>
            </div>

          </div>

          <div className="mt-10 space-y-3">

            <div className="flex items-center gap-3 bg-white/15 hover:bg-white/25 duration-300 rounded-xl p-3 cursor-pointer">
              <Ticket />
              <span>My Bookings</span>
            </div>

            <div className="flex items-center gap-3 bg-white/15 hover:bg-white/25 duration-300 rounded-xl p-3 cursor-pointer">
              <Heart />
              <span>Favourite Movies</span>
            </div>

            <div className="flex items-center gap-3 bg-white/15 hover:bg-white/25 duration-300 rounded-xl p-3 cursor-pointer">
              <Gift />
              <span>Offers & Rewards</span>
            </div>

            <div className="flex items-center gap-3 bg-white/15 hover:bg-white/25 duration-300 rounded-xl p-3 cursor-pointer">
              <Settings />
              <span>Settings</span>
            </div>

          </div>

          <button
            onClick={logout}
            className="mt-auto bg-red-500 hover:bg-red-600 duration-300 rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>

        {/* RIGHT PANEL */}

        <div className="flex-1 p-10">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-bold text-gray-800">
                Welcome, {user.name} 👋
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your profile and account information
              </p>

            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 duration-300">
              <Edit size={18} />
              Edit Profile
            </button>

          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-[#743107] border border-gray-200 rounded-2xl p-5 hover:shadow-lg duration-300">

              <div className="flex items-center gap-4">

                <div className="bg-red-100 p-3 rounded-full">
                  <User className="text-red-600" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Full Name
                  </p>

                  <h3 className="font-semibold text-gray-800 text-lg">
                    {user.name}
                  </h3>

                </div>

              </div>

            </div>

            <div className="bg-[#743107] border border-gray-200 rounded-2xl p-5 hover:shadow-lg duration-300">

              <div className="flex items-center gap-4">

                <div className="bg-red-100 p-3 rounded-full">
                  <Mail className="text-red-600" />
                </div>

                <div className="w-full">
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <h3 className="font-semibold text-gray-800 break-all text-sm">
                    {user.email}
                  </h3>

                </div>

              </div>

            </div>

                        {/* Mobile */}

            <div className="bg-[#743107] border border-gray-200 rounded-2xl p-5 hover:shadow-lg duration-300">

              <div className="flex items-center gap-4">

                <div className="bg-red-100 p-3 rounded-full">
                  <Phone className="text-red-600" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Mobile Number
                  </p>

                  <h3 className="font-semibold text-gray-800">
                    {user.mobile}
                  </h3>

                </div>

              </div>

            </div>

            {/* Membership */}

            <div className="bg-[#743107] border border-gray-200 rounded-2xl p-5 hover:shadow-lg duration-300">

              <div className="flex items-center gap-4">

                <div className="bg-yellow-100 p-3 rounded-full">
                  <Star className="text-yellow-500" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Membership
                  </p>

                  <h3 className="font-semibold text-red-600">
                    Silver Member
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* Statistics */}

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-5">
            Account Overview
          </h2>

          <div className="grid grid-cols-3 gap-5">

            <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-white p-6 shadow-lg">

              <h1 className="text-4xl font-bold">
                12
              </h1>

              <p className="mt-2 text-red-100">
                Movies Watched
              </p>

            </div>

            <div className="rounded-2xl bg-gradient-to-r from-slate-800 to-black text-white p-6 shadow-lg">

              <h1 className="text-4xl font-bold">
                5
              </h1>

              <p className="mt-2 text-gray-300">
                Bookings
              </p>

            </div>

            <div className="rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 shadow-lg">

              <h1 className="text-4xl font-bold">
                ₹450
              </h1>

              <p className="mt-2 text-yellow-100">
                Reward Points
              </p>

            </div>

          </div>

          {/* Recent Booking */}

          <div className="mt-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Recent Booking
            </h2>

            <div className="bg-[#21384f] border border-gray-200 rounded-2xl p-5 flex justify-between items-center hover:shadow-lg duration-300">

              <div>

                <h3 className="font-bold text-lg">
                  Avengers: Endgame
                </h3>

                <p className="text-gray-500 mt-1 flex items-center gap-2">
                  <Calendar size={16} />
                  02 July 2026 • 7:30 PM
                </p>

              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl duration-300">
                View Ticket
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;