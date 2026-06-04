"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030303] overflow-hidden"
        >
          {/* Background grid for tech feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_50%,transparent_100%)]" />

          <div className="flex flex-col items-center justify-center relative z-10">
            {/* Animated AI Core / Loader */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
              className="relative w-32 h-32 flex items-center justify-center"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-t-2 border-emerald-400/80 border-r-2 border-r-transparent border-b-2 border-teal-500/80 border-l-2 border-l-transparent shadow-[0_0_15px_rgba(52,211,153,0.3)]" />
              
              {/* Inner Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                className="absolute inset-4 rounded-full border-b-2 border-emerald-400/60 border-l-2 border-l-transparent border-t-2 border-teal-500/60 border-r-2 border-r-transparent" 
              />
              
              {/* Center Core */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-8 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-full blur-[4px]" 
              />
            </motion.div>
            
            {/* Text elements */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 font-mono text-emerald-400 text-sm tracking-[0.3em] uppercase flex flex-col items-center gap-3"
            >
              <span>System Boot Sequence</span>
              
              {/* Progress bar simulation */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-2 relative">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-teal-500 to-emerald-400"
                />
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-500 text-[10px]">AI_ENGINEER_PROTOCOL // INITIALIZING</span>
                <span className="flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1 h-1 bg-emerald-500 rounded-full"
                    />
                  ))}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
