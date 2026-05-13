"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Mic, Handshake } from "lucide-react";

const stats = [
  { label: "Article Reads", value: "30K+", icon: <BookOpen className="w-5 h-5 text-primary" /> },
  { label: "Developers Impacted", value: "1000+", icon: <Users className="w-5 h-5 text-secondary" /> },
  { label: "Public Sessions", value: "10+", icon: <Mic className="w-5 h-5 text-accent-cyan" /> },
  { label: "Community Partnerships", value: "5+", icon: <Handshake className="w-5 h-5 text-accent-purple" /> },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              About <span className="text-gradient">Kathank</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg font-light">
              <p>
                My journey started with a fascination for building mobile experiences. 
                What began as crafting Flutter apps quickly evolved into a deeper passion: 
                <span className="text-white font-medium"> empowering the people who build them.</span>
              </p>
              <p>
                As I shifted toward <span className="text-white font-medium">Developer Relations</span>, 
                I realized that the strongest tech ecosystems aren&apos;t just built with code—they&apos;re 
                built with education, trust, and community.
              </p>
              <p>
                Today, I focus on bridging the gap between complex AI tools and developer success. 
                Whether it&apos;s through technical writing, public speaking, or nurturing developer 
                communities, my goal is to make high-impact technology accessible and exciting for everyone.
              </p>
              <p>
                I thrive at the intersection of <span className="text-white font-medium">AI & Developer Experience</span>, 
                always looking for the next way to simplify the developer journey.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-3xl glass-morphism border border-white/5 flex flex-col items-center text-center group"
              >
                <div className="p-3 rounded-2xl bg-white/5 mb-4 group-hover:bg-primary/10 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-sm text-white/40 uppercase tracking-widest font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
            
            {/* Decorative Background for Stats */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
