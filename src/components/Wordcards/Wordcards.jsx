import "bootstrap/dist/css/bootstrap.min.css";
import jsonWords from '../../jsonWords';
import Wordcard from '../Wordcard/Wordcard';
import { Row, Col } from "react-bootstrap";

function Wordcards() {
    return (
        <Row xs={1} md={3} className="g-4 justify-content-md-center">
            {
                jsonWords.map((word) =>
                    <Col className="d-flex p-2">
                        <Wordcard english={word.english} url={word.url} transcription={word.transcription} russian={word.russian} tags={word.tags}></Wordcard>
                    </Col>
                )
            }
        </Row>
    );
}

export default Wordcards;