import { useState } from "react";
import styles from "./card.module.scss";

const Wordcard = ({ url, english, tags, transcription, russian }) => {
    const [isPressed, togglePressed] = useState(false)

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
                            ? (<p className={styles.maintext} onClick={() => { togglePressed(false) }}>{russian}</p>)
                            : (<button className={styles.checkbutton} onClick={() => { togglePressed(true) }}>Check!</button>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Wordcard;