import React, {
    useState,
    useEffect,
    useRef,
    forwardRef,
} from 'react';
import ReactDOM from "react-dom";
import styles from "./card.module.scss";

const Wordcard = ({ url, english, tags, transcription, russian, addToLearnedWords }) => {
    const [isPressed, togglePressed] = useState(false)

    const onClick = () => {
        togglePressed(true);
        addToLearnedWords();
    }

    // const Button = forwardRef((focus, ref) => (
    //     <button className={styles.checkbutton} onClick={onClick} ref={ref}
    //     >Check!</button>
    // ));

    return (
        <div className={styles.card}>
            <img className={styles.img} src={url} alt={english} />
            <div className={styles.cardbody}>
                <h5 className={styles.maintext}>{english}</h5>
                <h6>{tags}</h6>
                <p>{transcription}</p>
                <div>
                    {
                        isPressed
                            ? (<p className={styles.maintext}>{russian}</p>)
                            : (<button className={styles.checkbutton} onClick={onClick}>Check!</button>)

                        // : (<Button />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Wordcard;