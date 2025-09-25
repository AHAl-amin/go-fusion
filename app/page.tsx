import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default page;
