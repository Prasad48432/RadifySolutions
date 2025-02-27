"use client";
import Link from "next/link";
import Image from "next/image";
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
