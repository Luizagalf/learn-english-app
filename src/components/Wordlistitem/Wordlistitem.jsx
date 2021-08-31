import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./wordlistitem.module.scss";
import { Button } from 'react-bootstrap';

const Wordlistitem = ({ id, edit, english, russian }) => {
    const [isSelected, toggleSelected] = useState(false)
    const [valueWord, setValueWord] = useState(english)
    const [valueTranslation, setValueTranslation] = useState(russian)

    let item;
    {
        isSelected
            ? (item = <tr className={styles.edit}>
                <td className={styles.words}><input
                    onBlur={() => { toggleSelected(false) }}
                    onChange={(val) => setValueWord(val.target.value)}
                    value={valueWord} />
                </td>
                <td className={styles.words}><input
                    onBlur={() => { toggleSelected(false) }}
                    onChange={(val) => setValueTranslation(val.target.value)}
                    value={valueTranslation} />
                </td>
                <td className={styles.buttons}>
                    <Button variant="success" size="sm" className={styles.button} onClick={() => { toggleSelected(false) }}>Save</Button>{' '}
                    <Button variant="warning" size="sm" className={styles.button} id={`edit.${id}`} onClick={() => { toggleSelected(false) }}>Cancel</Button>{' '}
                    <Button variant="danger" size="sm" className={styles.button}>Delete</Button>{' '}
                </td>
            </tr>)
            : (item = <tr>
                <td className={styles.words}><div onClick={() => { toggleSelected(true) }}>{valueWord}</div></td>
                <td className={styles.words}><div onClick={() => { toggleSelected(true) }}>{valueTranslation}</div></td>
                <td className={styles.buttons}>
                    <Button variant="primary" size="sm" className={styles.button} id={`edit.${id}`} onClick={() => { toggleSelected(true) }}>Edit</Button>{' '}
                    <Button variant="danger" size="sm" className={styles.button}>Delete</Button>{' '}
                </td>
            </tr>)
    }


    return (
        <>
            {item}
        </>
    );
}

export default Wordlistitem;