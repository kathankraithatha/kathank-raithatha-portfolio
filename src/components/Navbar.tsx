"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Writing", href: "#writing" },
  { name: "Speaking", href: "#speaking" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      className={`fixed left-1/2 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "top-6 w-[90%] md:w-[85%] max-w-5xl rounded-full liquid-glass py-3 px-8 shadow-2xl" 
          : "top-4 w-[94%] md:w-[95%] max-w-7xl rounded-2xl bg-white/5 backdrop-blur-sm py-5 px-8"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          KR<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
            <a href="https://github.com/kathankraithatha" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-white/70 hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/kathank" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-white/70 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-[60] bg-bg-deep/95 backdrop-blur-2xl p-8 flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center space-y-8 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-bold text-white/90 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex space-x-8 pt-12 border-t border-white/10 w-full justify-center"
              >
                <a href="https://github.com/kathankraithatha" target="_blank" rel="noopener noreferrer">
                  <Github className="w-8 h-8 text-white/70 hover:text-primary transition-colors" />
                </a>
                <a href="https://linkedin.com/in/kathank" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-8 h-8 text-white/70 hover:text-primary transition-colors" />
                </a>
                <a href="mailto:kathankraithatha@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-8 h-8 text-white/70 hover:text-primary transition-colors" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
