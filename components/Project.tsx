
"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import ImageSport1 from "../public/images/project-img/sport1.png";
import ImageCar1 from "../public/images/project-img/car1.jpg";
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
  videoSrc,
  imgSrc,
  href,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="mb-5">
      <a
        href={href}
        className="bg-[#080808] rounded-2xl relative overflow-hidden group"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => videoRef.current?.pause()}
      >
        <div className="bg-gradient-to-b from-[#1A1A1A] to-[#080808] p-px rounded-2xl overflow-hidden">
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
      title: "SportVerse",
      description:
        "A platform for bowling enthusiasts: track performance, get expert coaching, exclusive content, and join a vibrant community.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      imgSrc: ImageSport1,
     href: "https://ekagency.jvai.site/",
    },
    {
      title: "RentCars",
      description:
        "A fun soundboard app with hilarious, toilet-themed sound effects for pranks and laughs.",
      tags: ["Python", "React", "TensorFlow", "PostgreSQL", "D3.js"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      imgSrc: ImageCar1,
      
       href: "https://ariahsworld.com/",
    },
    {
      title: "Genesis",
      description:
        "A mobile app to help users manage and track their health information.",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
      imgSrc: ImageGenesis1,
      href: "https://genesis.jvai.site/",
    },
    {
      title: "NevaFold",
      description:
        "AI-powered math education platform with a smart tutoring chatbot and instant feedback.",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      videoSrc: "/videos/break-a-leg-intro.mp4",
       imgSrc: ImageNevefold1,
      href: "https://nevafold.com.au/",
    },
  ];

  return (
    <div id="project" className="bg-black">
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
