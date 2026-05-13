"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const VisualEffects = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Glowing Cursor Trail */}
      <motion.div
        className="hidden md:block w-8 h-8 rounded-full bg-primary/20 blur-xl absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: trailX, top: trailY }}
      />
      <motion.div
        className="hidden md:block w-2 h-2 rounded-full bg-primary absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: mouseX, top: mouseY }}
      />

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 150, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-secondary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] bg-accent-cyan/5 rounded-full blur-[120px]"
        />
      </div>

      {/* Grid movement effect - will be handled via CSS in globals.css for performance */}
    </div>
  );
};

export default VisualEffects;
