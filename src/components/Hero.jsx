import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-4"
      >
        Hi, I'm <span className="text-blue-400">Abrham Gebre</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-2xl md:text-3xl font-medium h-10"
      >
        <Typewriter
          options={{
            strings: [
              "Python Developer 🐍",
              "Full-Stack Web Developer",
              "Automation & AI Enthusiast",
              "React + Django Builder",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      <motion.a
        href="#projects"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.3, type: "spring" }}
        className="mt-10 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg text-lg font-semibold"
      >
        View My Work 🚀
      </motion.a>
    </section>
  );
}
