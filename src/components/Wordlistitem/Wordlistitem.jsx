import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./wordlistitem.module.scss";
import { Button } from 'react-bootstrap';

function Wordlistitem({ id, edit, english, russian }) {
    let item;
    if (edit) {
        item = <tr className={styles.edit}>
            <td className={styles.words}><input value={english}/></td>
            <td className={styles.words}><input value={russian}/></td>
            <td className={styles.buttons}>
                <Button variant="success" size="sm" className={styles.button}>Save</Button>{' '}
                {/* id={save.{word.id}} disabled */}
                <Button variant="primary" size="sm" className={styles.button} id={`edit.${id}`}>Edit</Button>{' '}
                <Button variant="danger" size="sm" className={styles.button}>Delete</Button>{' '}
            </td>
        </tr>;
    } else {
        item = <tr>
            <td className={styles.words}>{english}</td>
            <td className={styles.words}>{russian}</td>
            <td className={styles.buttons}>
                <Button variant="primary" size="sm" className={styles.button} id={`edit.${id}`}>Edit</Button>{' '}
                <Button variant="danger" size="sm" className={styles.button}>Delete</Button>{' '}
            </td>
        </tr>;
        }

    return (
        <>
        {item}
        </>
    );
}

export default Wordlistitem;