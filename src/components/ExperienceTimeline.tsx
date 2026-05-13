"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "FlutterFlow",
    role: "Student Ambassador",
    period: "Sep 2024 – Present",
    description: [
      "Built FlutterFlow Students Community India",
      "Grew community to 1000+ LinkedIn followers",
      "Created documentation and open-source resources",
      "Invited to FlutterFlow Developer Conference 2025 in San Francisco"
    ],
    color: "#3b82f6" // blue
  },
  {
    company: "Twiggli",
    role: "Developer Relations Engineer",
    period: "Nov 2025 – Mar 2026",
    description: [
      "Managed app releases on Play Store & App Store",
      "Worked on developer onboarding & community engagement",
      "UI improvements and backend integrations"
    ],
    color: "#8b5cf6" // violet
  },
  {
    company: "Permanent",
    role: "Developer Relations Engineer",
    period: "Jun 2025 – Dec 2025",
    description: [
      "SEO-focused technical writing",
      "Built reusable FlutterFlow components",
      "Developer-focused product content"
    ],
    color: "#a855f7" // purple
  },
  {
    company: "Yudiz Solutions Ltd.",
    role: "Software Engineer Intern",
    period: "Aug 2023",
    description: [
      "Frontend optimization",
      "MySQL query performance improvements"
    ],
    color: "#22d3ee" // cyan
  }
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            My professional path in developer relations and software engineering.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent-cyan opacity-20" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-bg-deep border-2 border-primary z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-6 md:pl-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-5 md:p-8 rounded-[2rem] glass-morphism border border-white/5 hover:border-primary/20 transition-all group"
                    style={{ borderLeft: `4px solid ${exp.color}` }}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-6">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-white/60 font-medium text-sm md:text-base">{exp.role}</p>
                      </div>
                      <span className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-white/40 flex items-start gap-3 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
