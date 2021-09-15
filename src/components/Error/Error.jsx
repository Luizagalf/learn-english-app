import styles from "./error.module.scss";
import { useHistory } from "react-router-dom";


const Error = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/");
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.errortext}>404</h1>
            <div className={styles.notfound}>
                <h2 className={styles.title}>We are sorry, Page not found!</h2>
                <p className={styles.text}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <button onClick={handleClick} className={styles.errorbutton}>Home</button>
            </div>
        </div>
    );
}

export default Error;