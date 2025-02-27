"use client";
import Link from "next/link";
import Image from "next/image";
import { BriefcaseBusiness, Contact, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import styles from "@/lib/styles";
import { navVariants } from "@/utils/motion";

export default function Header() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      className={`${styles.xPaddings} py-8 relative`}
    >
      {/* <div className="mx-auto max-w-7xl relative px-[25px] lg:px-[32px] py-[18px] flex items-center justify-between">
        <div className="flex flex-1 items-center justify-start">
          <Link className="z-50 flex items-center" href={"/"}>
            <Image
              className="w-[143px] lg:w-[157.3px] h-[33px] lg:h-[45.375px] object-cover"
              src="/assets/icons/radifyfull.png"
              width={500}
              height={500}
              alt="AeroEdit"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="flex space-x-4">
            <div className="lg:flex z-50 cursor-pointer text-gray-500 font-bold py-1 px-2 hidden gap-2 items-center justify-center bg-secondary-bg rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-secondary-strongerborder/60">
              <p className=" font-semibold text-base">Our work</p>
              <BriefcaseBusiness strokeWidth={1} />
            </div>
            <div className="z-50 cursor-pointer text-gray-500 py-1 px-2 flex gap-2 items-center justify-center bg-red-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-secondary-strongerborder/60">
              <p className="text-sm lg:text-base">Contact</p>
              <Contact strokeWidth={1} />
            </div>
          </div>
        </div>
      </div> */}
      <div className="absolute w-[100%] inset-0 navbar-gradient" />
      <div
        data-type="head"
        className={`${styles.innerWidth} flex items-center justify-center interactable cursor-pointer`}
      >
        <Link className="z-50 flex items-center" href={"/"}>
          <Image
            className="w-[143px] lg:w-[195px] h-[41.25px] lg:h-[56.25px] object-cover"
            src="/assets/icons/radifyfull.png"
            width={500}
            height={500}
            alt="AeroEdit"
          />
        </Link>
      </div>
    </motion.nav>
  );
}
