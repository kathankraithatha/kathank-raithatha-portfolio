"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const techStack = [
  "Gemini API", "Flutter", "Firebase", "Python", "AI Agents", "Community"
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const socialLinks = [
    { Icon: Github, href: "https://github.com/kathankraithatha" },
    { Icon: Linkedin, href: "https://linkedin.com/in/kathank" },
    { Icon: () => <span className="font-bold text-xl leading-none">M</span>, href: "https://medium.com/@kathankraithatha" },
    { Icon: Mail, href: "mailto:kathankraithatha@gmail.com" }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Parallax Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="relative inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2.5 rounded-full glass border border-white/10 text-[10px] sm:text-xs md:text-sm font-medium text-white tracking-widest uppercase overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-50" />
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                20-year-old Developer & DevRel Enthusiast
              </span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight"
          >
            Kathank <span className="text-gradient">Raithatha</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mb-10 font-light leading-relaxed"
          >
            Building <span className="text-white font-medium">Developer Communities</span> & <span className="text-white font-medium">Developer Ecosystems</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.5 + i * 0.1 }
                }}
                className="px-4 py-2 rounded-xl glass-morphism text-xs font-mono text-white/80 border border-white/5 shadow-xl"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a 
              href="https://drive.google.com/file/d/17iXrql4TxDDz_VKBQODDxbwMtaFJBEC3/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-primary text-white font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          {/* Social Icons Staggered */}
          <div className="mt-16 flex items-center gap-8">
            {socialLinks.map((social, i) => {
              const Icon = social.Icon;
              return (
                <motion.a
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 text-sm text-white/40 max-w-md italic font-light"
          >
            “I’m a 20-year-old developer and DevRel enthusiast passionate about developer communities, AI tools, technical education, and building products that empower developers.”
          </motion.p>
        </motion.div>
      </div>

      {/* Parallax Decorative Elements */}
      <motion.div
        style={{ y: y2, rotate: 45 }}
        animate={{ 
          rotate: [45, 55, 45],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 -right-20 w-40 h-40 border border-primary/20 rounded-full hidden lg:block"
      />
      <motion.div
        style={{ y: y1, rotate: -15 }}
        animate={{ 
          rotate: [-15, -25, -15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 -left-20 w-60 h-60 border border-secondary/20 rounded-3xl hidden lg:block"
      />
    </section>
  );
};

export default HeroSection;
