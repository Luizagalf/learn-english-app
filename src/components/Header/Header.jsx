import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./header.module.scss";
import { Button } from 'react-bootstrap';

// const isValid from ('./validation.js');

const Header = () => {
    return (
        <ul className={styles.mainul}>
            <div>
                <li><a href="">Let's learn English!</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Word list</a>
                    <ul className={styles.smallul}>
                        <li><a href="">Repeat words</a></li>
                        <li><a href="">Learn new words</a></li>
                        <li><a href="">Select a topic</a></li>
                        <li><a href="">Learn new words</a></li>
                    </ul>
                </li>
                <li><a href="">My progress</a></li>
            </div>
            <div>
                <li className={styles.search}>
                    <input type="search" name="q" placeholder="What to search?" />
                    <Button variant="primary" className={styles.button}>Search</Button>
                </li>
            </div>
        </ul>
    );
}

export default Header;