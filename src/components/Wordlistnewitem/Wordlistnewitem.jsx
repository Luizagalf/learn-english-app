import React, { useState } from "react";
import styles from "./wordlistnewitem.module.scss";

const Wordlistnewitem = ({ id, english, russian, selected = false }) => {
    const [isSelected, toggleSelected] = useState(selected)

    const [valueWord, setValueWord] = useState("")
    const [valueTranslation, setValueTranslation] = useState("")

    const [prevValueWord, setPrevWord] = useState(valueWord)
    const [prevValueTranslation, setPrevValueTranslation] = useState(valueTranslation)

    const [formError, setFormError] = useState({ Word: '', Translation: '' })
    const [formCorrect, setFormCorrect] = useState({ Word: '', Translation: '' })
    const [formValid, setlformValid] = useState(false);
    const [colorInput, setColorInput] = useState({ Word: '', Translation: '' })

    const [newWords, setNewWords] = useState()



    const handleInputChange = (e) => {
        const name = e.target.name.trim();
        const value = e.target.value.trim();
        validateField(name, value);
    }

    const validateField = (fieldName, value) => {

        switch (fieldName) {
            case 'Word':
                if (value.length > 0) {
                    if (value.match("^[a-zA-Z\s]+$")) {
                        setFormCorrect({ Word: '', Translation: formCorrect.Translation })
                        setFormError({ Word: '', Translation: formError.Translation })
                        setColorInput({ Word: styles.greeninput, Translation: colorInput.Translation })
                    } else {
                        setFormError({ Word: '', Translation: formError.Translation })
                        setFormCorrect({ Word: 'Word is not correct', Translation: formCorrect.Translation })
                        setColorInput({ Word: styles.errorinput, Translation: colorInput.Translation })
                    }
                } else {
                    setFormCorrect({ Word: '', Translation: formCorrect.Translation })
                    setFormError({ Word: 'Field is empty', Translation: formError.Translation })
                    setColorInput({ Word: styles.errorinput, Translation: colorInput.Translation })
                }
                setNewWords(value);
                break;
            case 'Translation':
                if (value.length > 0) {
                    if (value.match("^[а-яА-ЯёЁ]+$")) {
                        setFormCorrect({ Word: formCorrect.Word, Translation: '' })
                        setFormError({ Word: formError.Word, Translation: '' })
                        setColorInput({ Word: colorInput.Word, Translation: styles.greeninput })
                    } else {
                        setFormError({ Word: formError.Word, Translation: '' })
                        setFormCorrect({ Word: formCorrect.Word, Translation: 'Word is not correct' })
                        setColorInput({ Word: colorInput.Word, Translation: styles.errorinput })
                    }
                } else {
                    setFormCorrect({ Word: formCorrect.Word, Translation: '' })
                    setFormError({ Word: formError.Word, Translation: 'Field is empty' })
                    setColorInput({ Word: colorInput.Word, Translation: styles.errorinput })
                }
                setValueTranslation(value);
                break;
            default:
                break;
        }
        validateForm()
    }
    const validateForm = () => {
        if (formError.Word === '' && formError.Translation === '' && formCorrect.Word === '' && formCorrect.Translation === '') {
            setlformValid(true)
        }
    }


    const cancelChange = () => {
        toggleSelected(false);
        setValueWord(prevValueWord);
        setValueTranslation(prevValueTranslation);
        setFormError({ Word: '', Translation: '' });
        setFormCorrect({ Word: '', Translation: '' });
        setColorInput({ Word: '', Translation: '' });
    };

    const acceptChange = () => {
        if (formError.Word === '' && formError.Translation === '' && formCorrect.Word === '' && formCorrect.Translation === '') {
            setPrevWord(valueWord);
            setPrevValueTranslation(valueTranslation);
            setNewWords(`English: ${valueWord}, Russian: ${valueTranslation}`)
            console.log(newWords)
            toggleSelected(false)
        }
    }

    let item;
    {
        isSelected
            ? (item = <tr className={styles.edit}>
                <td className={styles.words}><input className={`${styles.iteminput} ${colorInput.Word}`}
                    name="Word"
                    onChange={handleInputChange}
                    value={valueWord}
                    placeholder={formError.Word} />
                    <p>{formCorrect.Word}</p>
                </td>
                <td className={styles.words}><input className={`${styles.iteminput} ${colorInput.Translation}`}
                    name="Translation"
                    onChange={handleInputChange}
                    value={valueTranslation}
                    placeholder={formError.Translation} />
                    <p>{formCorrect.Translation}</p>
                </td>
                <div className={styles.buttons}>
                    <button className={styles.smallgreenbutton} onClick={() => acceptChange()} disabled={!formValid} > Save</button>{' '}
                    <button className={styles.smallorangebutton} id={`edit.{id}`} onClick={() => cancelChange()}>Cancel</button>{' '}
                </div>
            </tr>)
            : (item = <tr>
                <td className={styles.words}><div onClick={() => { toggleSelected(true) }}>{valueWord}</div></td>
                <td className={styles.words}><div onClick={() => { toggleSelected(true) }}>{valueTranslation}</div></td>
                <div className={styles.buttons}>
                    <button className={styles.smallgreenbutton} id={`edit.${id}`} onClick={() => { toggleSelected(true) }}>Add new word</button>{' '}
                </div>
            </tr>)
    }


    return (
        <>
            {item}
        </>
    );
}

export default Wordlistnewitem;