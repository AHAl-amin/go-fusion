
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck


// All code below this comment in this file will not be type-checked by TypeScript.
// This can be useful for migrating legacy JavaScript files or temporarily
// disabling type-checking for specific parts of a project.

"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import profile from "../public/images/profile.png"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import About from "./About"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const imageContainerRef = useRef(null)
  const badgeRef = useRef(null)
  const headingSpansRef = useRef([])
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    // Initialize GSAP settings
    gsap.set(heroRef.current, { opacity: 0 })
    gsap.set(badgeRef.current, { opacity: 0, y: 30 })
    gsap.set(descriptionRef.current, { opacity: 0, y: 30 })
    gsap.set(buttonRef.current, { opacity: 0, y: 30 })
    gsap.set(imageContainerRef.current, { opacity: 0, scale: 0.8 })
    gsap.set(".profile-card-overlay", { opacity: 0, y: 50 })

    // Create a GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Animate hero section
    tl.to(heroRef.current, { opacity: 1, duration: 0.5 }, 0)
      .fromTo(badgeRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "<0.2")
      .fromTo(descriptionRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "<0.2")
      .fromTo(buttonRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "<0.2")
      .fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.7)" },
        "<0.3"
      )
      .fromTo(
        ".profile-card-overlay",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "<0.5"
      )

    // Animate heading words one by one
    headingSpansRef.current.forEach((span, spanIndex) => {
      const chars = span.textContent.split(" ").flatMap((word) => word.split("")) // Split into characters
      span.innerHTML = chars
        .map((char) => `<span class="inline-block">${char}</span>`)
        .join("") // Wrap each character in a span

      const charSpans = span.querySelectorAll("span")
      gsap.set(charSpans, { opacity: 0, y: 30 }) // Set initial state for each character

      tl.fromTo(
        charSpans,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1, // Stagger each character
          ease: "power3.out",
        },
        spanIndex * 0.5 // Delay each span's animation
      )
    })

    // Animate background lines
    gsap.from(".animated-bg-line-v, .animated-bg-line-h", {
      strokeDashoffset: 200,
      duration: 2,
      stagger: 0.05,
      ease: "power1.inOut",
      delay: 0.5,
      repeat: -1,
      yoyo: true,
    })

    // Cleanup animations
    return () => {
      tl.kill()
      gsap.killTweensOf(".animated-bg-line-v, .animated-bg-line-h")
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const verticalLines = Array.from({ length: 20 }, (_, i) => (i + 1) * 5)
  const horizontalLines = Array.from({ length: 20 }, (_, i) => (i + 1) * 5)

  return (
    <div
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1e2404] p-4 font-inter text-white md:py-20 py-10"
    >
      <div className="absolute inset-0 z-0 ">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F8053]/10 via-transparent to-[#0D0F0C]/10"></div>

      </div>

      <div className="relative z-10 mx-auto grid w-full container grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 lg:gap-12  ">
        <div ref={contentRef} className="flex flex-col items-center text-center md:items-start md:text-left ">
         

          <div
            ref={heroRef}
            className="relative flex items-center justify-center overflow-hidden  p-4 font-inter   text-white"
          >


            <div className="relative z-10 mx-auto grid w-full  items-center justify-between gap-8  lg:gap-12">
              {/* LEFT SIDE CONTENT */}
              <div ref={contentRef} className="flex flex-col items-center text-center md:items-start md:text-left">

                {/* BADGE */}
                <div
                  ref={badgeRef}
                  className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#96d1b0]/90 px-4 py-2 shadow-md backdrop-blur-sm"
                >
                  <svg className="h-8 w-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.961a1 1 0 00.95.691h4.153c.969 0 1.371 1.24.588 1.81l-3.35 2.434a1 1 0 00-.364 1.118l1.287 3.961c.3.921-.755 1.688-1.54 1.118l-3.35-2.434a1 1 0 00-1.176 0l-3.35 2.434c-.785.57-1.84-.197-1.54-1.118l1.287-3.961a1 1 0 00-.364-1.118L2.055 9.389c-.783-.57-.581-1.81.588-1.81h4.153a1 1 0 00.95-.691l1.286-3.961z" />
                  </svg>
                  <p className="font-medium text-black text-sm">
                    Trusted by 100+ Global Clients on Fiverr
                  </p>
                </div>

                {/* HEADING */}
                <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                  {/* <span ref={(el) => (headingSpansRef.current[0] = el)} className="block"> */}
                    Transforming <br /> Ideas
                  {/* </span> */}
                  <span  className="block text-[#96d1b0]">
                    into   Smart  Digital  Products.
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p ref={descriptionRef} className="max-w-lg text-lg text-gray-300">
                  Hi, I’m <span className="text-[#96d1b0] font-bold">Md Toki Osmani</span> — your go-to
                  full-stack web & AI developer. I help startups and brands craft modern, scalable, and
                  intelligent digital solutions that engage users and grow businesses.
                </p>

                {/* BUTTON */}
                <a ref={buttonRef} className="mt-8 max-sm:w-full" href="https://www.fiverr.com/go_fusion">
                  <div className="group relative h-fit w-fit cursor-pointer max-sm:w-full">
                    <div className="absolute inset-0 rounded-full bg-[#1F8053] blur-sm opacity-0 transition-all duration-500 group-hover:animate-pulse group-hover:opacity-100"></div>
                    <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#1F8053] to-[#1F8053]/45 blur-sm transition-all group-hover:animate-pulse group-hover:to-[#1F8053]"></div>
                    <div className="relative overflow-hidden rounded-full p-[2px]">
                      <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#96d1b0] via-transparent to-transparent group-hover:via-[#1F8053] group-hover:to-[#1F8053]"></div>
                      <div className="relative z-20 flex items-center justify-center gap-2 rounded-full bg-[#0D0F0C] px-10 py-3 text-white">
                        Let’s Build Your Project
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


            </div>
          </div>

          <About />
        </div>

        <div ref={imageContainerRef} className="relative flex justify-center md:ml-auto">
          <div className="relative z-10 overflow-hidden rounded-2xl  transition-all duration-300  group-hover:border-[#0fdd33]">
            <Image
              src={profile || "/placeholder.svg"}
              alt="Md Toki Osmani - Founder & CEO"
              className="relative z-10 h-auto w-full object-cover max-w-4/5 mx-auto"
            />

            <div className="profile-card-overlay  left-4 right-4    z-30">
              <div className="mx-auto w-full max-w-[500px] rounded-full bg-transparent backdrop-blur-sm  p-4  border-2  border-[#2a640f]">
               <div className="flex flex-col items-center gap-1">
              <h3 className="text-xl font-bold text-gray-200 sm:text-2xl">Md Toki Osmani</h3>
              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-200 text-sm">Full Stack Developer</p>
                <div className="h-1 w-1 rounded-full bg-gray-200"></div>
                <p className="font-medium text-gray-200 text-sm">Fiverr Pro Seller</p>
              </div>
              <div className="mt-1 flex items-center gap-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#1F8053]"></div>
                <span className="text-xs text-gray-300">Available for New Projects</span>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
