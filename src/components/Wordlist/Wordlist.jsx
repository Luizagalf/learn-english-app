import styles from "./wordlist.module.scss";
import React, { useState, useEffect } from "react";

import jsonWords from '../../jsonWords';
import Wordlistitem from '../Wordlistitem/Wordlistitem';

const Wordlist = () => {
    const [words, setWords] = useState([])
    useEffect(() => setWords(jsonWords), []);
    return (
        <div className={styles.list}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td colspan="3" className={styles.title}>Word list</td>
                    </tr>
                    <tr>
                        <th>English</th>
                        <th>Russian</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    words.map((word) =>
                        <Wordlistitem key={word.id} id={word.id} english={word.english} russian={word.russian}></Wordlistitem>
                    )
                }
            </table>
        </div>
    );
}

export default Wordlist;