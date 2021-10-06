import jsonWords from '../../jsonWords';
import Wordcard from '../Wordcard/Wordcard';
import styles from "./wordcards.module.scss";
import React, {
    useEffect, useState
} from 'react';

const Wordcards = () => {
    useEffect(() => window.scrollTo(0, window.offsetTop), [])
    const change = true

    // const [nameList, setNameList] = useState([Allwords]);
    const [allWords, setAllWords] = useState(false)
    const [isSelected, toggleSelected] = useState(false)
    const [tag, setTag] = useState(false)

    // const all;
    // const ALL = () => {
    //     if (jsonWords.word.includes(word.tags) === false) {
    //         nameList.push(word.tags)
    //     }
    // }

    const selectedTag = (e) => {
        setTag(e);
        setAllWords(true);
        toggleSelected(true);
        console.log(tag, isSelected)
    }

    return (
        <>
            <div className={styles.row}>
                <div className={styles.col} onClick={() => { setAllWords(false) }}>Allwords</div>
                {
                    jsonWords.map((word) =>
                        <div className={styles.col} key={word.id}>
                            <div onClick={() => { selectedTag(word.tags) }} id={word.id}>{word.tags}</div>
                        </div>
                    )
                }
            </div>

            { allWords
                ? <>
                    { isSelected
                        && <div className={styles.row}>
                            {
                                jsonWords.filter(word => word.tags === tag).map(filteredWord => (
                                    <div className={styles.col} key={filteredWord.id} >
                                        <Wordcard change={change} english={filteredWord.english} url={filteredWord.url} transcription={filteredWord.transcription} russian={filteredWord.russian} tags={filteredWord.tags}></Wordcard>
                                    </div>
                                ))
                            }
                        </div>}
                </>
                :
                <div className={styles.row}>
                    {
                        jsonWords.map((word) =>
                            <div className={styles.col} key={word.id} >
                                <Wordcard change={change} english={word.english} url={word.url} transcription={word.transcription} russian={word.russian} tags={word.tags}></Wordcard>
                            </div>
                        )
                    }
                </div>
            }
        </>
    );
}

export default Wordcards;