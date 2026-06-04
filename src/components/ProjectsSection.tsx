"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "MedBot-AI",
    subtitle: "Agentic Medical RAG Chatbot",
    description: "An AI-powered medical assistant implementing symptom analysis, medicine comparison, and context-aware responses using embeddings and vector search.",
    tags: ["React.js", "FastAPI", "LLMs", "Agentic AI", "RAG", "Qdrant Vector DB"],
    github: "https://github.com/baljinder-26/medibot",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Nexus AI",
    subtitle: "RAG Assistant",
    description: "A contextual knowledge extraction system allowing users to upload PDFs for intelligent question-answering, backed by a robust FastAPI service.",
    tags: ["Python", "FastAPI", "RAG Pipeline", "NLP", "LLMs"],
    github: "https://github.com/baljinder-26/ragbot",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI Doctor",
    subtitle: "Automated Healthcare Web App",
    description: "An AI-powered multi-disease prediction system capable of detecting conditions related to the brain, lungs, and other major organs.",
    tags: ["Machine Learning", "Model Training", "Web Development", "Python"],
    github: "https://github.com/baljinder-26/Ai-doctor",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sign Language Recognition",
    subtitle: "Computer Vision System",
    description: "Real-time hand tracking for American Sign Language recognition using MediaPipe and a custom dataset.",
    tags: ["Computer Vision", "MediaPipe", "Python", "ASL"],
    github: "https://github.com/baljinder-26/signlanguage",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Drowsy Detection System",
    subtitle: "Computer Vision System",
    description: "Real-time eye and yawn detection using MediaPipe face landmarks with a live monitoring dashboard for drivers.",
    tags: ["Computer Vision", "MediaPipe", "Python", "Safety System"],
    github: "https://github.com/baljinder-26/drowsy",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Orthovision AI (Currently Working)",
    subtitle: "Radiology Posture Analysis System",
    description: "Currently building an AI-powered computer vision system that analyzes X-ray positioning to verify correct patient posture. It provides real-time feedback on positioning errors and suggests actionable instructions for correction.",
    tags: ["Computer Vision", "Machine Learning", "Healthcare AI", "Python"],
    github: "https://github.com/baljinder-26", 
    image: "/orthovision_ai.png",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top bg-[#0f1117] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <p className="text-primary font-medium text-sm mb-1">{project.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    <GithubIcon className="w-5 h-5" /> Code
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
