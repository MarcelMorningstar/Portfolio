import React, { useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'
import { GetStaticProps } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { Experience, PageInfo, Project, Skill } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
}

export default function Home({ pageInfo, experiences, skills, projects }: Props) {
  const windowSize = useWindowSize()

  useEffect(() => {
    let vh = windowSize.height * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [windowSize])
  

  return (
    <div className='main h-screen text-[var(--text-color)] snap-y snap-mandatory z-0 overflow-y-scroll scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#D65A31]/75'>
      <Head>
        <title>Roland&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-center'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-center'>
        <Contact />
      </section>

      {/* <footer className='absolute left-[50%] bottom-7 translate-x-[-50%] cursor-pointer'>
        <Link href='#hero'>
          <div className='flex items-center justify-center'>
            <Image 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              width={40}
              height={40}
              src={image}
              alt="" 
            />
          </div>
        </Link>
      </footer> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects
    }
  }
}