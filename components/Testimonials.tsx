import { Star } from "lucide-react";
import React from "react";
import { SiFiverr } from "react-icons/si";
import { Marquee } from "./magicui/marquee";
import { FaStar } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Client1 from "../public/images/review/client1.png";
import Client2 from "../public/images/review/client2.png";
import Client3 from "../public/images/review/client3.png";
import Client4 from "../public/images/review/client4.png";
import Client5 from "../public/images/review/client5.png";

const reviews = [
  {
    name: "dina_c_woods",
    username: "@dina_c_woods",
    body: "What I love most? He makes every project feel effortless. After several collaborations, he’s become someone I fully trust to just get it right without handholding.",
    img: Client1,
  },
  {
    name: "jayfettig693",
    username: "@jayfettig693",
    body: "I've dealt with developers for years and was admittedly reluctant to deal with someone in the other side of the world, on different time zones, etc. I am so glad that I chose them and can't recommend them high enough. Fantastic.",
    img: Client2,
  },
  {
    name: "kyprianou",
    username: "@kyprianou",
    body: "Each project benefits from his unique blend of creativity and technical skill, resulting in sites that not only look fantastic but also perform flawlessly. His commitment and attention to detail always ensure the final product goes beyond what I imagined.",
    img: Client3,
  },
  {
    name: "Hossian0",
    username: "@Hossian0",
    body: "This is not our first project together, and there’s a reason I came back Mohin and his team deliver. Every milestone is handled with care, creativity, and precision. We’re almost at the finish line, and I already know the outcome will be something to be proud of.",
    img: Client4,
  },
  {
    name: "Ali_mounji",
    username: "@Ali_mounji",
    body: "Very satisfied with how professional and fast Mihads team is! Did a great piece of work in relatively short time.",
    img: Client5,
  },
  {
    name: "Brixautogroup",
    username: "@Brixautogroup",
    body: "The website looks great and is responsive, the edits as we worked were not as good as expected. things got overlooked and I had to ask for fixes more than once. In the end it's all good.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Den_raz",
    username: "@Den_raz",
    body: "I took a chance hiring someone new, and I’m so glad I did. He delivered beyond what I asked for and made the whole process fun and stress-free. Super happy with how everything turned out!.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

type ReviewProps = {
  img: string | StaticImageData;
  name: string;
  username: string;
  body: string;
};

const ReviewCard: React.FC<ReviewProps> = ({ img, name, username, body }) => {
  return (
    <div className="bg-[#080808] w-80 h-full flex flex-col justify-between rounded-2xl shadow-lg relative z-20 p-6 space-y-5 overflow-hidden">
      {/* Stars */}
      <div className="flex gap-1 items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} size={18} className="text-[#C6C6C6]" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-[#C6C6C6] text-base leading-relaxed">{body}</p>

      {/* Divider line */}
      <div className="bg-gradient-to-r from-transparent via-[#303030] to-transparent w-full h-px" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <Image
          width={48}
          height={48}
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full border border-gray-700"
        />
        <div>
          <div className="text-white text-lg font-semibold">{name}</div>
          <div className="text-sm text-gray-400">{username}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonial" className="bg-black py-16">
      <div className="flex md:flex-row flex-col justify-between items-center container mx-auto mb-10">
        <h1 className=" text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6  max-xl:text-[38px] text-[60px] bg-gradient-to-r from-[#96D1B0] via-[#F5F5F8] to-[#96D1B0]  bg-clip-text text-transparent">
          What Our Clients Say
        </h1>
        <div className="flex space-x-6 items-center">
          <div className="flex flex-col gap-1 text-center">
            <span className="text-[#C6C6C6] text-xs font-semibold">
              REVIEWED ON
            </span>
            <SiFiverr className="text-white text-4xl" />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="text-yellow-500" size={18} />
              ))}
            </div>
            <span className="text-[#C6C6C6] text-sm font-semibold">
              362 REVIEWS
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
