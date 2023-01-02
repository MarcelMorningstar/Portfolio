import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundAnimation from './BackgroundAnimation'
import styles from '../styles/Hero.module.css'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hello, I'm ${pageInfo.name}`,
      "<Top G />",
      "while (alive) work();",
    ],
    loop: true,
    delaySpeed: 2500
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundAnimation />

      <Image 
        className='rounded-full w-32 h-32 nx-auto object-cover'
        width={128}
        height={128}
        src={urlFor(pageInfo.heroImage).url()}
        alt="Roland"
        priority
      />

      <div className='relative flex flex-col items-center max-w-[90vw]'>
        <h2 className='text-xs sm:text-sm uppercase text-[var(--fg-color)] pb-2 tracking-[12px] transition-all'>{ pageInfo.role }</h2>

        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold px-10 transition-all'>
          <span>{text}</span>
          <Cursor cursorColor='var(--color)' />
        </h1>

        <div className={styles.btnContainer}>
          <Link href="#about"><button className={styles.btn}>ABOUT</button></Link>
          <Link href="#experience"><button className={styles.btn}>EXPERIENCE</button></Link>
          <Link href="#skills"><button className={styles.btn}>SKILLS</button></Link>
          <Link href="#projects"><button className={styles.btn}>PROJECTS</button></Link>
        </div>
      </div>
    </div>
  )
}