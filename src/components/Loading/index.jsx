import styles from "./loading.module.scss";

const Loading = () => {
    return (
        <div className={styles.main} >
            <div className={styles.pencil}>
                <div className={styles.pencil__ball_point}></div>
                <div className={styles.pencil__cap}></div>
                <div className={styles.pencil__cap_base}></div>
                <div className={styles.pencil__middle}></div>
                <div className={styles.pencil__eraser}></div>
            </div>
            <div className={styles.line}></div>
            <h2 className={styles.text}>Page loading...Please wait</h2>
        </div>
    );
}

export default Loading;