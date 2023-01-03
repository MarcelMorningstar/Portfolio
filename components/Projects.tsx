import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from './Layout'
import { motion } from 'framer-motion'
import { HiOutlineExternalLink } from "react-icons/hi"
import { urlFor } from '../sanity'
import { Project } from '../typings'

type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {  
  return (
    <Layout title='projects'>
      <div className='relative w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#D65A31]/75'>
        {
          projects.map((project) => (
            <div key={project._id} className='w-screen flex flex-col flex-shrink-0 items-center justify-center space-y-5 p-12 xs:p-20 md:p-44 snap-center'>
              <motion.div
                className='relative min-h-[128px] max-h-[20vh]'
                style={{
                  width: "-webkit-fill-available",
                  height: "-webkit-fill-available"
                }}
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
                  className='object-contain object-bottom'
                  fill
                  src={urlFor(project.image).url()} 
                  alt=""
                />
              </motion.div>
              
              <div className='space-y-4 xl:space-y-8 lg:px-16 xl:px-20 2xl:px-24' style={{ width: 'min(80vw, 64rem)'}}>
                <div className='flex justify-center'>
                  <h4 className='text-center text-3xl sm:text-4xl font-semibold'>{ project.title }</h4>
                  {project?.linkToProject && <Link href={project?.linkToProject} target='_blank'><HiOutlineExternalLink style={{ width: '20px', height: '20px' }} /></Link> }
                </div>
                
                <div className='flex items-center justify-center space-x-2'>
                  {
                    project.technologies.map(technology => (
                      <Image
                        key={technology._id}
                        className='w-10 h-10 sm:w-14 sm:h-14 p-1 object-contain rounded-full border border-[var(--fg-color)]'
                        width={56}
                        height={56}
                        src={urlFor(technology.image).url()}
                        alt="" 
                      />
                    ))
                  }
                </div>

                <p className='text-center text-sm xs:text-base sm:text-lg'>{ project.summery }</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className='w-full h-[50%] absolute top-[30%] left-0 bg-[var(--color2)] opacity-25 -skew-y-[9deg]' />
    </Layout>
  )
}