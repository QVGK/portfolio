// Dependencies
import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

// Styles
import Styles from '../styles/Home.module.css'

// Components
import Header from '../components/Header'
import Socials from '../components/Socials'
import WaveDivider from '../components/WaveDivider'

export default function index() {
    return (
        <>
            <Head>
                <title>QVGK</title>
            </Head>

            <Header/>

            <motion.div className={`${Styles.GradientContainer}`}>
                <h1 className={`${Styles.Title}`}>QVGK</h1>

                <Socials/>
            </motion.div>

            <WaveDivider/>
        </>
    )
}
