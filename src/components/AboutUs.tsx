"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "INNOVATE WITHOUT LIMITS",
  "DISRUPT THE STATUS QUO",
  "EMPOWER WITH TECHNOLOGY",
  "SOLUTIONS BEYOND BOUNDARIES",
  "REVOLUTIONIZE YOUR FUTURE",
  "Unlock potential, embrace change.",
  "Driving innovation, powering progress.",
  "Technology solutions for fearless businesses.",
  "Innovate boldly, consult freely.",
  "Break barriers with smart solutions.",
  "Leading the way in digital transformation.",
  "Your vision, our mission.",
  "Fearless innovation, limitless possibilities.",
  "Transform with Decentral Consultation."
];

export default function AboutUs() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="text-white bg-black py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-4 text-white">
            DECENTRAL CONSULTATION
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Empowering businesses with bold, innovative solutions
          </p>
        </motion.div>

        <div className="relative h-32 md:h-40 mb-8 md:mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhrase}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h3 className="text-2xl md:text-4xl font-bold text-[#1b03a3]">
                {phrases[currentPhrase]}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h4 className="text-xl md:text-2xl font-bold mb-4 text-white">
            Our Vision
          </h4>
          <p className="text-base md:text-lg text-white leading-relaxed">
            At Decentral Consultation, we don't just offer IT solutions—we deliver transformative technology that powers the future of your business. Our team of experts is dedicated to helping organizations break through barriers, optimize performance, and build a digital-first future. We're here to empower you to innovate, grow, and thrive in a rapidly changing world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
