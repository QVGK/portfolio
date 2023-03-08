// Dependencies
import React from 'react'

// Styles
import Styles from './styles/Header.module.css'

export default function Header() {
    return (
        <nav className={`navbar sticky-top ${Styles.Navbar}`}>
            <div className={`container`}>
                <span className={`navbar-brand ${Styles.NavbarTitle} mx-auto`}>QVGK</span>         
            </div>
        </nav>
    )
}
