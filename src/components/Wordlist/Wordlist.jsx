import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./wordlist.module.scss";
import { Table } from 'react-bootstrap';

import jsonWords from '../../jsonWords';
import Wordlistitem from '../Wordlistitem/Wordlistitem';

function Wordlist() {
    return (
        <Table bordered size="sm" className={styles.table}>
            <thead>
                <tr>
                    <th colSpan="3">Word list</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th>English</th>
                    <th>Russian</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    jsonWords.map((word) =>
                        <Wordlistitem id={word.id} english={word.english} russian={word.russian} edit={word.edit}></Wordlistitem>
                    )
                }
            </tbody>
        </Table >
    );
}

export default Wordlist;