import React from 'react'
import Layout from './Layout'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
  const vh = 999

  return (
    <Layout title='experience'>
      <div 
        className='w-full h-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#D65A31]/75'
      >
        {
          experiences.map(experience => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        }
      </div>
    </Layout>
  )
}
