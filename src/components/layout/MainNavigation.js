 import CorporateLogo from "./CorporateLogo";
 import styles  from './MainNavigation.module.css'
 import { Link } from "react-router-dom";

function MainNavigation() {
    return <header className={styles.header} >
        <CorporateLogo />
        <nav>
            <ul>
                <li>
                    <Link to='/'>Main Gallery</Link>
                </li>
                <li>
                    <Link to='/works'>Works</Link>
                </li>
                <li>
                    <Link to='/about-me'>About my</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contacts</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;