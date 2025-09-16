import React from "react";
import sc from '../assets/sc.svg' 
import hero from '../assets/blockchain_hero_bg.png'
export default function Hero() {
  return (
    <section className="hero-section relative bg-black text-white w-full overflow-hidden h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content */}
        <div className="max-w-2xl space-y-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Navigating the world <br /> of blockchain
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl">
            In our digital world, trust, security, and efficiency are vital. Enter blockchain
            technology, the game-changer.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 pt-4">
            <button className="px-6 py-3 border border-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-500 hover:text-black transition-all">
              GET STARTED
            </button>
            <button className="px-6 py-3 bg-gray-800 font-semibold rounded-md hover:bg-gray-700 transition-all">
              WHITE PAPER
            </button>
          </div>
        </div>

        {/* Right Side (Custom Background + Labels) */}
        <div className="relative flex-1 mt-16 lg:mt-0 lg:ml-20">
          {/* Background Glow */}
          <div className="absolute inset-0">
            <div className="w-[700px] h-[700px] bg-gradient-to-r from-green-500 via-blue-600 to-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>

          {/* Floating Labels */}
          <div className="relative space-y-12">
            <div className="absolute top-0 right-0 flex items-center gap-2">
              <span className="text-sm">Secure & Safe</span>
              <img src={sc} alt="secure" />
            </div>

            <div className="absolute top-32 left-12 flex items-center gap-2">
              <span className="text-sm">Tested</span>
              <img src={sc} alt="tested" />
            </div>

            <div className="absolute bottom-20 left-40 flex items-center gap-2">
              <span className="text-sm">Optimized</span>
              <img src={sc} alt="optimized" />
            </div>

            <div className="absolute top-40 right-20 flex items-center gap-2">
              <span className="text-sm">Trustworthy</span>
              <img src={sc} alt="trustworthy" />
            </div>
          </div>
        </div>
      </div>

      {/* Scoped Background CSS */}
      <style>{`
        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(0, 255, 200, 0.1), transparent 70%);
          background-image: url('${hero}');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: bottom;
          opacity: 0.3;
          z-index: 0;
        }
      `}</style>
    </section>
  );
}
