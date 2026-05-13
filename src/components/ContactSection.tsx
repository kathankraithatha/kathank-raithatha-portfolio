"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, X, ChevronUp } from "lucide-react";

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] glass-morphism border border-white/10 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Info */}
            <div className="lg:w-1/2 p-12 md:p-20 bg-primary/5">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Let&apos;s build <br />
                <span className="text-gradient">communities</span> <br />
                together.
              </h2>
              <p className="text-white/50 mb-12 text-lg font-light max-w-md">
                Have a project in mind, want to discuss DevRel strategy, or just want to say hi? I&apos;m always open to new connections.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:kathankraithatha@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Email Me</p>
                    <p className="text-white font-medium text-sm md:text-base truncate sm:whitespace-normal">kathankraithatha@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/kathank" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">LinkedIn</p>
                    <p className="text-white font-medium text-sm md:text-base truncate sm:whitespace-normal">linkedin.com/in/kathank</p>
                  </div>
                </a>
              </div>

              <div className="mt-16 flex items-center gap-6">
                {[
                  { Icon: Github, href: "https://github.com/kathankraithatha" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/kathank" },
                  { Icon: X, href: "https://x.com/Kathank25" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-1/2 p-12 md:p-20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/30 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/30 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-widest ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Ecosystem Partnership"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                >
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter text-white">
            KR<span className="text-primary">.</span>
          </div>
          
          <p className="text-white/20 text-sm font-light">
            © 2026 Kathank Raithatha. Built with Next.js & Framer Motion.
          </p>

          <button 
            onClick={scrollToTop}
            className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <ChevronUp size={20} className="text-white/40 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
