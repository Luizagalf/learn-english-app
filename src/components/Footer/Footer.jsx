import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <ul className={styles.mainul}>
            <div className={styles.menu}>
                <li><a href="" className={styles.namesite}>Let's learn English!</a></li>
            </div>
        </ul>
    );
}

export default Footer;