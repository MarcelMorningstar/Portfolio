import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import { Experience } from '../typings'
import styles from '../styles/Experience.module.css'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className={styles.card}>
      <motion.div
        initial={{
          y: -100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.9
        }}
      >
        <Image 
          className='w-28 h-28 xs:w-32 xs:h-32 xl:w-[200px] xl:h-[200px] object-cover object-center rounded-full'
          width={128}
          height={128}
          src={urlFor(experience.companyImage).url()}
          alt="" 
          
        />
      </motion.div>
      

      <div className='overflow-hidden min-w-[70%] max-w-[92%] px-0 md:px-10'>
        <h4 className='text-center text-3xl 2xs:text-4xl font-light'>{ experience.jobTitle }</h4>
        <p className='text-center text-xl 2xs:text-2xl font-bold mt-1'>{ experience.company }</p>

        <div className='flex space-x-2 mt-4'>
          {
            experience.technologies.map(technology => (
              <Image 
                key={technology._id}
                className='w-10 h-10 object-contain'
                width={50}
                height={50}
                src={urlFor(technology.image).url()}
                alt="" 
              />
            ))
          }
        </div>

        <p className='pt-1 pb-5 text-[var(--fg-color)] text-sm 3xs:text-base font-light'>
          { new Date(experience.dateStarted).toDateString() } - { experience.isCurrentlyWorkingHere ? "PRESENT" : new Date(experience.dateEnded).toDateString() }
        </p>

        <ul className='overflow-y-auto max-h-[260px] ml-1 pr-2 space-y-4 text-base sm:text-lg list-disc list-inside scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#ECDBBA]/60  scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
          {
            experience.summery.map((item, index) => (
              <li key={index}>{ item }</li>
            ))
          }
        </ul>
      </div>
    </article>
  )
}