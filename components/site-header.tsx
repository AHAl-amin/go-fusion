"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full border-b 
        
          border-white/10   text-white
          
       backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:h-16">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-xl font-extrabold tracking-tight 
              text-white "
          >
            {"<Md Toki Osmani/>"}
          </span>
          <span className="sr-only">Go to homepage</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-[18px]  ">
            About
          </Link>

          <Link href="#project" className="text-[18px] ">
            Projects
          </Link>
          <Link href="#testimonial" className="text-[18px] ">
            Reviews
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-1 text-[18px] "
          >
            Contact
          </Link>
        </nav>

        <div className=" md:hidden block">
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 
              text-white
             hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/70 md:hidden">
          <div
            className="container mx-auto grid gap-2 px-4 py-3"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              const target = e.target as HTMLElement;
              const link = target.closest("a");
              if (link) {
                const href = link.getAttribute("href");
                console.log("click link href", href);
                setOpen(false);
              }
            }}
          >
            <Link href="/" className="py-1 text-sm text-slate-200">
              About
            </Link>
            <Link href="/creator" className="py-1 text-sm text-slate-200">
              Skills
            </Link>
            <Link href="/faq" className="py-1 text-sm text-slate-200">
              Experience
            </Link>
            <Link href="/privacy" className="py-1 text-sm text-slate-200">
              Projects
            </Link>
            <Link href="/privacy" className="py-1 text-sm text-slate-200">
              Reviews
            </Link>
            <Link href="/privacy" className="py-1 text-sm text-slate-200">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
