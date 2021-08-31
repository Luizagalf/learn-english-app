import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./card.module.scss";
import Card from 'react-bootstrap/Card';

function Wordcard({ url, english, tags, transcription, russian, ...props }) {
    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={url} alt={english} />
            <Card.Body>
                <Card.Title className={styles.maintext}>{english}</Card.Title>
                <Card.Subtitle>{tags}</Card.Subtitle>
                <Card.Text>{transcription}</Card.Text>
                <Card.Text className={styles.maintext}>{russian}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Wordcard;