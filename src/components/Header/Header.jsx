import styles from "./header.module.scss";

// const isValid from ('./validation.js');

const Header = () => {
    return (
        <ul className={styles.mainul}>
            <div className={styles.menu}>
                <li><a href="" className={styles.namesite}>Let's learn English!</a></li>
                <li><a href="" className={styles.mainli}>Home</a></li>
                <li><a href="" className={styles.mainli}>Word list</a>
                    <ul className={styles.smallul}>
                        <li><a href="" className={styles.mainli}>Repeat words</a></li>
                        <li><a href="" className={styles.mainli}>Learn new words</a></li>
                        <li><a href="" className={styles.mainli}>Select a topic</a></li>
                        <li><a href="" className={styles.mainli}>Learn new words</a></li>
                    </ul>
                </li>
                <li><a href="" className={styles.mainli}>My progress</a></li>
            </div>
            <div className={styles.form}>
                <input type="search" name="q" placeholder="What to search?" className={styles.search} />
                <button className={styles.searchbutton}>Search</button>
            </div>
        </ul>
    );
}

export default Header;