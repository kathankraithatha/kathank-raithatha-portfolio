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
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "top-6 w-[90%] max-w-5xl rounded-full liquid-glass py-3 px-8 shadow-2xl" 
          : "top-0 w-full bg-transparent py-8 px-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 rounded-3xl liquid-glass overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-white/10">
                <a href="https://github.com/kathankraithatha" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 text-white/70" />
                </a>
                <a href="https://linkedin.com/in/kathank" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-white/70" />
                </a>
                <a href="mailto:kathankraithatha@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-6 h-6 text-white/70" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
