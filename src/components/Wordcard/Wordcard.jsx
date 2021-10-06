import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import styles from "./card.module.scss";

const Wordcard = ({ url, english, transcription, russian, addToLearnedWords, change }) => {

    const ref = useRef();
    useEffect(() => !change && ref.current.focus(), []);

    const [isPressed, togglePressed] = useState(change)

    const lookWord = () => {
        togglePressed(true);
        addToLearnedWords();
    }

    return (
        <div className={styles.card}>
            <img className={styles.img} src={url} alt={english} />
            <div className={styles.cardbody}>
                <h5 className={styles.maintext}>{english}</h5>
                <p>{transcription}</p>
                <div>
                    {
                        isPressed
                            ? (<p className={styles.maintext}>{russian}</p>)
                            : (<button className={styles.checkbutton} onClick={lookWord} ref={ref}
                            >Check!</button>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Wordcard;