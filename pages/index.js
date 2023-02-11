// Dependencies
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Styles
import Styles from '../styles/Home.module.css'

// Components
import Header from '../components/Header'
import Socials from '../components/Socials'
import WaveDivider from '../components/WaveDivider'

export default function Index() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            <Head>
                <title>QVGK</title>
            </Head>

            <Header/>

            <div className={`${Styles.GradientContainer}`}>

                <div className={`${Styles.Container}`}>
                    <h1 className={`${Styles.Title}`}>IMAGINE A</h1>
                    <h1 className={`${Styles.Title}`}>DEVELOPER</h1>
                </div>

                <br/>

                <Socials/>
                
            </div>

            <WaveDivider/>

            <div className={`${Styles.Container} ${Styles.MT}`}>
                <h1 className={`${Styles.LowerTitle}`}>About Me</h1>

                <p className={`${Styles.Paragraph}`}>
                    G&apos;day! I&apos;m QVGK, a developer from Australia. I specialize in web development, but I also have experience in Roblox development.
                    <br/><br/>
                    I&apos;ve been developing since 2016, and have been learning new things ever since. I&apos;m currently actively working on a few project, yet I&apos;m always 
                    available for contact or hire.
                </p>
            </div>

            <div className={`${Styles.Container} ${Styles.MT}`}>
                <h1 className={`${Styles.LowerTitle}`}>Projects</h1>

                <p className={`${Styles.Paragraph}`}>
                    I&apos;m currently working on, and created a few projects. These range from Roblox development tools, to websites.
                    You can view most of them by visiting my <Link className={`${Styles.Link}`} href='https://github.com/QVGK' target='_blank' rel='noreferrer'>GitHub</Link>.
                </p>
            </div>
        </div>
    )
}
