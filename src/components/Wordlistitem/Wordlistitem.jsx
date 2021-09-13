import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./wordlistitem.module.scss";
import { Button } from 'react-bootstrap';

const Wordlistitem = ({ id, english, russian }) => {
    const [isSelected, toggleSelected] = useState(false)

    const [valueWord, setValueWord] = useState(english)
    const [valueTranslation, setValueTranslation] = useState(russian)

    const [prevValueWord, setPrevWord] = useState(valueWord)
    const [prevValueTranslation, setPrevValueTranslation] = useState(valueTranslation)

    const cancelChange = () => {
        toggleSelected(false);
        setValueWord(prevValueWord);
        setValueTranslation(prevValueTranslation);
    };

    const acceptChange = () => {
        console.log("start");
        setValueWord(valueWord);
        setValueTranslation(valueTranslation);

        setPrevWord(valueWord);
        setPrevValueTranslation(valueTranslation);
        toggleSelected(false);
        console.log("finish");
    }

    let item;
    {
        isSelected
            ? (item = <tr className={styles.edit}>
                <td className={styles.words}><input
                    onChange={(val) => setValueWord(val.target.value)}
                    value={valueWord} />
                </td>
                <td className={styles.words}><input
                    onChange={(val) => setValueTranslation(val.target.value)}
                    value={valueTranslation} />
                </td>
                <td className={styles.buttons}>
                    <Button variant="success" size="sm" className={styles.button} onClick={() => acceptChange()}>Save</Button>{' '}
                    <Button variant="warning" size="sm" className={styles.button} id={`edit.${id}`} onClick={() => cancelChange()}>Cancel</Button>{' '}
                    <Button variant="danger" size="sm" className={styles.button}>x</Button>{' '}
                </td>
            </tr>)
            : (item = <tr>
                <td className={styles.words}><div onClick={() => { toggleSelected(true) }}>{valueWord}</div></td>
                <td className={styles.words}><div onClick={() => { toggleSelected(true) }}>{valueTranslation}</div></td>
                <td className={styles.buttons}>
                    <Button variant="primary" size="sm" className={styles.button} id={`edit.${id}`} onClick={() => { toggleSelected(true) }}>Edit</Button>{' '}
                    <Button variant="danger" size="sm" className={styles.button}>x</Button>{' '}
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