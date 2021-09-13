import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <ul className={styles.mainul}>
            <div className={styles.menu}>
                <li><a href="" className={styles.namesite}>Let's learn English!</a></li>
            </div>
            <div className={styles.form}>
                <input type="search" name="q" placeholder="What to search?" className={styles.search} />
                <button className={styles.searchbutton}>Search</button>
            </div>
        </ul>
    );
}

export default Footer;