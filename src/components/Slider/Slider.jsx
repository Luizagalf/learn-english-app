import jsonWords from '../../jsonWords';
import Wordcard from '../Wordcard/Wordcard';
import styles from "./slider.module.scss";
import React, {
    useState,
    useEffect,
} from 'react';

const Slider = () => {
    const [count, setCount] = useState(0)
    const [learnedWords, setLearnedWords] = useState(0)

    const addToLearnedWords = () => {
        setLearnedWords(learnedWords + 1);
    }

    const [state, setState] = useState(false)
    useEffect(() => {
        fetch("http://sandbox.itgirlschool.ru/api/words /")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(json => setState(json))
            .catch(error => setState(jsonWords))
    })

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
                &&
                <div className={styles.slider} >
                    <div className={styles.arrowleft} onClick={() => { handelClickState(count - 1) }}>
                        <div className={styles.arrowlefttop}></div>
                        <div className={styles.arrowleftbottom}></div>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.title}>You learned {learnedWords} words in this training!</p>
                        <Wordcard addToLearnedWords={addToLearnedWords} key={state[count].id} id={state[count].id} english={state[count].english} url={state[count].url} transcription={state[count].transcription} russian={state[count].russian} tags={state[count].tags}></Wordcard>
                        <div>{count + 1}/{state.length}</div>
                    </div>
                    <div className={styles.arrowright} onClick={() => { handelClickState(count + 1) }}>
                        <div className={styles.arrowrighttop}></div>
                        <div className={styles.arrowrightbottom}></div>
                    </div>
                </div>
            }
        </>
    );
}

export default Slider;