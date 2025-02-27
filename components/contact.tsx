"use client";
import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { TypingText } from "./typingtext";
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-28 z-50">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-50"
      >
        <p className="font-medium text-[24px] text-secondary-white py-8 text-center dark:text-neutral-200">
          | Contact Radify Solutions
        </p>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4"
        >
          <div>
            <h3 className="text-2xl text-white font-semibold mb-6 hidden lg:flex items-center justify-center lg:justify-start">
              Contact Information
            </h3>
            <div className="space-y-4 text-white text-base lg:text-lg">
              <div className="flex items-center justify-center lg:justify-start">
                <User
                  strokeWidth={1}
                  className="h-6 w-6 text-[#ad50ac] mr-4"
                />
                <span>M Thirupathi Reddy</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone
                  strokeWidth={1}
                  className="h-6 w-6 text-[#ad50ac] mr-4"
                />
                <span>+91 94403 11081</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail strokeWidth={1} className="h-6 w-6 text-[#ad50ac] mr-4" />
                <span>contact@radifysolutions.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin
                  strokeWidth={1}
                  className="h-6 w-6 text-[#ad50ac] mr-4"
                />
                <span>Bolarum, Hyderabad</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 z-50">
            <Input
              placeholder="Your Name"
              className="bg-black/40 border-gray-500 text-[#ededed]"
            />
            <Input
              placeholder="Your Email"
              type="email"
              className="bg-black/40 border-gray-500 text-[#ededed]"
            />
            <Input
              placeholder="Subject"
              className="bg-black/40 border-gray-500 text-[#ededed]"
            />
            <Textarea
              placeholder="Your Message"
              className="bg-black/40 border-gray-500 h-32 text-[#ededed]"
            />
            <Button className="w-full bg-gradient-to-r from-[#ac3fab] via-[#bc76bb] to-[#c30dc0] text-[#ededed] font-semibold">
              Send Message
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
