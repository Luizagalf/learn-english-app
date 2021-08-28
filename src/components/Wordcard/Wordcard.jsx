import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

function Wordcard({ url, english, tags, transcription, russian }) {
    return (
        <Card className="text-center">
            <Card.Img variant="top" src={url} alt={english} />
            <Card.Body>
                <Card.Title>{english}</Card.Title>
                <Card.Subtitle>{tags}</Card.Subtitle>
                <Card.Text>{transcription}</Card.Text>
                <Card.Text>{russian}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Wordcard;