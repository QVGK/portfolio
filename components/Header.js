// Dependencies
import React from 'react'
import { motion } from 'framer-motion'

// Styles
import Styles from './styles/Header.module.css'

// JSON
const NavAnimate = {
    Initial: {
        opacity: 0
    },
    Animate: {
        opacity: 1
    },
    Transition: {
        duration: 0.5
    }
}

export default function Header() {
    return (
        <nav className={`navbar sticky-top ${Styles.Navbar}`}>
            <motion.div initial={NavAnimate.Initial} animate={NavAnimate.Animate} transition={NavAnimate.Transition} className={`container`}>
                <span className={`navbar-brand ${Styles.NavbarTitle} mx-auto`}>QVGK</span>         
            </motion.div>
        </nav>
    )
}
