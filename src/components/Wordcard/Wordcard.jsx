import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./card.module.scss";
import { Button } from 'react-bootstrap';

const Wordcard = ({ url, english, tags, transcription, russian }) => {
    const [isPressed, togglePressed] = useState(false)

    return (
        <div className={styles.card}>
            <img className={styles.img} src={url} alt={english} />
            <div className={styles.cardbody}>
                <h5 className={styles.maintext}>{english}</h5>
                <h6>{tags}</h6>
                <p>{transcription}</p>
                {
                    isPressed
                        ? (<p className={styles.maintext} onClick={() => { togglePressed(false) }}>{russian}</p>)
                        : (<Button size="sm" onClick={() => { togglePressed(true) }}>Check!</Button>)
                }
            </div>
        </div>
    );
}

export default Wordcard;