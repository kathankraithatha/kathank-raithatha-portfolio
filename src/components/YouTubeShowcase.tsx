"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Youtube, ExternalLink, Play, Clock, Users } from "lucide-react";

const YouTubeShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={sectionRef} id="youtube" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  initial={{ rotate: -20, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="p-3 rounded-2xl bg-red-500/10"
                >
                  <Youtube className="w-6 h-6 text-red-500" />
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-bold tracking-tight"
                >
                  System Design <span className="text-gradient text-red-500">Series</span>
                </motion.h2>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-white/60 mb-8 leading-relaxed max-w-xl font-light"
              >
                Master the fundamentals of scalable architecture. From load balancing to database sharding, 
                this series breaks down complex concepts into beginner-friendly visual guides.
              </motion.p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Clock, label: "Format", value: "<10Minutes" },
                  { icon: Users, label: "Level", value: "Beginner to Pro" }
                ].map((item, i) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-1 text-red-500/80">
                      <item.icon size={18} />
                      <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
                    </div>
                    <p className="text-white/80 font-medium">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://www.youtube.com/playlist?list=PLVWvLfqYFBT3mUGdxdStcHktNFLLTeg7a"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-red-600/20"
              >
                Start Learning Now
                <Play size={20} fill="currentColor" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side: Visual Preview with Parallax */}
          <motion.div 
            style={{ y: y1 }}
            className="flex-1 w-full max-w-2xl"
          >
            <motion.a
              href="https://www.youtube.com/playlist?list=PLVWvLfqYFBT3mUGdxdStcHktNFLLTeg7a"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden group border-2 border-white/10 block cursor-pointer perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 group-hover:from-red-600/40 transition-all duration-500" />
              
              <img 
                src="/youtube-thumbnail.png" 
                alt="System Design Series Thumbnail"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </div>
              </div>

              <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-white/90">Click to Watch Playlist</span>
              </div>
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Parallax Background Accents */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/2 -right-10 w-64 h-64 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" 
      />
    </section>
  );
};

export default YouTubeShowcase;
