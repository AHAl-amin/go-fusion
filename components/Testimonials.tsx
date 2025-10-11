/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";

import { useState, useEffect, useRef } from "react";
import Client1 from "../public/images/review/client1.png";
import Client2 from "../public/images/review/client2.png";
import Client3 from "../public/images/review/client3.png";
import Client4 from "../public/images/review/client4.png";
import Client5 from "../public/images/review/client5.png";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
// import Image from "next/image";


const testimonials = [
  {
    id: 1,
    name: "dina_c_woods",
    username: "@dina_c_woods",
    body: "What I love most? He makes every project feel effortless. After several collaborations, he’s become someone I fully trust to just get it right without handholding.",
    img: Client1, // Use imported image
    image: Client1, // Use imported image
    position: "Client",
    quote: "What I love most? He makes every project feel effortless. After several collaborations, he’s become someone I fully trust to just get it right without handholding.",
  },
  {
    id: 2,
    name: "jayfettig693",
    username: "@jayfettig693",
    body: "I've dealt with developers for years and was admittedly reluctant to deal with someone in the other side of the world, on different time zones, etc. I am so glad that I chose them and can't recommend them high enough. Fantastic.",
    img: Client2,
    image: Client2,
    position: "Client",
    quote: "I've dealt with developers for years and was admittedly reluctant to deal with someone in the other side of the world, on different time zones, etc. I am so glad that I chose them and can't recommend them high enough. Fantastic.",
  },
  {
    id: 3,
    name: "kyprianou",
    username: "@kyprianou",
    body: "Each project benefits from his unique blend of creativity and technical skill, resulting in sites that not only look fantastic but also perform flawlessly. His commitment and attention to detail always ensure the final product goes beyond what I imagined.",
    img: Client3,
    image: Client3,
    position: "Client",
    quote: "Each project benefits from his unique blend of creativity and technical skill, resulting in sites that not only look fantastic but also perform flawlessly. His commitment and attention to detail always ensure the final product goes beyond what I imagined.",
  },
  {
    id: 4,
    name: "Hossian0",
    username: "@Hossian0",
    body: "This is not our first project together, and there’s a reason I came back Mohin and his team deliver. Every milestone is handled with care, creativity, and precision. We’re almost at the finish line, and I already know the outcome will be something to be proud of.",
    img: Client4,
    image: Client4,
    position: "Client",
    quote: "This is not our first project together, and there’s a reason I came back Mohin and his team deliver. Every milestone is handled with care, creativity, and precision. We’re almost at the finish line, and I already know the outcome will be something to be proud of.",
  },
  {
    id: 5,
    name: "Ali_mounji",
    username: "@Ali_mounji",
    body: "Very satisfied with how professional and fast Mihads team is! Did a great piece of work in relatively short time.",
    img: Client5,
    image: Client5,
    position: "Client",
    quote: "Very satisfied with how professional and fast Mihads team is! Did a great piece of work in relatively short time.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
    startAutoSlide();
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
    startAutoSlide();
  };

  const getCardPosition = (index) => {
    const totalItems = testimonials.length;
    let diff = index - currentIndex;
    if (diff > totalItems / 2) {
      diff -= totalItems;
    } else if (diff < -totalItems / 2) {
      diff += totalItems;
    }

    if (diff === 0) return "center";
    if (diff === 1 || diff === -1) return "adjacent";
    return "edge";
  };

  return (
    <div  id="testimonial" className="py-16 px-4 " >
      <div className="max-w-[165vh] mx-auto">
        <div className="relative z-10 w-full text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-200 via-orange-300 to-[#195022cb] text-transparent bg-clip-text dark:text-white mb-2">
            What Our Clients Say
          </h2>
          <p className="text-white dark:text-gray-400 text-lg">
            Real feedback from Fiverr clients we’ve helped succeed.
          </p>
        </div>

        <div className="relative">
          <div className="relative h-[500px] flex items-center justify-center overflow-hidden perspective-1000">
            <div className="absolute w-full flex justify-center items-center">
              {testimonials.map((testimonial, index) => {
                const position = getCardPosition(index);

                let transform = "";
                switch (position) {
                  case "center":
                    transform = "translateX(0%) scale(1) rotateY(0deg)";
                    break;
                  case "adjacent":
                    const isNextAdjacent = (index - currentIndex + testimonials.length) % testimonials.length === 1;
                    transform = isNextAdjacent
                        ? "translateX(100%) scale(0.85) rotateY(-5deg)"
                        : "translateX(-100%) scale(0.85) rotateY(5deg)";
                    break;
                  case "edge":
                    const isFarRight = (index - currentIndex + testimonials.length) % testimonials.length > testimonials.length / 2;
                    transform = isFarRight
                        ? "translateX(-185%) scale(0.7) rotateY(10deg)"
                        : "translateX(185%) scale(0.7) rotateY(-10deg)";
                    break;
                }

                const cardStyles = {
                  transform,
                  transformStyle: "preserve-3d",
                  zIndex: position === "center" ? 30 : position === "adjacent" ? 20 : 10,
                  opacity: position === "center" ? 1 : position === "adjacent" ? 0.9 : 0.7,
                  height: "auto",
                  width: "100%",
                  maxWidth: "360px",
                  transitionProperty: "transform, opacity",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                };

                return (
                  <div
                    key={testimonial.id}
                    className="absolute shadow-md"
                    style={cardStyles}
                  >
                    <div
                      className={`rounded-lg shadow-xl p-6 h-full flex flex-col items-center overflow-hidden transition-colors duration-300 ${position === "center"
                        ? "bg-white dark:bg-[#00308F]"
                        : "bg-white dark:bg-gray-800"
                        }`}
                    >
                      {position === "center" && (
                        <>
                        </>
                      )}
                      <div
                        className={`absolute -top-14 rounded-full overflow-hidden border-2 border-blue-100 dark:border-gray-900 transition-all duration-300 ${position === "center"
                          ? "w-32 h-32"
                          : position === "adjacent"
                            ? "w-24 h-24"
                            : "w-16 h-16 mt-5"
                          }`}
                      >
                        <Image
                        width={300}
                        height={300}
                          src={testimonial.image.src}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div
                        className={`text-orange-300 mb-2 transition-all duration-300 ${position === "center"
                          ? "h-8 mt-10"
                          : position === "adjacent"
                            ? "h-6 mt-5"
                            : "h-4 mt-2"
                          }`}
                      >
                      </div>

                      <h3
                        className={`font-bold mb-2 transition-all duration-300 ${position === "center"
                          ? "text-xl text-orange-300 dark:text-white"
                          : position === "adjacent"
                            ? "text-lg text-gray-900 dark:text-gray-100"
                            : "text-base text-gray-900 dark:text-gray-100"
                          }`}
                      >
                        {testimonial.name}
                      </h3>

                      <p
                        className={`mb-4 font-bold transition-all duration-300 ${position === "center"
                          ? "text-base text-gray-600 dark:text-gray-200"
                          : position === "adjacent"
                            ? "text-sm text-gray-600 dark:text-gray-300"
                            : "text-xs text-gray-600 dark:text-gray-300"
                          }`}
                      >
                        {testimonial.username}
                      </p>

                      <p
                        className={`text-center font-[500] overflow-hidden transition-all duration-300 ${position === "center"
                          ? "text-base text-gray-500 dark:text-gray-300 leading-relaxed"
                          : position === "adjacent"
                            ? "text-[12px] text-gray-500 dark:text-gray-400 leading-snug"
                            : "text-[10px] text-gray-500 dark:text-gray-400 leading-tight line-clamp-3"
                          }`}
                      >
                        {position === "center"
                          ? testimonial.quote
                          : position === "adjacent"
                            ? testimonial.quote.length > 120
                              ? `${testimonial.quote.substring(0, 120)}...`
                              : testimonial.quote
                            : testimonial.quote.length > 80
                              ? `${testimonial.quote.substring(0, 80)}...`
                              : testimonial.quote}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full text-white flex items-center justify-center bg-[#624a04] hover:bg-[#4d3b06] border border-orange-100 transition-colors duration-300 disabled:opacity-50 cursor-pointer"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full text-white flex items-center justify-center bg-[#624a04] border hover:bg-[#4d3b06] border-orange-100 transition-colors duration-300 disabled:opacity-50 cursor-pointer"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;