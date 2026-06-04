import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
export default function Footer() {
  return (
    <footer className="bg-[#0a0c10] border-t border-border py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 group mb-4">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg tracking-tighter">
              Baljinder<span className="text-primary">.ai</span>
            </span>
          </a>
          <p className="text-muted max-w-sm">
            Building intelligent AI systems, autonomous agents, and production-ready GenAI solutions.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
            <li><a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Resume</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4">Connect</h4>
          <div className="flex items-center gap-4">
            <a href="https://github.com/baljinder-26" target="_blank" rel="noreferrer" className="p-2 glass-card rounded-full hover:text-primary transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/baljinder-singh-843b142a8" target="_blank" rel="noreferrer" className="p-2 glass-card rounded-full hover:text-accent transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="mailto:baljindersingh2114@gmail.com" className="p-2 glass-card rounded-full hover:text-red-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted">
        <p>© {new Date().getFullYear()} Baljinder Singh. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
