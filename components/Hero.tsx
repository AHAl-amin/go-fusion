import React from "react";
import AnimatedText from "./gsap/AnimatedText";
import Image from "next/image";
import profile from "../public/images/profile.png";

const Hero = () => {
  const verticalLines = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);
  const horizontalLines = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 font-inter text-white relative">
      {/* Background Lines */}
      <div className="absolute h-full top-0 left-0 w-full z-10 max-sm:h-screen max-sm:opacity-70">
        <svg
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-full h-full opacity-20"
        >
          {/* Vertical Lines */}
          {verticalLines.map((x, i) => (
            <line
              key={`v-${i}`}
              x1={`${x}%`}
              y1="0"
              x2={`${x}%`}
              y2="100%"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
              strokeDasharray="10 20"
              className="animate-line-vertical"
            />
          ))}

          {/* Horizontal Lines */}
          {horizontalLines.map((y, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${y}%`}
              x2="100%"
              y2={`${y}%`}
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
              strokeDasharray="10 20"
              className="animate-line-horizontal"
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12">
        {/* Left side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#96d1b0] rounded-full">
            <svg
              className="w-4 h-4 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.961a1 1 0 00.95.691h4.153c.969 0 1.371 1.24.588 1.81l-3.35 2.434a1 1 0 00-.364 1.118l1.287 3.961c.3.921-.755 1.688-1.54 1.118l-3.35-2.434a1 1 0 00-1.176 0l-3.35 2.434c-.785.57-1.84-.197-1.54-1.118l1.287-3.961a1 1 0 00-.364-1.118L2.055 9.389c-.783-.57-.381-1.81.588-1.81h4.153a1 1 0 00.95-.691l1.286-3.961z" />
            </svg>
            <p className="text-sm font-medium text-black">
              TRUSTED BY 50+ BUSINESSES WORLDWIDE.
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            <span className="block">Plan. Design.</span>
            <span className="block">
              Build. <AnimatedText text="Maintain." />
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-lg">
            From strategic roadmaps and pixel-perfect designs to robust,
            scalable code and ongoing support, we partner with you at every
            step.
          </p>

          {/* Button */}
          <a className="max-sm:w-full mt-6" href="#contact">
            <div className="h-fit relative group cursor-pointer w-fit max-sm:w-full">
              <div className="absolute inset-0 bg-[#1F8053] rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
              <div className="bg-gradient-to-r from-[#1F8053] to-[#1F8053]/45 group-hover:to-[#1F8053] transition-all absolute top-0 left-0 w-full h-full rounded-full blur-sm group-hover:animate-pulse"></div>
              <div className="p-[2px] rounded-full relative overflow-hidden">
                <div className="bg-gradient-to-r from-[#1F8053] via-transparent to-transparent group-hover:via-[#1F8053] group-hover:to-[#1F8053] absolute top-0 left-0 w-full h-full rounded-full"></div>
                <div className="flex items-center justify-center gap-2 bg-[#0D0F0C] px-10 py-3 rounded-full relative z-20 text-white">
                  Start A Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    className="-rotate-45"
                  >
                    <path
                      d="M3.54297 8.49996H13.4596M13.4596 8.49996L8.5013 3.54163M13.4596 8.49996L8.5013 13.4583"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Right side */}
        <div className="flex-1 relative group flex justify-center">
          <div className="overflow-hidden rounded-2xl relative w-full max-w-md">
            <Image
              width={400}
              height={600}
              src={profile}
              alt="Gazi Alauddin - Tech Entrepreneur & CEO"
              className="relative mb-20 z-10 object-contain w-full mx-auto"
            />

            {/* Card Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-50">
              <div className="w-full max-w-[500px] mx-auto bg-gradient-to-r from-[#96d1b0] via-[#0fdd33] to-[#1F8053] p-4 rounded-lg backdrop-blur-sm shadow-lg">
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#010231]">

                    Md Toki Osmani
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-[#010231] text-sm font-medium">
                      Founder
                    </p>
                    <div className="w-1 h-1 bg-[#010231] rounded-full"></div>
                    <p className="text-[#010231] text-sm font-medium">
                     GO FUSION
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-[#010231]">
                      Fiverr Verified Pro Seller
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
