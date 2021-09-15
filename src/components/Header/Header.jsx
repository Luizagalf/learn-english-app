import styles from "./header.module.scss";
import {
    Link
} from "react-router-dom";

// const isValid from ('./validation.js');

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li><Link to="/home" className={styles.namesite}>Let's learn English!</Link></li>
                <li><Link to="" className={styles.mainli}>Words</Link>
                    <ul className={styles.smallul}>
                        <li><Link to="/game" className={styles.mainli}>Repeat words</Link></li>
                        <li><Link to="/wordlist" className={styles.mainli}>Word list</Link></li>
                        {/* <li><Link to="" className={styles.mainli}>Learn new words</Link></li>
                        <li><Link to="" className={styles.mainli}>Select a topic</Link></li> */}
                        <li><Link to="/allwords" className={styles.mainli}>See all words</Link></li>
                    </ul>
                </li>
                <li><a href="" className={styles.mainli}>My progress</a></li>
            </ul>
            <div className={styles.form}>
                <input type="search" name="q" placeholder="What to search?" className={styles.search} />
                <button className={styles.searchbutton}>Search</button>
            </div>
        </div>
    );
}

export default Header;