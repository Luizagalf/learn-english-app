import styles from "./header.module.scss";
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li><Link to="/" className={styles.namesite}>Let's learn English!</Link></li>
                <li><Link disabled to="#" className={styles.mainli}>Words</Link>
                    <ul className={styles.smallul}>
                        <li><Link to="/game" className={styles.smallli}>Repeat words</Link></li>
                        <li><Link to="/wordlist" className={styles.smallli}>Word list</Link></li>
                        {/* <li><Link to="" className={styles.smallli}>Learn new words</Link></li>
                        <li><Link to="" className={styles.smallli}>Select a topic</Link></li> */}
                        <li><Link to="/allwords" className={styles.smallli}>See all words</Link></li>
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