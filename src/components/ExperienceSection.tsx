"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Generative AI Intern",
    company: "Coder: Roots",
    period: "01/2026 - Present",
    description: [
      "Contributed to the development of Generative AI and Agentic AI projects using LangChain, FastAPI, and automation workflows.",
      "Worked on AI-powered applications involving RAG pipelines, vector databases, API integration, and backend optimization.",
      "Collaborated with the development team on project implementation, debugging, testing, and performance enhancement."
    ]
  },
  {
    role: "Data Science & Machine Learning Trainee",
    company: "O7 Services",
    period: "06/2024 - 12/2024",
    description: [
      "Completed 6 months of training in Data Science and Machine Learning.",
      "Gained hands-on experience in Python, data analysis, model building, and AI/ML project development."
    ]
  }
];

const education = [
  {
    degree: "B.Tech - Computer Science and Engineering",
    institution: "DAV Institute of Engineering and Technology, Jalandhar",
    period: "2022 - 2026",
    score: "CGPA: 8.78"
  },
  {
    degree: "12th - Non Medical Science",
    institution: "Indo Swiss International Convent School, Nakodar",
    period: "2021 - 2022",
    score: "93%"
  },
  {
    degree: "10th",
    institution: "Indo Swiss International Convent School, Nakodar",
    period: "2019 - 2020",
    score: "86.8%"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary mb-6 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-sm font-bold tracking-wider uppercase">Milestones</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary via-white/10 to-transparent" />
              
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-10 group">
                    {/* Fixed Timeline Dot */}
                    <div className="absolute left-0 top-6 w-[16px] h-[16px] rounded-full bg-black border-[3px] border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(59,130,246,1)] transition-all duration-300 z-10" />
                    
                    {/* Hoverable Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden shadow-xl border border-white/5 group-hover:border-primary/30 transition-all duration-300"
                    >
                      {/* Inner Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10">
                        <h4 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors">{exp.role}</h4>
                        <div className="flex flex-wrap items-center gap-3 mt-3 mb-5">
                          <span className="text-primary font-bold text-lg">{exp.company}</span>
                          <span className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium shadow-sm">{exp.period}</span>
                        </div>
                        <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                          {exp.description.map((desc, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-primary mt-1 text-[10px]">▶</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-accent via-white/10 to-transparent" />
              
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-10 group">
                    {/* Fixed Timeline Dot */}
                    <div className="absolute left-0 top-6 w-[16px] h-[16px] rounded-full bg-black border-[3px] border-accent group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(168,85,247,1)] transition-all duration-300 z-10" />
                    
                    {/* Hoverable Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: -5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden shadow-xl border border-white/5 group-hover:border-accent/30 transition-all duration-300"
                    >
                      {/* Inner Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10">
                        <h4 className="text-2xl font-bold text-white group-hover:text-accent-light transition-colors">{edu.degree}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-3 mb-5">
                          <span className="text-accent font-bold text-lg">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full font-medium shadow-sm">{edu.period}</span>
                          <span className="text-white font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs shadow-sm group-hover:border-accent/30 transition-colors">{edu.score}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
