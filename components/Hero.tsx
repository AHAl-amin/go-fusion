


// "use client";

// import React, { useEffect, useRef } from "react";
// import AnimatedText from "./gsap/AnimatedText";
// import Image from "next/image";
// import profile from "../public/images/profile.png";
// import gsap from 'gsap'; 

// const Hero = () => {
//   const heroRef = useRef(null);
//   const contentRef = useRef(null);
//   const imageContainerRef = useRef(null);
//   const badgeRef = useRef(null);
//   const headingSpansRef = useRef([]); 
//   const descriptionRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
   
//     gsap.set(heroRef.current, { opacity: 0 });
//     gsap.set(badgeRef.current, { opacity: 0, y: 30 });
//     headingSpansRef.current.forEach(span => gsap.set(span, { opacity: 0, y: 30 }));
//     gsap.set(descriptionRef.current, { opacity: 0, y: 30 });
//     gsap.set(buttonRef.current, { opacity: 0, y: 30 });
//     gsap.set(imageContainerRef.current, { opacity: 0, scale: 0.8 });
//     gsap.set(".profile-card-overlay", { opacity: 0, y: 50 });


    
//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//     tl.to(heroRef.current, { opacity: 1, duration: 0.5 }) // Fade in the main hero container
//       .fromTo(badgeRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "<0.2")
//       .fromTo(headingSpansRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, "<0.2")
//       .fromTo(descriptionRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "<0.2")
//       .fromTo(buttonRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "<0.2")
//       .fromTo(imageContainerRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.7)" }, "<0.3")
//       .fromTo(".profile-card-overlay", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "<0.5");


    
//     gsap.from(".animated-bg-line-v, .animated-bg-line-h", {
//       strokeDashoffset: 200,
//       duration: 2,
//       stagger: 0.05,
//       ease: "power1.inOut",
//       delay: 0.5, 
//       repeat: -1, 
//       yoyo: true 
//     });


//     return () => {
//       tl.kill(); 
//       gsap.killTweensOf(".animated-bg-line-v, .animated-bg-line-h");
//     };
//   }, []);


//   const verticalLines = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);
//   const horizontalLines = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

//   return (
//     <div
//       ref={heroRef}
//       // Removed initial opacity-0 here, GSAP will handle it
//       className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0F0C] p-4 font-inter text-white"
//     >
    
//       <div className="absolute inset-0 z-0"> 
//         {/* Subtle radial gradient for depth */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#1F8053]/10 via-transparent to-[#0D0F0C]/10"></div>
//         <svg
//           width="100%"
//           height="100%"
//           className="absolute inset-0 w-full h-full"
//         >
//           {verticalLines.map((x, i) => (
//             <line
//               key={`v-${i}`}
//               x1={`${x}%`}
//               y1="0"
//               x2={`${x}%`}
//               y2="100%"
//               stroke="rgba(255,255,255,0.1)"
//               strokeWidth="1"
//               strokeDasharray="10 20"
//               className="animated-bg-line-v"
//             />
//           ))}
//           {horizontalLines.map((y, i) => (
//             <line
//               key={`h-${i}`}
//               x1="0"
//               y1={`${y}%`}
//               x2="100%"
//               y2={`${y}%`}
//               stroke="rgba(255,255,255,0.1)"
//               strokeWidth="1"
//               strokeDasharray="10 20"
//               className="animated-bg-line-h"
//             />
//           ))}
//         </svg>
//       </div>

//       {/* Main Content Grid */}
//       <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center justify-between gap-12 md:grid-cols-2 lg:gap-24">
//         {/* Left Side: Text Content */}
//         <div
//           ref={contentRef}
//           className="flex flex-col items-center text-center md:items-start md:text-left"
//         >
//           {/* Badge */}
//           <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#96d1b0] px-4 py-2">
//             <svg
//               className="h-4 w-4 text-yellow-300"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.961a1 1 0 00.95.691h4.153c.969 0 1.371 1.24.588 1.81l-3.35 2.434a1 1 0 00-.364 1.118l1.287 3.961c.3.921-.755 1.688-1.54 1.118l-3.35-2.434a1 1 0 00-1.176 0l-3.35 2.434c-.785.57-1.84-.197-1.54-1.118l1.287-3.961a1 1 0 00-.364-1.118L2.055 9.389c-.783-.57-.581-1.81.588-1.81h4.153a1 1 0 00.95-.691l1.286-3.961z" />
//             </svg>
//             <p className="font-medium text-black text-sm">
//               TRUSTED BY 50+ BUSINESSES WORLDWIDE.
//             </p>
//           </div>

