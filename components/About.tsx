import React, { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import Layout from './Layout'
import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  const [offSet, setOffSet] = useState({ x: 0, y: 0})
  const windowSize = useWindowSize();
  
  useEffect(() => {
    const div = document.getElementById('imageContainer') as HTMLDivElement

    setOffSet({
      x: div.offsetLeft,
      y: div.offsetTop
    })
  }, [windowSize])

  const cellStyle = {
    backgroundImage: `url(${urlFor(pageInfo.aboutPicture).url()})`,
    backgroundPositionX: `${offSet.x}px`,
    backgroundPositionY: `${offSet.y}px`
    // backgroundPositionY: `center`
  }

  return (
    <Layout title='about'>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-6 sm:gap-8">
        <div id='imageContainer' className={styles.imageContainer} >
          <motion.div 
            className={styles.a} 
            style={cellStyle} 
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{ 
              once: true 
            }}
            transition={{
              duration: 0.8,
              delay: 1.7
            }}
          />
          <motion.div 
            className={styles.b} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              delay: 1.2,
            }}
          />
          <motion.div 
            className={styles.c} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.9,
              delay: 0.6,
            }}
          />
          <motion.div 
            className={styles.d} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
          />
          <motion.div 
            className={styles.e} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1.5,
              delay: 0.05,
            }}
          />
          <motion.div 
            className={styles.f} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1.6,
              delay: 1,
            }}
          />
          <motion.div 
            className={styles.g} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
          />
          <motion.div 
            className={styles.h} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          />
          <motion.div 
            className={styles.i} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          />
          <motion.div 
            className={styles.j} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7,
              delay: 1.4,
            }}
          />
          <motion.div 
            className={styles.k} 
            style={cellStyle}
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 1.3,
            }}
          />
        </div>
        <div className={styles.textContainer}>
          <h4 className='text-center text-[27px] 2xs:text-3xl xs:text-4xl font-semibold mb-4'>My <span className='underline decoration-[var(--color)]'>Story</span></h4>
          <p className='text-center text-xs 3xs:text-sm xs:text-base'>{ pageInfo.myStory }</p>
        </div>
      </div>
    </Layout>
  )
}