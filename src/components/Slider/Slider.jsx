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
    const change = false

    const addToLearnedWords = () => {
        setLearnedWords(learnedWords + 1);
    }

    const [words, setWords] = useState()
    useEffect(() => {
        fetch("http://itgirlschool.justmakeit.ru/api/words /")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(json => setWords(json))
            .catch(error => setWords(jsonWords))
    })

    const handelClickState = (e) => {
        if (e <= 0) {
            setCount(words.length - 1)
            return;
        }
        if (e >= words.length) {
            setCount(0)
            return;
        }
        setCount(e)
    }

    return (
        <>
            {words
                &&
                <div className={styles.slider} >
                    <div className={styles.arrowleft} onClick={() => { handelClickState(count - 1) }}>
                        <div className={styles.arrowlefttop}></div>
                        <div className={styles.arrowleftbottom}></div>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.title}>You learned {learnedWords} words in this training!</p>
                        <Wordcard change={change} addToLearnedWords={addToLearnedWords} key={words[count].id} id={words[count].id} english={words[count].english} url={words[count].url} transcription={words[count].transcription} russian={words[count].russian} tags={words[count].tags}></Wordcard>
                        <div>{count + 1}/{words.length}</div>
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