//           {/* Heading */}
//           <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
//             <span ref={el => headingSpansRef.current[0] = el} className="block">Plan. Design.</span>
//             <span ref={el => headingSpansRef.current[1] = el} className="block">
//               Build. <AnimatedText text="Maintain." />
//             </span>
//           </h1>

//           {/* Description */}
//           <p ref={descriptionRef} className="max-w-lg text-lg text-gray-300">
//             From strategic roadmaps and pixel-perfect designs to robust,
//             scalable code and ongoing support, we partner with you at every
//             step.
//           </p>

//           {/* Button */}
//           <a ref={buttonRef} className="mt-8 max-sm:w-full" href="#contact">
//             <div className="group relative h-fit w-fit cursor-pointer max-sm:w-full">
//               <div className="absolute inset-0 rounded-full bg-[#1F8053] blur-sm opacity-0 transition-all duration-500 group-hover:animate-pulse group-hover:opacity-100"></div>
//               <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#1F8053] to-[#1F8053]/45 blur-sm transition-all group-hover:animate-pulse group-hover:to-[#1F8053]"></div>
//               <div className="relative overflow-hidden rounded-full p-[2px]">
//                 <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#1F8053] via-transparent to-transparent group-hover:via-[#1F8053] group-hover:to-[#1F8053]"></div>
//                 <div className="relative z-20 flex items-center justify-center gap-2 rounded-full bg-[#0D0F0C] px-10 py-3 text-white">
//                   Start A Project
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="17"
//                     height="17"
//                     viewBox="0 0 17 17"
//                     fill="none"
//                     className="-rotate-45"
//                   >
//                     <path
//                       d="M3.54297 8.49996H13.4596M13.4596 8.49996L8.5013 3.54163M13.4596 8.49996L8.5013 13.4583"
//                       stroke="white"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </div>

//         {/* Right Side: Profile Image and Card */}
//         <div ref={imageContainerRef} className="relative flex justify-center md:ml-auto">
//           <div className="absolute inset-0 -m-2 rounded-3xl bg-gradient-to-br from-[#1F8053] via-[#0fdd33]/50 to-transparent opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-300 animate-pulse-slow"></div>

//           <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-[#1F8053] shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#0fdd33]">
//             <Image
//               width={400}
//               height={600}
//               src={profile}
//               alt="Md Toki Osmani - Founder & CEO"
//               className="relative z-10 h-auto w-full object-cover"
//             />

//             <div className="profile-card-overlay absolute bottom-4 left-4 right-4 z-30">
//               <div className="mx-auto w-full max-w-[500px] rounded-lg bg-gradient-to-r from-[#96d1b0] via-[#0fdd33] to-[#1F8053] p-4 shadow-lg backdrop-blur-sm">
//                 <div className="flex flex-col items-center gap-1">
//                   <h3 className="text-xl font-bold text-[#010231] sm:text-2xl">
//                     Md Toki Osmani
//                   </h3>
//                   <div className="flex items-center gap-2">
//                     <p className="font-medium text-[#010231] text-sm">
//                       Founder
//                     </p>
//                     <div className="h-1 w-1 rounded-full bg-[#010231]"></div>
//                     <p className="font-medium text-[#010231] text-sm">
//                       GO FUSION
//                     </p>
//                   </div>
//                   <div className="mt-1 flex items-center gap-1">
//                     <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400"></div>
//                     <span className="text-xs text-[#010231]">
//                       Fiverr Verified Pro Seller
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


"use client";

