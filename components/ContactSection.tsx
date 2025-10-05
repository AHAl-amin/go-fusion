import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div id="contact" className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          width={1080}
          height={1080}
          src="/images/mesh-objects-desktop.avif"
          alt="background image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/90 -z-10"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-12 lg:gap-16 min-h-screen">
        {/* Left Content */}
        <div className="flex flex-col justify-center lg:justify-between gap-8 lg:gap-12 lg:flex-1 text-white">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-black leading-tight">
            Ready? <br />
            <span className="">Let&apos;s Talk</span>
          </h1>

          {/* Contact Info + Socials */}
          <div className="flex flex-col sm:flex-row justify-start lg:justify-between items-start sm:items-end gap-6 lg:gap-8">
            <span className="leading-5 text-white/80">
              or contact us <br />
              to{" "}
              <a
                className="underline underline-offset-4 text-white hover:text-primary transition-colors"
                href="mailto:team@aconite.io"
              >
                tokiusmani@gmail.com
              </a>
            </span>

            {/* Social Icons */}
            <div className="flex flex-row gap-3 items-center">
              {/* Telegram */}
              {/* <a
                className="flex items-center justify-center size-[48px] lg:size-[54px] bg-white/10 hover:bg-primary rounded-full transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/"
                aria-label="Contact us on Telegram"
              >
                <FaTelegram className="w-5 h-5" />
              </a> */}

              {/* WhatsApp */}
              <a
                className="flex items-center justify-center size-[48px] lg:size-[54px] bg-white/10 hover:bg-primary rounded-full transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mohin-uddin00/"
                aria-label="Contact us on LinkedIn "
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              {/* Email */}
              <a
                className="flex items-center justify-center size-[48px] lg:size-[54px] bg-white/10 hover:bg-primary rounded-full transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:miintminii@gmail.com"
                aria-label="Send us an email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-[590px] lg:max-w-none lg:w-[590px] p-6 lg:p-[42px] bg-black/80 backdrop-blur-sm text-white border border-white/20 rounded-lg shadow-2xl">
          <form className="flex flex-col gap-8">
            {/* Step Info */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                Share your contact info, and we&apos;ll get in touch.
              </h2>
            </div>

            {/* Input Fields */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium" htmlFor="name">
                  Name<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="border-0 border-b-2 border-white/30 placeholder:text-gray-400 w-full outline-none text-base bg-transparent py-3 focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium" htmlFor="email">
                  Email<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="border-0 border-b-2 border-white/30 placeholder:text-gray-400 w-full outline-none text-base bg-transparent py-3 focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium" htmlFor="website">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Write Your Message"
                  className="border-0 border-b-2 border-white/30 placeholder:text-gray-400 w-full outline-none text-base bg-transparent py-3 focus:border-primary transition-colors duration-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-3 w-full lg:w-auto lg:min-w-[200px] px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-transparent group"
              >
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 28 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    d="M1 0V8.31108C15.4639 8.31106 11.5361 8.31116 26 8.31114M26 8.31114L20.1077 2.62228M26 8.31114L20.1077 14"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
