// Dependencies
import Link from "next/link";

// Styles
import Styles from "../styles/Home.module.css";

// Components
import Header from "../components/Header";
import Socials from "../components/Socials";

export default function Index() {
    return (
        <>
            <Header />

            <div className={`${Styles.GradientContainer}`}>
                <div className={`${Styles.Container}`}>
                    <h1 className={`${Styles.Title}`}>IMAGINE A</h1>
                    <h1 className={`${Styles.Title}`}>DEVELOPER</h1>
                </div>

                <br />

                <Socials />

                <div className={`${Styles.ButtonsContainer} container`}>
                    <Link href="/aboutme">
                        <button className={`${Styles.Button}`}>About Me</button>
                    </Link>

                    <Link href="/projects">
                        <button className={`${Styles.Button}`}>Projects</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
