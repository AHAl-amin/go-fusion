"use client";

import Header from "@/components/site-header";
import Footer from "./site-footer";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.2}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
      <header className="sticky top-0 z-50  bg-gradient-to-l from-[#a04529] to-[#459447] opacity-90">
        <Header />
      </header>
      <main className="bg-gradient-to-tl from-[#a04529] to-[#459447]">{children}</main>
      <Footer />
    </>
  );
}
