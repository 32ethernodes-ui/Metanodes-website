import React from "react";
import { User, BarChart3, ShieldCheck } from "lucide-react";
import img1 from '../assets/about-img.png'
export default function About() {
  return (
    <section
      id="about" // 👈 added so menu can scroll here
      className="about-section bg-[#000] text-white py-16 px-6 scroll-smooth"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Meta Nodes →</h1>
        <p className="text-gray-300">
          AT Meta Nodes, we are helping people to secure their future and wealth
          with the revolutionary methods of making money.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 relative">
        {/* Left Card */}
        <div className="about-card bg-[#141923] p-8 rounded-lg relative w-full max-w-md border border-gray-800">
          <div className="flex items-center mb-6">
            <div className="about-hexagon bg-[#1c2230] p-4 flex items-center justify-center">
              <User className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="ml-4 text-2xl font-semibold">Opportunity</h3>
          </div>

          <ul className="space-y-4">
            {[
              {
                title:
                  "We are creating an opportunity that will change your life entirely. For each individual person, joining us means achieving the three most important goals.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <ShieldCheck className="text-blue-400 w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Graphic */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center relative">
            <img src="/src/assets/about-img.png" alt="About Meta Nodes" />
          </div>
        </div>

        {/* Right Card */}
        <div className="about-card bg-[#141923] p-8 rounded-lg relative w-full max-w-md border border-gray-800">
          <div className="flex items-center mb-6">
            <div className="about-hexagon bg-[#1c2230] p-4 flex items-center justify-center">
              <BarChart3 className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="ml-4 text-2xl font-semibold">Purpose</h3>
          </div>

          <ul className="space-y-4">
            {[
              {
                title:
                  "Our purpose is to help more and more people experience financial well-being, from large institutions to individuals investing for their future.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <ShieldCheck className="text-blue-400 w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .about-hexagon {
          clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
        }
        .about-card {
          clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px);
        }
      `}</style>
    </section>
  );
}
