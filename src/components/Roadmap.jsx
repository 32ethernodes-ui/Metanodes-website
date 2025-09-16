import React from "react";
import img1 from '../assets/rmm_shape.png'
const roadmap = [
  { stage: "Node Running" },
  { stage: "Land Development" },
  { stage: "Strategic Investment" },
  { stage: "DAO Creation" },
  { stage: "BTC Reserve" },
  { stage: "Listing in Major CEX" },
  { stage: "Own Stable COW" },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap" // 👈 added for smooth scroll target
      className="relative bg-[#000] text-white py-20 px-6 overflow-hidden scroll-smooth"
    >
      <div className="container mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Roadmap
        </h2>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-y-16">
          {/* Center shape */}
          <div className=" lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0 flex justify-center">
            <img
              src={img1}
              alt="center line"
              className="h-full object-contain"
            />
          </div>

          {roadmap.map((milestone, i) => (
            <div
              key={i}
              className={`relative bg-[#141923]/90 border border-gray-800 custom-card p-8 w-full max-w-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 z-10 ${
                i % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
              }`}
            >
              {/* Arrow marker */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 ${
                  i % 2 === 0 ? "-right-6" : "-left-6"
                }`}
              ></div>

              {/* Content */}
              <h3 className="text-xl font-semibold">{milestone.stage}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for angled card corners */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .custom-card {
          clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
        }
      `}</style>
    </section>
  );
}
