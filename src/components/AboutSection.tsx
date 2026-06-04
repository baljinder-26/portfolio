"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Server } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "Generative AI",
    description: "Building intelligent applications using LLMs, LangChain, and RAG architectures.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-accent" />,
    title: "Agentic Workflows",
    description: "Designing autonomous multi-step agents and workflow automation with n8n and Crew AI.",
  },
  {
    icon: <Database className="w-6 h-6 text-green-400" />,
    title: "Machine Learning",
    description: "Developing robust ML models for NLP, Computer Vision, and Predictive Analytics.",
  },
  {
    icon: <Server className="w-6 h-6 text-orange-400" />,
    title: "MLOps & Cloud",
    description: "Deploying scalable AI solutions using AWS EC2, S3, and FastAPI.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glowing blobs for glassmorphism refraction */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text & Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary mb-6 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <span className="text-sm font-bold tracking-wider uppercase">Discover</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligence</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              I am a passionate <span className="text-white font-medium">Data Science and Machine Learning Engineer</span> dedicated to building scalable, data-driven solutions. With a strong foundation in core CS concepts, I specialize in transforming complex data into actionable insights.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              My expertise spans across <span className="text-white font-medium">Python, Scikit-learn, TensorFlow, and Keras</span>, as well as cutting-edge Generative AI frameworks like <span className="text-accent font-medium">LangChain and Transformers</span>.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-6 py-4 rounded-2xl border-l-4 border-l-primary flex-1 min-w-[150px]">
                <h4 className="text-3xl font-bold text-white mb-1">155+</h4>
                <p className="text-sm text-gray-400 font-medium">DSA Problems Solved</p>
              </div>
              <div className="glass-card px-6 py-4 rounded-2xl border-l-4 border-l-accent flex-1 min-w-[150px]">
                <h4 className="text-3xl font-bold text-white mb-1">AI</h4>
                <p className="text-sm text-gray-400 font-medium">Agentic Workflows</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skills Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-3xl group hover:-translate-y-2 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden shadow-xl"
              >
                {/* Subtle gradient hover effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white transition-colors">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
