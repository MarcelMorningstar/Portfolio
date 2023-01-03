import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
import { MdOutlineMail } from "react-icons/md";
import styles from '../styles/Header.module.css'

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
        <Link href='https://www.instagram.com/marcelcoldwater/' target='_blank' className={styles.link}>
          <AiOutlineInstagram />
        </Link>
        <Link href='https://github.com/marcelmorningstar' target='_blank' className={styles.link}>
          <AiOutlineGithub />
        </Link>
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