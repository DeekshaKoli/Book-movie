import React from "react";

const Animatedbg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Top Left Glow */}
      <div className="absolute top-[-120px] left-[-100px] w-96 h-96 bg-red-600/30 rounded-full blur-[120px] animate-float"></div>

      {/* Bottom Right Glow */}
      <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-[150px] animate-float2"></div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-red-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      {/* Small Floating Balls */}

      <div className="absolute top-20 left-40 w-5 h-5 bg-red-500 rounded-full opacity-70 animate-bounce"></div>

      <div className="absolute top-52 right-52 w-4 h-4 bg-white rounded-full opacity-60 animate-ping"></div>

      <div className="absolute bottom-28 left-72 w-6 h-6 bg-pink-500 rounded-full opacity-70 animate-bounce"></div>

      <div className="absolute bottom-20 right-32 w-3 h-3 bg-red-400 rounded-full opacity-70 animate-ping"></div>

      <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-red-300 rounded-full opacity-60 animate-bounce"></div>

      {/* Grid Effect */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

    </div>
  );

  
};

export default Animatedbg;