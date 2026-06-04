"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Code2, Award, Medal, Lightbulb, X } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    title: "National Math Day 2025",
    description: "Secured 2nd Prize for designing and developing a Smart Area and Volume Calculator utilizing ultrasonic sensors.",
    images: ["/image.png", "/image copy.png"]
  },
  {
    icon: <Medal className="w-8 h-8 text-gray-300" />,
    title: "National Science Day 2024",
    description: "Won 3rd Prize for engineering an automated Smart Car Parking System to optimize space and efficiency.",
    images: ["/c.jpeg"]
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "NEC IIT Bombay",
    description: "Successfully completed comprehensive entrepreneurship tasks during the National Entrepreneurship Challenge. Developed foundational skills in startup ideation, market validation, and business strategy.",
    images: ["/a.jpeg", "/b.jpeg", "/d.jpeg", "/e.jpeg"]
  },
  {
    icon: <Code2 className="w-8 h-8 text-[#FFA116]" />,
    title: "LeetCode Problem Solving",
    description: "Solved 155+ Data Structures & Algorithms problems. Achieved a solid foundation in competitive programming and optimized problem-solving.",
    images: ["/f.png"]
  }
];

export default function AchievementsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements & Awards</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card flex flex-col ${item.images ? 'lg:flex-row md:col-span-2' : 'h-full text-center items-center'} p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 gap-8`}
            >
              <div className={`flex flex-col ${item.images ? 'text-left items-start flex-1 justify-center' : 'items-center flex-grow'}`}>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className={`text-muted text-base leading-relaxed ${!item.images ? 'mb-8 flex-grow' : ''}`}>{item.description}</p>
              </div>
              
              {item.images && (
                <div className="flex gap-4 lg:w-1/2 shrink-0 overflow-x-auto pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  {item.images.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImage(img)}
                      className={`relative cursor-pointer shrink-0 ${item.images && item.images.length === 1 ? 'w-full' : 'w-[calc(50%-0.5rem)]'} h-64 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-colors shadow-xl snap-start`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={img} 
                        alt="Achievement highlight" 
                        className={`w-full h-full ${img.includes('f.png') ? 'object-contain' : 'object-cover object-top'} hover:scale-105 transition-transform duration-700`} 
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedImage} 
                alt="Enlarged achievement highlight" 
                className={`max-w-full max-h-full rounded-2xl shadow-2xl object-contain`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