import React, { useEffect, useRef } from "react";
import AnimatedText from "./gsap/AnimatedText";
import Image from "next/image";
import profile from "../public/images/profile.png";
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const badgeRef = useRef(null);
  const headingSpansRef = useRef([]);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.set(heroRef.current, { opacity: 0 });
    gsap.set(badgeRef.current, { opacity: 0, y: 30 });
    headingSpansRef.current.forEach(span => gsap.set(span, { opacity: 0, y: 30 }));
    gsap.set(descriptionRef.current, { opacity: 0, y: 30 });
    gsap.set(buttonRef.current, { opacity: 0, y: 30 });
    gsap.set(imageContainerRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(".profile-card-overlay", { opacity: 0, y: 50 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(heroRef.current, { opacity: 1, duration: 0.5 })
      .fromTo(badgeRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "<0.2")
      .fromTo(headingSpansRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, "<0.2")
      .fromTo(descriptionRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "<0.2")
      .fromTo(buttonRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "<0.2")
      .fromTo(imageContainerRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.7)" }, "<0.3")
      .fromTo(".profile-card-overlay", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "<0.5");

    gsap.from(".animated-bg-line-v, .animated-bg-line-h", {
      strokeDashoffset: 200,
      duration: 2,
      stagger: 0.05,
      ease: "power1.inOut",
      delay: 0.5,
      repeat: -1,
      yoyo: true
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(".animated-bg-line-v, .animated-bg-line-h");
    };
  }, []);

  const verticalLines = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);
  const horizontalLines = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

  return (
    <div
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0F0C] p-4 font-inter text-white"
    >
      {/* Background Lines & Gradient (Enhanced) */}
      <div className="absolute inset-0 z-0">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F8053]/10 via-transparent to-[#0D0F0C]/10"></div>
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full"
        >
          {verticalLines.map((x, i) => (
            <line
              key={`v-${i}`}
              x1={`${x}%`}
              y1="0"
              x2={`${x}%`}
              y2="100%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="10 20"
              className="animated-bg-line-v"
            />
          ))}
          {horizontalLines.map((y, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${y}%`}
              x2="100%"
              y2={`${y}%`}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="10 20"
              className="animated-bg-line-h"
            />
          ))}
        </svg>
      </div>

  


      {/* Main Content Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center justify-between gap-12 md:grid-cols-2 lg:gap-24">
        {/* Left Side: Text Content */}
        <div
          ref={contentRef}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          {/* Badge */}
          <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#96d1b0] px-4 py-2">
            <svg
              className="h-4 w-4 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.961a1 1 0 00.95.691h4.153c.969 0 1.371 1.24.588 1.81l-3.35 2.434a1 1 0 00-.364 1.118l1.287 3.961c.3.921-.755 1.688-1.54 1.118l-3.35-2.434a1 1 0 00-1.176 0l-3.35 2.434c-.785.57-1.84-.197-1.54-1.118l1.287-3.961a1 1 0 00-.364-1.118L2.055 9.389c-.783-.57-.581-1.81.588-1.81h4.153a1 1 0 00.95-.691l1.286-3.961z" />
            </svg>
            <p className="font-medium text-black text-sm">
              TRUSTED BY 50+ BUSINESSES WORLDWIDE.
            </p>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span ref={el => headingSpansRef.current[0] = el} className="block">Plan. Design.</span>
            <span ref={el => headingSpansRef.current[1] = el} className="block">
              Build. <AnimatedText text="Maintain." />
            </span>
          </h1>

          {/* Description */}
          <p ref={descriptionRef} className="max-w-lg text-lg text-gray-300">
            From strategic roadmaps and pixel-perfect designs to robust,
            scalable code and ongoing support, we partner with you at every
            step.
          </p>

          {/* Button */}
          <a ref={buttonRef} className="mt-8 max-sm:w-full" href="#contact">
            <div className="group relative h-fit w-fit cursor-pointer max-sm:w-full">
              <div className="absolute inset-0 rounded-full bg-[#1F8053] blur-sm opacity-0 transition-all duration-500 group-hover:animate-pulse group-hover:opacity-100"></div>
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#1F8053] to-[#1F8053]/45 blur-sm transition-all group-hover:animate-pulse group-hover:to-[#1F8053]"></div>
              <div className="relative overflow-hidden rounded-full p-[2px]">
                <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#1F8053] via-transparent to-transparent group-hover:via-[#1F8053] group-hover:to-[#1F8053]"></div>
                <div className="relative z-20 flex items-center justify-center gap-2 rounded-full bg-[#0D0F0C] px-10 py-3 text-white">
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

        {/* Right Side: Profile Image and Card */}
        <div ref={imageContainerRef} className="relative flex justify-center md:ml-auto">
     

          <div className="relative z-10 overflow-hidden rounded-2xl  shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#0fdd33]">
            <Image
            
              src={profile}
              alt="Md Toki Osmani - Founder & CEO"
              className="relative z-10 h-auto w-full object-cover rounded-full"
            />

            <div className="profile-card-overlay absolute  left-4 right-4 bottom-0 z-30">
              <div className="mx-auto w-full max-w-[500px] rounded-lg bg-gradient-to-r from-[#96d1b0] via-[#0fdd33] to-[#1F8053] p-4 shadow-lg backdrop-blur-sm">
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-xl font-bold text-[#010231] sm:text-2xl">
                    Md Toki Osmani
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-[#010231] text-sm">
                      Founder
                    </p>
                    <div className="h-1 w-1 rounded-full bg-[#010231]"></div>
                    <p className="font-medium text-[#010231] text-sm">
                      GO FUSION
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400"></div>
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