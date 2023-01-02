import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundAnimation({}: Props) {
  return (
    <motion.div 
      className="relative flex justify-center items-center"
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.2, 0.7, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5
      }}
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[var(--color2)] rounded-full opacity-20 h-[500px] w-[500px] mt-52 animate-pulse" />
      <div className="absolute border border-[var(--color)] rounded-full opacity-50 h-[670px] w-[670px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[850px] w-[850px] mt-52"/>
    </motion.div>
  )
}