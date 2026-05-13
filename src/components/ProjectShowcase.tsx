"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Terminal, Layers } from "lucide-react";

const projects = [
  {
    title: "CodeMind AI",
    description: "AI-powered developer assistant that analyzes code vulnerabilities and provides conversational debugging suggestions using Gemini API.",
    tech: ["Python", "Streamlit", "Gemini API", "AI Agents"],
    features: ["Vulnerability detection", "Interactive AI chat", "Developer-first UI"],
    highlight: true,
    icon: <Terminal className="w-8 h-8 text-primary" />,
    color: "from-blue-500/20 to-violet-500/20",
    github: "https://github.com/kathankraithatha/CodeMind-AI",
    link: "#"
  },
  {
    title: "Premium Toast Flutter",
    description: "Highly customizable Flutter toast library designed for premium UI experiences. Adopted by 300+ apps in the Flutter ecosystem.",
    tech: ["Dart", "Flutter", "UI Components"],
    features: ["Custom Animations", "Package Ecosystem", "High Adoption"],
    highlight: false,
    icon: <Layers className="w-8 h-8 text-secondary" />,
    color: "from-cyan-500/20 to-blue-500/20",
    link: "https://pub.dev/packages/premium_toast_flutter",
    github: "https://github.com/kathankraithatha/premium_toast_flutter"
  }
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-gradient">Creations</span>
            </h2>
            <p className="text-white/40 max-w-xl font-light">
              Designing and building tools that improve developer experience and leverage the power of AI.
            </p>
          </div>
          <motion.a 
            href="https://github.com/kathankraithatha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full glass border border-white/10 text-sm font-medium flex items-center gap-2 hover:bg-white/5 transition-colors"
          >
            All Projects <ExternalLink size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-1 rounded-[2.5rem] bg-gradient-to-br ${project.color} border border-white/10 overflow-hidden`}
            >
              <div className="relative h-full bg-bg-deep/90 rounded-[2.4rem] p-10 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  {project.icon}
                </div>

                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    {project.highlight && (
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] uppercase tracking-widest font-bold flex items-center gap-1">
                        <Sparkles size={10} /> Flagship
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/50 mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-white/5 text-xs font-mono text-white/40 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-4">
                      <motion.a 
                        whileHover={{ y: -3 }}
                        href={project.github || "#"} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <Github size={20} className="text-white/60" />
                      </motion.a>
                      <motion.a 
                        whileHover={{ y: -3 }}
                        href={project.link || "#"} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink size={20} className="text-white/60" />
                      </motion.a>
                    </div>
                    
                    <ul className="hidden sm:flex flex-col items-end gap-1 text-[10px] font-mono text-white/20">
                      {project.features.map(f => <li key={f}>// {f}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
