import React from "react";
import { FaCoins, FaMedal, FaChartBar, FaUsers } from "react-icons/fa";

const Achieve = () => {
  const features = [
    {
      icon: (
        <FaCoins className="text-4xl text-indigo-700 group-hover:text-white transition" />
      ),
      title: "1 Platform",
      subtitle: "For All Investments",
    },
    {
      icon: (
        <FaMedal className="text-4xl text-indigo-700 group-hover:text-white transition" />
      ),
      title: "Trusted by 40L+",
      subtitle: "Customer",
    },
    {
      icon: (
        <FaChartBar className="text-4xl text-indigo-700 group-hover:text-white transition" />
      ),
      title: "Award-winning",
      subtitle: "Research",
    },
    {
      icon: (
        <FaUsers className="text-4xl text-indigo-700 group-hover:text-white transition" />
      ),
      title: "Industry Leaders",
      subtitle: "Since 37+ Years",
    },
  ];

  return (
    <div className="px-6 bg-[#000] md:px-16 lg:px-32 py-20 text-gray-800">
      {/* First Heading */}
      <h2 className="text-4xl md:text-5xl text-white font-bold text-center mb-6">
        Company Profile →
      </h2>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-center text-lg leading-relaxed text-gray-400 mb-12">
      <br></br>
        <p>
          We are a global asset manager and provide our own stable coin and
          Technology Provider dedicated to helping more and more people to create money
          that serves them throughout their lives.
        </p>
        <p className="mt-4">
          We help to invest to built savings. How our thinking on retirement can
          be reshaped. How expanding access to capital market can help build a
          more prosperous future for more people.
        </p>
      </div>

      {/* Second Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Loved By Lakhs of Users
       
      </h2>
      <br></br>
      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group border-2 border-gray-200 rounded-2xl bg-#000 p-8 flex flex-col items-center text-center 
              shadow-sm hover:shadow-xl transform transition duration-500 hover:scale-105 
              hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 cursor-pointer"
          >
            {feature.icon}
            <h3 className="mt-4 text-xl font-bold text-white group-hover:text-white transition">
              {feature.title}
            </h3>
            <p className="text-gray-500 mt-1 group-hover:text-gray-200 transition">
              {feature.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achieve;
