"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookText, Calendar, MapPin, ExternalLink, TrendingUp } from "lucide-react";

const articles = [
  {
    title: "Grids In Jetpack Compose",
    views: "11K+",
    category: "Android",
    description: "A deep dive into building efficient grid layouts in modern Android development.",
    link: "https://medium.com/@kathankraithatha/grids-in-jetpack-compose-59d99551ec58"
  },
  {
    title: "Intents In Jetpack Compose",
    views: "10K+",
    category: "Android",
    description: "Mastering navigation and communication between activities in Jetpack Compose.",
    link: "https://medium.com/@kathankraithatha/intent-in-jetpack-compose-88275bc3b878"
  },
  {
    title: "Handling Notifications With Jetpack Compose",
    views: "9K+",
    category: "Android",
    description: "Implementing complex notification systems with the latest Compose APIs.",
    link: "https://medium.com/@kathankraithatha/notifications-with-jetpack-compose-3302f27e1348"
  }
];

const speaking = [
  {
    event: "HackWithIndia",
    location: "Microsoft Office",
    year: "2025",
    role: "Judge & Mentor",
    topic: "AI App Development"
  },
  {
    event: "FFDG Rajkot",
    location: "Rajkot",
    year: "2026",
    role: "Speaker",
    topic: "From MVP to Production"
  },
  {
    event: "FFDG Gandhinagar",
    location: "Gandhinagar",
    year: "2025",
    role: "Speaker",
    topic: "FlutterFlow Ambassador Program"
  }
];

const WritingAndSpeaking = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Technical Writing */}
          <div id="writing">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-primary/10">
                <BookText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Technical <span className="text-gradient">Writing</span></h2>
            </div>
            
            <div className="space-y-6">
              {articles.map((article, i) => (
                <motion.a
                  key={article.title}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group block p-6 rounded-3xl glass border border-white/5 hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest px-2 py-1 rounded bg-primary/5">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-white/40">
                      <TrendingUp size={14} className="text-secondary" />
                      {article.views} reads
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-white/40 font-light">{article.description}</p>
                </motion.a>
              ))}
              
              <motion.a 
                href="https://medium.com/@kathankraithatha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-3xl border border-dashed border-white/10 flex items-center justify-center text-white/30 text-sm hover:text-white/60 transition-colors cursor-pointer"
              >
                View 10+ more articles on Medium
              </motion.a>
            </div>
          </div>

          {/* Right: Public Speaking */}
          <div id="speaking">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-secondary/10">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Public <span className="text-gradient">Speaking</span></h2>
            </div>

            <div className="space-y-6">
              {speaking.map((talk, i) => (
                <motion.div
                  key={talk.event}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-3xl glass-morphism border border-white/5 hover:border-secondary/30 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest font-mono">
                      <MapPin size={14} className="text-secondary" />
                      {talk.location}
                    </div>
                    <span className="text-xs font-bold text-secondary">{talk.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-secondary transition-colors">{talk.event}</h3>
                  <p className="text-sm text-white/70 mb-2 font-medium">{talk.role} • {talk.topic}</p>
                </motion.div>
              ))}

              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-2">Impact Highlight</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    Delivered 10+ sessions nationwide, impacting <span className="text-white font-medium">1000+ developers</span> through workshops and keynote talks.
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                  <Calendar size={80} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WritingAndSpeaking;
