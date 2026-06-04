"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Generative & Agentic AI",
    skills: ["Generative AI", "LangChain", "Crew AI", "LangGraph", "LLM Applications", "Prompt Engineering", "RAG Pipelines", "Hugging Face", "Transformers", "n8n"],
  },
  {
    title: "Machine Learning & Vision",
    skills: ["Supervised Learning", "Unsupervised Learning", "Computer Vision", "OpenCV", "MediaPipe", "TensorFlow", "Keras", "Scikit-learn", "NLP (NLTK, SpaCy)", "Neural Networks"],
  },
  {
    title: "Databases & Data Science",
    skills: ["Qdrant", "Chroma DB", "FAISS", "Vector DBs", "SQL", "Pandas", "NumPy"],
  },
  {
    title: "Cloud, Backend & Languages",
    skills: ["Python", "C++", "FastAPI", "API Integrations", "AWS", "EC2", "S3", "VPC", "MLOps", "Git & GitHub"],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Stack</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Interactive Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 font-mono text-sm md:text-base text-green-400 shadow-2xl relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-gray-500 flex items-center gap-2 text-xs uppercase tracking-widest">
              <Terminal className="w-4 h-4" /> AI_ENGINEER_PROTOCOL
            </div>
          </div>
          
          {/* Terminal Content with typing effect simulation */}
          <div className="space-y-3">
            <p><span className="text-primary font-bold">baljinder@ai-core</span><span className="text-white">:</span><span className="text-accent">~</span><span className="text-white">$</span> ./initialize_skills.sh</p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
              <span className="text-gray-500">[SYSTEM]</span> Loading Generative Models...
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} viewport={{ once: true }}>
              <span className="text-gray-500">[SYSTEM]</span> Initializing Deep Learning frameworks...
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }} viewport={{ once: true }}>
              <span className="text-gray-500">[SYSTEM]</span> Connecting to Vector Databases...
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.4 }} viewport={{ once: true }}>
              <span className="text-gray-500">[SYSTEM]</span> Deploying Autonomous Agentic Workflows...
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 3.2 }} viewport={{ once: true }} className="text-accent font-bold mt-4">
              {">>>"} ALL SYSTEMS OPERATIONAL. STACK READY.
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 bg-accent ml-1 align-middle"
              />
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-xl bg-white/[0.02] hover:bg-white/[0.04] group"
          >
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 group-hover:border-primary/50 transition-colors">{category.title}</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-primary/20 hover:text-white hover:border-primary/50 transition-colors shadow-sm cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
