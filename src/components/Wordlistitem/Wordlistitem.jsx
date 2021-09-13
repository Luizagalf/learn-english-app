import { useState } from "react";
import styles from "./wordlistitem.module.scss";

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
                <td className={styles.words}><input className={styles.iteminput}
                    onChange={(val) => setValueWord(val.target.value)}
                    value={valueWord} />
                </td>
                <td className={styles.words}><input className={styles.iteminput}
                    onChange={(val) => setValueTranslation(val.target.value)}
                    value={valueTranslation} />
                </td>
                <td className={styles.buttons}>
                    <button className={styles.smallgreenbutton} onClick={() => acceptChange()}>Save</button>{' '}
                    <button className={styles.smallorangebutton} id={`edit.${id}`} onClick={() => cancelChange()}>Cancel</button>{' '}
                </td>
            </tr>)
            : (item = <tr>
                <td className={styles.words}><div onClick={() => { toggleSelected(true) }}>{valueWord}</div></td>
                <td className={styles.words}><div onClick={() => { toggleSelected(true) }}>{valueTranslation}</div></td>
                <td className={styles.buttons}>
                    <button className={styles.smallorangebutton} id={`edit.${id}`} onClick={() => { toggleSelected(true) }}>Edit</button>{' '}
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