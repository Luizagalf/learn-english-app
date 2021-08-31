import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./card.module.scss";
import { Card, Button } from 'react-bootstrap';

const Wordcard = ({ url, english, tags, transcription, russian }) => {
    const [isPressed, togglePressed] = useState(false)

    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={url} alt={english} />
            <Card.Body>
                <Card.Title className={styles.maintext}>{english}</Card.Title>
                <Card.Subtitle>{tags}</Card.Subtitle>
                <Card.Text>{transcription}</Card.Text>
                {
                    isPressed
                        ? (<Card.Text className={styles.maintext} onClick={() => { togglePressed(false) }}>{russian}</Card.Text>)
                        : (<Button size="sm" onClick={() => { togglePressed(true) }}>Check!</Button>)
                }
            </Card.Body>
        </Card>
    );
}

export default Wordcard;