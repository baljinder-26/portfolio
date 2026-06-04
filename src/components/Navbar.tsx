"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "./Icons";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all">
      <div
        className={cn(
          "w-full max-w-5xl flex items-center justify-between px-6 py-3 md:py-4 rounded-full border transition-all duration-300",
          isScrolled 
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 shadow-lg" 
            : "bg-[#0a0a0a]/50 backdrop-blur-sm border-white/5"
        )}
      >
        <a href="#" className="font-bold text-xl md:text-2xl tracking-tight text-white flex items-center">
          Baljinder<span className="text-gray-400 text-lg">.ai</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs md:text-sm font-semibold tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-4 pl-6 border-l border-white/10">
          <a href="https://github.com/baljinder-26" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/baljinder-singh-843b142a8" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-[110%] left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl z-50"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-widest text-gray-300 hover:text-white text-center py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/10">
            <a href="https://github.com/baljinder-26" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/baljinder-singh-843b142a8" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
