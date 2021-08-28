import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./wordlist.scss";
import { Table, Button } from 'react-bootstrap';
import jsonWords from '../../jsonWords';

function Wordlist() {
    return (
        <Table bordered size="sm">
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
                        <tr>
                            <td>{word.english}</td>
                            <td>{word.russian}</td>
                            <td><button className={styles.button__success}>Save</button>{' '}
                                <Button variant="primary" size="sm">Edit</Button>{' '}
                                <Button variant="danger" size="sm">Delete</Button>{' '}
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table >
    );
}

export default Wordlist;