"use client";
import React, { useState, useEffect, useRef, RefObject } from "react";

// Type for useInView hook
const useInView = (ref: RefObject<HTMLElement>) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return inView;
};

// Counter props type
interface CounterProps {
  from: number;
  to: number;
  inView: boolean;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, inView, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const duration = 2000; // Animation duration in ms

  useEffect(() => {
    if (!inView) {
      setCount(from);
      return;
    }

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const currentCount = Math.min(
        to,
        from + (to - from) * (progress / duration)
      );
      setCount(Math.ceil(currentCount));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, from, to]);

  const formatNumber = (num: number) => {
    const formattedNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${formattedNum}${suffix}`;
  };

  return <span>{formatNumber(count)}</span>;
};

const About: React.FC = () => {
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);
  const stat4Ref = useRef<HTMLDivElement>(null);

  const inView1 = useInView(stat1Ref as React.RefObject<HTMLElement>);
  const inView2 = useInView(stat2Ref as React.RefObject<HTMLElement>);
  const inView3 = useInView(stat3Ref as React.RefObject<HTMLElement>);
  const inView4 = useInView(stat4Ref as React.RefObject<HTMLElement>);

  return (
    <div
      id="about"
      className="flex items-center justify-center min-h-screen bg-black text-white p-4 font-inter"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center">
        <div className=" uppercase font-semibold text-2xl text-white tracking-wide mb-2">
          About Me
        </div>

        <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 sm:block  max-xl:text-[38px] text-[60px] bg-gradient-to-r from-[#96D1B0] via-[#F5F5F8] to-[#96D1B0]  bg-clip-text text-transparent ">
          <span className="max-sm:text-white">I Believe In </span>Numbers
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            ref={stat1Ref}
            className="relative flex flex-col items-center p-6 bg-white text-black rounded-2xl shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="text-5xl font-extrabold text-[#0f7238]  mb-2">
              <Counter from={0} to={100} inView={inView1} suffix="%" />
            </div>
            <h2 className="text-lg font-bold mb-1">Client Satisfaction</h2>
          </div>

          <div
            ref={stat2Ref}
            className="relative flex flex-col items-center p-6 bg-white text-black rounded-2xl shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="text-5xl font-extrabold text-[#0f7238]  mb-2">
              <Counter from={0} to={362} inView={inView2} suffix="+" />
            </div>
            <h2 className="text-lg font-bold mb-1">Projects Completed</h2>
          </div>

          <div
            ref={stat3Ref}
            className="relative flex flex-col items-center p-6 bg-white text-black rounded-2xl shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="text-5xl font-extrabold text-[#0f7238]  mb-2">
              <Counter from={0} to={5} inView={inView3} suffix="+" />
            </div>
            <h2 className="text-lg font-bold mb-1">Years Experience</h2>
          </div>

          <div
            ref={stat4Ref}
            className="relative flex flex-col items-center p-6 bg-white text-black rounded-2xl shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="text-5xl font-extrabold text-[#0f7238]  mb-2">
              <Counter from={0} to={89} inView={inView4} suffix="+" />
            </div>
            <h2 className="text-lg font-bold mb-1">Top Rated Freelancers</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
