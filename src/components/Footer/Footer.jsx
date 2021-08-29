import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./footer.module.scss";
import {Button } from 'react-bootstrap';

function Footer() {
    return (
    <ul className={styles.mainul}>
        <li><a href="">Let's learn English!</a></li>
        <li className={styles.search}> 
            <input type="search" name="q" placeholder="What to search?"/> 
            <Button variant="primary" className={styles.button}>Search</Button>
        </li>
    </ul>
    );
}

export default Footer;