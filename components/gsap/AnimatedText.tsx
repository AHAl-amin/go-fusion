"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface RotatingTextProps {
  text: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".letter");

    gsap.to(letters, {
      rotation: 360, // rotate each letter 90°
      transformOrigin: "50% 50%", // rotate around center
      duration: 1,
      stagger: 0.1, // each letter rotates slightly after previous
      repeat: -1, // infinite
      yoyo: true, // rotate back to original
      ease: "power1.inOut",
    });
  }, [text]);

  return (
    <div ref={containerRef} className={`inline-flex flex-wrap gap-1`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter inline-block text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default RotatingText;
