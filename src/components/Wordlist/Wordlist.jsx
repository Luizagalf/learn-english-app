import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./wordlist.module.scss";

import jsonWords from '../../jsonWords';
import Wordlistitem from '../Wordlistitem/Wordlistitem';

const Wordlist = () => {
    return (
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
                jsonWords.map((word) =>
                    <Wordlistitem key={word.id} id={word.id} english={word.english} russian={word.russian}></Wordlistitem>
                )
            }
        </table >
    );
}

export default Wordlist;