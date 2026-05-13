"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, MessageSquare, Terminal, Users, PenTool, Quote } from "lucide-react";

const skillCategories = [
  {
    name: "AI & LLMs",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["Gemini API", "Prompt Engineering", "AI Agent Design", "LLM Apps"],
    color: "text-primary"
  },
  {
    name: "Developer Relations",
    icon: <Users className="w-5 h-5" />,
    skills: ["Community Building", "Developer Advocacy", "Ecosystem Strategy"],
    color: "text-secondary"
  },
  {
    name: "Mobile Development",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Flutter", "Dart", "Jetpack Compose", "Firebase"],
    color: "text-accent-cyan"
  },
  {
    name: "Technical Writing",
    icon: <PenTool className="w-5 h-5" />,
    skills: ["Documentation", "Educational Content", "SEO Strategy"],
    color: "text-accent-purple"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-light">
            A specialized toolkit focused on developer success, community growth, and cutting-edge AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px -15px rgba(139, 92, 246, 0.3)",
              }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-morphism border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="text-[10px] uppercase tracking-wider font-semibold text-white/40 px-3 py-1 rounded-lg bg-white/5 border border-white/5 group-hover:border-primary/20 group-hover:text-white/60 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-primary/10 via-bg-deep to-secondary/10 border border-white/10 text-center overflow-hidden"
        >
          <Quote className="absolute top-10 left-10 w-20 h-20 text-white/5 -z-10" />
          <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-tight italic">
            &ldquo;Great developer ecosystems are not built only with products — they are built with <span className="text-primary">education</span>, <span className="text-secondary">trust</span>, and <span className="text-accent-cyan">community</span>.&rdquo;
          </h3>
          <p className="text-white/40 uppercase tracking-[0.2em] text-sm font-medium">
            — DevRel Philosophy
          </p>
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
