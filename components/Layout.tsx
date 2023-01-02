import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  title: string
  subTitle?: string
}

export default function Layout({ children, title, subTitle }: Props) {
  return (
    <motion.div 
      className='section'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
    >
      <div className='title-container'>
        <h3 className='title'>{ title }</h3>
        <h4 className='sub-title'>{ subTitle }</h4>
      </div>
      
      { children }
    </motion.div>
  )
}