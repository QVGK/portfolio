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
import KoFi from '../img/Ko-Fi.png'

// JSON
const Links = {
    GitHub: 'https://github.com/QVGK',
    Twitter: 'https://twitter.com/QVGKA',
    Spotify: 'https://open.spotify.com/artist/6W9PtIJqYnyktRf6zJydGU',
    Roblox: 'https://www.roblox.com/users/418033554/profile',
    KoFi: 'https://ko-fi.com/qvgka'
}

export default function Socials() {
    return (
        <div className={`${Styles.Container}`}>
            <Link className={`${Styles.Social} ${Styles.KoFi}`} href={Links.KoFi} target='_blank' rel='noreferrer'>
                <Image className={`${Styles.SocialIcon}`} src={KoFi} alt='Ko-Fi'/>
            </Link>

            <Link className={`${Styles.Social} ${Styles.GitHub}`} href={Links.GitHub} target='_blank' rel='noreferrer'>
                <Image className={`${Styles.SocialIcon}`} src={GitHub} alt='GitHub'/>
            </Link>

            <Link className={`${Styles.Social} ${Styles.Twitter}`} href={Links.Twitter} target='_blank' rel='noreferrer'>
                <Image className={`${Styles.SocialIcon}`} src={Twitter} alt='Twitter'/>
            </Link>

            <Link className={`${Styles.Social} ${Styles.Spotify}`} href={Links.Spotify} target='_blank' rel='noreferrer'>
                <Image className={`${Styles.SocialIcon}`} src={Spotify} alt='Spotify'/>
            </Link>

            <Link className={`${Styles.Social} ${Styles.Roblox}`} href={Links.Roblox} target='_blank' rel='noreferrer'>
                <Image className={`${Styles.SocialIcon}`} src={Roblox} alt='Roblox'/>
            </Link>
        </div>
    )
}
