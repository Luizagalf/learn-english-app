import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jsonWords from '../../jsonWords';
import Wordcard from '../Wordcard/Wordcard';
import styles from "./slider.module.scss";

const Slider = () => {
    const [count, setCount] = useState(0)

    const [state, setState] = useState([])
    useEffect(() => {
        fetch("http://sandbox.itgirlschool.ru/api/words/")
            .then(Response => Response.json())
            .then(json => setState(json))
    })

    const handelClickJson = (e) => {
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

    const handelClickState = (e) => {
        if (e <= 0) {
            setCount(state.length - 1)
            return;
        }
        if (e >= state.length) {
            setCount(0)
            return;
        }
        setCount(e)
    }

    return (
        <>
            {state
                ?
                <div className={styles.slider} >
                    <div className={styles.arrowleft} onClick={() => { handelClickState(count - 1) }}>
                        <div className={styles.arrowlefttop}></div>
                        <div className={styles.arrowleftbottom}></div>
                    </div>
                    <div className={styles.card}>
                        <Wordcard key={state[count].id} id={state[count].id} english={state[count].english} url={state[count].url} transcription={state[count].transcription} russian={state[count].russian} tags={state[count].tags}></Wordcard>
                        <div>{count + 1}/{state.length}</div>
                    </div>
                    <div className={styles.arrowright} onClick={() => { handelClickState(count + 1) }}>
                        <div className={styles.arrowrighttop}></div>
                        <div className={styles.arrowrightbottom}></div>
                    </div>
                </div>
                :
                <div className={styles.slider}>
                    <div className={styles.arrowleft} onClick={() => { handelClickJson(count - 1) }}>
                        <div className={styles.arrowlefttop}></div>
                        <div className={styles.arrowleftbottom}></div>
                    </div>
                    <div className={styles.card}>
                        <Wordcard key={jsonWords[count].id} id={jsonWords[count].id} english={jsonWords[count].english} url={jsonWords[count].url} transcription={jsonWords[count].transcription} russian={jsonWords[count].russian} tags={jsonWords[count].tags}></Wordcard>
                        <div>{count + 1}/{jsonWords.length}</div>
                    </div>
                    <div className={styles.arrowright} onClick={() => { handelClickJson(count + 1) }}>
                        <div className={styles.arrowrighttop}></div>
                        <div className={styles.arrowrightbottom}></div>
                    </div>
                </div>
            }
        </>
    );
}

export default Slider;