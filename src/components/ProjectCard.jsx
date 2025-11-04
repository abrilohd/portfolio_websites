import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Python Automation Bot",
    description: "Automated data scraping and task scheduling using Selenium & Python.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    link: "#",
  },
  {
    title: "React Portfolio",
    description: "Dynamic portfolio built with React + Tailwind + Framer Motion.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Flask API Backend",
    description: "REST API using Flask and PostgreSQL for modern full-stack apps.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    tech: ["Flask", "PostgreSQL", "Docker"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
