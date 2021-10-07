import styles from "./wordlist.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import Wordlistitem from '../Wordlistitem/Wordlistitem';
import { WordsContext } from '../../WordsContext';
import Wordlistnewitem from '../Wordlistnewitem/Wordlistnewitem';

const Wordlist = () => {
    const appContext = useContext(WordsContext)
    const { words, isLoading } = appContext
    return (
        <>
            {isLoading && <p>Loading ...</p>}
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
                    {/* <Wordlistnewitem /> */}
                </table>
            </div>
        </>
    );
}

export default Wordlist;