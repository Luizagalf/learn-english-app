import "bootstrap/dist/css/bootstrap.min.css";
import jsonWords from '../../jsonWords';
import Wordcard from '../Wordcard/Wordcard';
import styles from "./wordcards.module.scss";

function Wordcards() {
    return (
        <div className={styles.row}>
            {
                jsonWords.map((word) =>
                    <div className={styles.col}>
                        <Wordcard id={word.id} english={word.english} url={word.url} transcription={word.transcription} russian={word.russian} tags={word.tags}></Wordcard>
                    </div>
                )
            }
        </div>
    );
}

export default Wordcards;