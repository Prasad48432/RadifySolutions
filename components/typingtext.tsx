'use client';
import { motion } from 'motion/react';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }:{title:string;textStyles:string}) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[24px] text-secondary-white py-8 ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }:{title:string;textStyles:string}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[26px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
