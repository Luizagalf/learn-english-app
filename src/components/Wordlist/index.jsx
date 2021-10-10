import styles from "./wordlist.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import Wordlistitem from '../Wordlistitem/index';
import Loading from '../Loading/index'
import { WordsContext } from '../../wordsAPI';
import Wordlistnewitem from '../Wordlistnewitem/index';
import LoadedComponent from '../LoadedComponent/index';

const Wordlist = () => {
    const { words, isLoading, error } = useContext(WordsContext)
    return (
        <LoadedComponent isLoading={isLoading} error={error}>
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
                    {words.length ?
                        words.map((word) =>
                            <Wordlistitem key={word.id} id={word.id} english={word.english} russian={word.russian}></Wordlistitem>
                        )
                        : ""}
                    <Wordlistnewitem />
                </table>
            </div>
        </LoadedComponent>
    );
}

export default Wordlist;