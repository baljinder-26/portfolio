"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
      
      {/* Animated Grid & Glowing Orbs Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden bg-[#030303]">
        
        {/* Prominent Box Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient fade overlay so the grid fades cleanly at the edges */}
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,black_100%)]" />

        {/* Animated Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 150, -50, 0],
            y: [0, -100, 150, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -150, 50, 0],
            y: [0, 150, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 max-w-5xl mx-auto w-full">
        
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-gray-700 to-gray-900 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/profile.jpeg" 
                alt="Baljinder Singh" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* System Online Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm mb-8 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-gray-300">SYSTEM ONLINE</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-6 leading-tight text-white"
        >
          Hi, I&apos;m Baljinder <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Singh</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm sm:text-base md:text-xl font-bold tracking-widest text-gray-400 mb-8"
        >
          <span>AI ENGINEER</span>
          <span className="text-gray-600">|</span>
          <span>GENAI DEVELOPER</span>
          <span className="text-gray-600">|</span>
          <span>AGENTIC AI</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-8"
        >
          Engineering intelligent systems, autonomous agents, and production-ready
          GenAI solutions to accelerate complex problem solving and automate
          workflows with high-performance precision.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href="/baljinder_cv.pdf"
            download="Baljinder_Singh_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold tracking-wide hover:from-blue-500 hover:to-teal-400 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}

