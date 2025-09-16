import React from "react";
import { Shield } from "lucide-react";
import img1 from '../assets/vision_img.png'
export default function Vision() {
  return (  
    <section
      id="vision" // 👈 added for smooth scroll target
      className="vision-section bg-[#000] text-white py-5 px-6 scroll-smooth"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side - Circle Animation */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2">
          {/* Big Circle */}
          <div className="w-100 h-100 relative">
            <img src={img1} alt="vision image" />

              {/* Small Circle 1 */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-orbit"></div>

              {/* Small Circle 2 */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-orbit-reverse"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Vision Of Meta Nodes
          </h2>
          <p className="text-gray-400 max-w-xl">
            <br />
            Vision of Metanodes is to listen to and deliver choice for our
            clients to choose their investment objectives, and they look to
            Metanodes to meet their needs.
            <br />
            <br />
            We offer them choices across a wide range of index, active, and
            whole portfolio solutions.
            <br />
            <br />
            For clients asking how to manage risk and capture opportunities
            associated with sustainability-related trends.
            <br />
            <br />
            We continue to innovate for the client, responding to client demand.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-orbit {
          animation: orbit 6s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbit 8s linear infinite reverse;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(160px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(160px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
