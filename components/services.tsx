"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { Lightbulb, Sparkles, Sun } from "lucide-react";

const Services = () => {
  return (
    <section id="about" className="py-16 lg:py-28">
      <motion.div
        variants={staggerContainer(0.1, 0.2)} // Call the function
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <p className="font-medium text-[18px] lg:text-[24px] text-secondary-white py-8 text-center dark:text-neutral-200">
          | Services
        </p>
        {/* Solutions Spotlight */}
        <section id="solutions" className="py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#ac3fab] via-[#bc76bb] to-[#c30dc0] bg-clip-text text-transparent">
              Our Lighting Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-50">
              {[
                {
                  icon: <Sun className="h-12 w-12 text-[#ac3fab]" />,
                  title: "Commercial Lighting",
                  description:
                    "Transform your business space with energy-efficient and aesthetically pleasing lighting solutions.",
                },
                {
                  icon: <Lightbulb className="h-12 w-12 text-[#ac3fab]" />,
                  title: "Smart Controls",
                  description:
                    "Intelligent lighting control systems for automated and efficient management of your lighting infrastructure.",
                },
                {
                  icon: <Sparkles className="h-12 w-12 text-[#ac3fab]" />,
                  title: "Custom Design",
                  description:
                    "Bespoke lighting designs tailored to your specific needs and architectural requirements.",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="bg-[#1f2f42]/50 lg:bg-[#1f2f42] cursor-pointer rounded-lg p-8 hover:bg-[#1a2736]/50 lg:hover:bg-[#1a2736] transition-colors border border-[#304154] z-50"
                >
                  <div className="flex justify-center mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4 text-[#ededed]">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#ac3fab] via-[#bc76bb] to-[#c30dc0] bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Modern Office Complex",
                  description:
                    "Complete lighting solution for a 50,000 sq ft office space",
                },
                {
                  image:
                    "https://plus.unsplash.com/premium_photo-1671269941569-7841144ee4e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
                  title: "Luxury Hotel",
                  description:
                    "Smart lighting implementation for a 5-star hotel",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#ededed]">
                        {project.title}
                      </h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default Services;
