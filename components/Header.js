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
            <motion.div initial={NavAnimate.Initial} animate={NavAnimate.Animate} transition={NavAnimate.Transition} className={`container-fluid`}>
                <span className={`navbar-brand mb-0 h1 ${Styles.NavbarTitle}`}>QVGK</span>
                {/*
                <div className={`d-flex`}>
                    //<ul className={`navbar-nav`}>
                        //<li className={`nav-item`}>
                            //<a className={`nav-link ${Styles.NavLink}`} aria-current="page" href="#">Home</a>
                        //</li>
                    //</ul>
                </div>
                */}
            </motion.div>
        </nav>
    )
}
