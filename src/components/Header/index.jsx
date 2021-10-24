import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li>
                    <Link to="/" className={styles.namesite}>
                        Let's learn English!
                    </Link>
                </li>
                <li>
                    <Link disabled to="#" className={styles.mainli}>
                        Words
                    </Link>
                    <ul className={styles.smallul}>
                        <li>
                            <Link to="/wordlist" className={styles.smallli}>
                                Word list
                            </Link>
                        </li>
                        <li>
                            <Link to="/allwords" className={styles.smallli}>
                                See all words
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/game" className={styles.mainli}>
                        Repeat words
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
