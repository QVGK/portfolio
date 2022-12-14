// Dependencies
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Styles
import Styles from './styles/Socials.module.css'

// IMG
import GitHub from '../img/GitHub.png'
import Twitter from '../img/Twitter.png'
import Spotify from '../img/Spotify.png'
import Roblox from '../img/Roblox.png'

// JSON
const Links = {
    GitHub: 'https://github.com/QVGK',
    Twitter: 'https://twitter.com/QVGKA',
    Spotify: 'https://open.spotify.com/artist/6W9PtIJqYnyktRf6zJydGU',
    Roblox: 'https://www.roblox.com/users/418033554/profile'
}

export default function Socials() {
    return (
        <div className={`${Styles.Container}`}>
            <Link href={Links.GitHub} target='_blank' rel='noreferrer'>
                <button className={`${Styles.Social} ${Styles.GitHub}`}>
                    <Image className={`${Styles.SocialIcon}`} src={GitHub}/>
                </button>
            </Link>

            <Link href={Links.Twitter} target='_blank' rel='noreferrer'>
                <button className={`${Styles.Social} ${Styles.Twitter}`}>
                    <Image className={`${Styles.SocialIcon}`} src={Twitter}/>
                </button>
            </Link>

            <Link href={Links.Spotify} target='_blank' rel='noreferrer'>
                <button className={`${Styles.Social} ${Styles.Spotify}`}>
                    <Image className={`${Styles.SocialIcon}`} src={Spotify}/>
                </button>
            </Link>

            <Link href={Links.Roblox} target='_blank' rel='noreferrer'>
                <button className={`${Styles.Social} ${Styles.Roblox}`}>
                    <Image className={`${Styles.SocialIcon}`} src={Roblox}/>
                </button>
            </Link>
        </div>
    )
}
