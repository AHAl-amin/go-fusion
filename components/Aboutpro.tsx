"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Brain, Globe2, Rocket } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const Aboutpro = () => {
    const aboutRef = useRef(null)

    useEffect(() => {
        const el = aboutRef.current
        gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        )
    }, [])

    return (
        <section
            ref={aboutRef}
            id="about"
            className="relative z-10 mt-32 mb-20 flex flex-col items-center justify-center px-6 text-white container mx-auto"
        >
            {/* Section Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-200 via-orange-300 to-[#195022cb] text-transparent bg-clip-text dark:text-white mb-2">
                    About Me
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto text-xl">
                    A passionate developer crafting elegant, high-performing, and scalable digital solutions for modern businesses.
                </p>
            </div>

            {/* About Content */}
            <div className=" mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left side text */}
                <div className="space-y-6 text-xl">
                    <p className="text-gray-100 leading-7">
                        Hi, I’m <span className="text-[#96d1b0] font-bold">Md Toki Osmani</span> — a full-stack web and AI developer
                        who loves turning complex ideas into seamless user experiences. With deep expertise in
                        <span className="text-[#96d1b0] font-semibold"> React, Next.js,  Express, Django, MongoDB, PostgreSQL,  Tailwind CSS,</span> and modern AI
                        integrations, I build products that are fast, intuitive, and future-ready.
                    </p>

                    <p className="text-gray-100 leading-relaxed">
                        Over the years, I’ve collaborated with global clients on Fiverr — helping startups, entrepreneurs,
                        and established brands design, develop, and deploy web applications that truly stand out.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-4 text-xl">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-[#1F8053]/20">
                                <Code className="text-[#96d1b0]" size={22} />
                            </div>
                            <p className=" text-gray-200 font-medium">Full Stack Development</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-[#1F8053]/20">
                                <Brain className="text-[#96d1b0]" size={22} />
                            </div>
                            <p className=" text-gray-200 font-medium">AI-Powered Applications</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-[#1F8053]/20">
                                <Globe2 className="text-[#96d1b0]" size={22} />
                            </div>
                            <p className=" text-gray-200 font-medium">Modern Web Design</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-[#1F8053]/20">
                                <Rocket className="text-[#96d1b0]" size={22} />
                            </div>
                            <p className=" text-gray-200 font-medium">App Optimization & Scaling</p>
                        </div>
                    </div>

                

                        <a  className="mt-8 max-sm:w-full" href="#contact">
                  <div className="group relative h-fit w-fit cursor-pointer max-sm:w-full">
                    <div className="absolute inset-0 rounded-full bg-[#1F8053] blur-sm opacity-0 transition-all duration-500 group-hover:animate-pulse group-hover:opacity-100"></div>
                    <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#1F8053] to-[#1F8053]/45 blur-sm transition-all group-hover:animate-pulse group-hover:to-[#1F8053]"></div>
                    <div className="relative overflow-hidden rounded-full p-[2px]">
                      <div className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-r from-[#96d1b0] via-transparent to-transparent group-hover:via-[#1F8053] group-hover:to-[#1F8053]"></div>
                      <div className="relative z-20 flex items-center justify-center gap-2 rounded-full bg-[#34442c] px-10 py-3 text-white">
                         Let’s Work Together
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

                {/* Right side visual card */}
                <div className="relative rounded-2xl border border-[#1F8053]/30 bg-[#141414]/60 p-8 backdrop-blur-md shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F8053]/10 via-transparent to-[#96d1b0]/5 rounded-2xl"></div>
                    <div className="relative z-10 space-y-4">
                        <h3 className="text-2xl font-bold text-[#96d1b0]">What I Deliver</h3>
                        <ul className="space-y-3 text-gray-300 text-base">
                            <li>✅ Responsive and fast-loading web apps</li>
                            <li>✅ AI-enhanced chatbots and automation tools</li>
                            <li>✅ Elegant UI/UX with Tailwind & Framer Motion</li>
                            <li>✅ Secure, scalable backends with Node, MongoDB and ProsgreSQL</li>
                            <li>✅ Ongoing support and post-launch optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutpro
