import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
import { MdOutlineMail } from "react-icons/md";
import styles from '../styles/Header.module.css'
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      <motion.div 
        className={styles.item}
        initial={{
          x: -500,
          scale: 0.5,
          opacity: 0
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
      >
        <a href='https://www.instagram.com/marcelcoldwater/' className={styles.link}>
          <AiOutlineInstagram />
        </a>
        <a href='https://github.com/marcelmorningstar' className={styles.link}>
          <AiOutlineGithub />
        </a>
      </motion.div>

      <motion.div 
        className={styles.item}
        initial={{
          x: 500,
          scale: 0.5,
          opacity: 0
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
      >
        <Link href="#contact" className={styles.link}>
          <MdOutlineMail />
          <p>GET IN TOUCH</p>
        </Link>
      </motion.div>
    </header>
  )
}