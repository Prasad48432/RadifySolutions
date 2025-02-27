"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-28">
      <motion.div
        variants={staggerContainer(0.1, 0.2)} // Call the function
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <p className="font-medium text-[18px] lg:text-[24px] text-secondary-white py-8 text-center dark:text-neutral-200">| About Radify Solutions</p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          viewport={{ once: true }}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center dark:text-white"
        >
          At
          <span
            data-type="norwegian"
            className="font-extrabold bg-gradient-to-r from-[#ac3fab] via-[#bc76bb] to-[#c30dc0] bg-clip-text text-transparent"
          >
            {" "}
            Radify Lighting
          </span>
          , we are dedicated to powering brilliance and
          <span
            data-type="arted"
            className="font-extrabold bg-gradient-to-l from-[#ac3fab] via-[#bc76bb] to-[#c30dc0] bg-clip-text text-transparent"
          >
            {" "}
            illuminating spaces{" "}
          </span>
          with cutting-edge electrical and lighting solutions. From concept to
          execution, we provide end-to-end services that bring efficiency,
          safety, and innovation to every project
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
