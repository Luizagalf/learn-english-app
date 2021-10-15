import styles from "./wordlist.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { observer, inject } from "mobx-react";

import Wordlistitem from '../Wordlistitem/index';
import Wordlistnewitem from '../Wordlistnewitem/index';
import LoadedComponent from '../LoadedComponent/index';

const Wordlist = inject(['wordStore'])(observer(({ wordStore }) => {
    const words = wordStore.words
    const isLoading = wordStore.isLoading
    const error = wordStore.error
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
                    {words &&
                        words.map((word) =>
                            <Wordlistitem removeWord={wordStore.deleteWord} editWord={wordStore.editWord} key={word.id} id={word.id} english={word.english} russian={word.russian}></Wordlistitem>
                        )
                    }
                    <Wordlistnewitem addWord={wordStore.addWord} />
                </table>
            </div>
        </LoadedComponent>
    );
}))

export default Wordlist;