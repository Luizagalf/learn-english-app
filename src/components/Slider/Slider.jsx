import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jsonWords from '../../jsonWords';
import Wordcard from '../Wordcard/Wordcard';
import styles from "./slider.module.scss";

const Slider = () => {
    const [count, setCount] = useState(0)

    const handelClick = (e) => {
        if (e <= 0) {
            setCount(jsonWords.length - 1)
            return;
        }
        if (e >= jsonWords.length) {
            setCount(0)
            return;
        }
        setCount(e)
    }


    return (
        <div className={styles.slider}>
            <div className={styles.arrowleft} onClick={() => { handelClick(count - 1) }}>
                <div className={styles.arrowlefttop}></div>
                <div className={styles.arrowleftbottom}></div>
            </div>
            <div className={styles.card}>
                <Wordcard key={jsonWords[count].id} id={jsonWords[count].id} english={jsonWords[count].english} url={jsonWords[count].url} transcription={jsonWords[count].transcription} russian={jsonWords[count].russian} tags={jsonWords[count].tags}></Wordcard>
                <div>{count + 1}/{jsonWords.length}</div>
            </div>
            <div className={styles.arrowright} onClick={() => { handelClick(count + 1) }}>
                <div className={styles.arrowrighttop}></div>
                <div className={styles.arrowrightbottom}></div>
            </div>
        </div>
    );
}

export default Slider;