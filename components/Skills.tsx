import React from 'react'
import Image from 'next/image'
import Layout from './Layout'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import { Skill } from '../typings'
import styles from '../styles/Skills.module.css'

type Props = {
  skills: Skill[]
}

export default function Skills({ skills }: Props) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <Layout title='skills' subTitle='take a peek at my knowledge'>
      <motion.div 
        className='grid grid-cols-3 sm:grid-cols-4 gap-3 xs:gap-5 h-fit' 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true
        }}
      > 
        {
          skills.map(skill => {
            return (
              <motion.div 
                key={skill._id} 
                className='group relative flex cursor-pointer'
                variants={item}
              >
                <Image 
                  className={styles.skillImage + ' rounded-full border border-[var(--fg-color)] object-cover p-2 filter group-hover:grayscale transition duration-500 ease-in-out'}
                  width={128}
                  height={128}
                  src={urlFor(skill.image).url()}
                  alt=''
                />
                <div className={styles.skillHover + ' absolute rounded-full opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white'}>
                  <div className='flex items-center justify-center h-full'>
                    <p className={styles.skillHoverText}>{ skill.progress }%</p>
                  </div>
                </div>
              </motion.div>
            )
          })
        }
      </motion.div>
    </Layout>
  )
}