import { WordsContext } from '../../wordsAPI';
import React, { useContext, useEffect, useState } from "react";
import Wordcard from '../Wordcard/Wordcard';
import styles from "./wordcards.module.scss";

const Wordcards = () => {
    const cardsContext = useContext(WordsContext)
    const { words, isLoading } = cardsContext
    useEffect(() => window.scrollTo(0, window.offsetTop), [])
    const change = true

    const nameList = [];
    const [allWords, setAllWords] = useState(false)
    const [isSelected, toggleSelected] = useState(false)
    const [tag, setTag] = useState(false)

    for (let i = 0; i < words.length; i++) {
        if (!nameList.includes(words[i].tags) && words[i].tags !== false && words[i].tags !== undefined && words[i].tags !== null) {
            nameList.push(words[i].tags);
        }
    }
    nameList.sort();

    const selectedTag = (e) => {
        setTag(e);
        setAllWords(true);
        toggleSelected(true);
    }

    return (
        <>
            <div className={styles.rowtags}>
                <div className={styles.tag} onClick={() => { setAllWords(false) }}>Allwords</div>
                {
                    nameList.map((tag) =>
                        <p className={styles.tag} key={tag} onClick={() => { selectedTag(tag) }}>{tag}</p>
                    )
                }
            </div>
            {isLoading && <p>Loading ...</p>}
            { allWords
                ? <>
                    { isSelected
                        && <div className={styles.row}>
                            {
                                words.filter(word => word.tags === tag).map(filteredWord => (
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
                        words.map((word) =>
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