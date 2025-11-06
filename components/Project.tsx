
"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import ImageSport1 from "../public/images/project-img/sport1.png";
import ImageCar1 from "../public/images/project-img/arisha.png";
import ImageGenesis1 from "../public/images/project-img/genesis1.png";
import ImageNevefold1 from "../public/images/project-img/nevafold1.png";



interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  videoSrc: string;
  imgSrc: StaticImageData;
  href: string;
}


const ProjectCard: React.FC<ProjectType> = ({
  title,
  description,
  tags,

  imgSrc,
  href,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="mb-5">
      <a
        href={href}
          target="_blank"
        className="bg-[#080808] rounded-2xl relative overflow-hidden group"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => videoRef.current?.pause()}
      >
        <div className="p-px rounded-2xl overflow-hidden">
          {/* <video
            ref={videoRef}
            className="w-full rounded-t-2xl"
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag
          </video> */}
          <Image
            src={imgSrc}
            width={1000}
            height={1000}
            alt="Bowlers Network"
            className="w-full md:h-[540px] h-[360px]"
          />
        </div>

        <div className="p-6 relative z-10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="bg-[#181818] text-base px-3 py-1 text-[#E4E4E4] w-fit rounded-lg max-lg:text-sm max-sm:text-xs max-sm:px-2"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="pt-3 space-y-2 max-lg:space-y-1">
            <h3 className="text-3xl max-lg:text-2xl text-white font-semibold">
              {title}
            </h3>
            <p className="text-[#C6C6C6] max-lg:line-clamp-2 font-medium max-sm:font-normal text-[16px] max-sm:text-[15px]">
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Project: React.FC = () => {
  const projects: ProjectType[] = [
    {
       title: "Ek Agency",
     description:
      "We partner with forward-thinking brands to craft bold experiences that resonate, convert and scale. From branding and UI/UX design to web development and performance optimisation, our team blends creative vision with technical expertise. By combining data-driven insights, seamless execution and continuous refinement, we help clients build meaningful connections and drive measurable impact. Let us transform your ideas into digital realities that not only look exceptional but perform brilliantly.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      imgSrc: ImageSport1,
     href: "https://ekagency.jvai.site/",
    },
    {
      title: "Ariah's World",
     description:
      "Ariah’s World is a holistic beauty and wellness sanctuary that celebrates the divine feminine through ritual-infused products and intentional self-care. Every creation is designed to nurture healing energy, elevate confidence, and help women reconnect with their inner power. Discover a world where beauty becomes a spiritual journey of love, light, and transformation",
      tags: ["Python", "React", "TensorFlow", "PostgreSQL", "D3.js"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      imgSrc: ImageCar1,
      
       href: "https://ariahsworld.com/",

     
   
    },
    {
      title: "Genesis",
       description:
      "Genesis is a next-generation AI platform built to transform the way creators, developers, and businesses harness artificial intelligence. From generative art and digital media to smart automation, it redefines what’s possible through cutting-edge machine learning. Experience a seamless fusion of creativity and technology that drives ideas into reality.",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      imgSrc: ImageGenesis1,
      href: "https://genesis.jvai.site/",
    },
    {
      title: "NevaFold",
       description:
      " NEVAFOLD is an energetic Australian-based fashion label dedicated to delivering high-quality active and street apparel that lifts your style and vibe. With vibrant colours, advanced fabric technology and ergonomic cuts, each piece is designed for both comfort and bold expression. Whether you’re training, chilling or stepping into the city, NEVAFOLD combines trend-forward aesthetics with performance features and ships worldwide. ",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
       imgSrc: ImageNevefold1,
      href: "https://nevafold.com.au/",
    },
  ];

  return (
    <div id="project" className="">
      <div className="container mx-auto flex max-sm:flex-col max-sm:items-start max-sm:gap-5 items-end justify-between max-xl:px-5">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6  max-xl:text-[38px] text-[60px]  text-white">
          Turning Vision{" "}
          <span className="sm:block font-bold max-xl:text-[38px] text-[60px] bg-gradient-to-r from-[#96D1B0] via-[#F5F5F8] to-[#96D1B0] leading-[1.15em] bg-clip-text text-transparent">
            <span className="max-sm:text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Into Reality{" "}
            </span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 container mx-auto gap-5 mt-10 max-lg:mt-14 max-sm:mt-0 max-sm:gap-5 max-xl:px-5">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
