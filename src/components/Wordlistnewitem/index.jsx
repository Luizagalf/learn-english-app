import React, { useState } from "react";
import styles from "./wordlistnewitem.module.scss";

const Wordlistnewitem = ({ addWord, selected = false }) => {
    const [isSelected, toggleSelected] = useState(selected);

    const [valueWord, setValueWord] = useState("");
    const [valueTranslation, setValueTranslation] = useState("");

    const [formError, setFormError] = useState({ Word: "", Translation: "" });
    const [formCorrect, setFormCorrect] = useState({
        Word: "",
        Translation: "",
    });
    const [formValid, setlformValid] = useState(false);
    const [colorInput, setcColorInput] = useState({
        Word: "",
        Translation: "",
    });

    const handleInputChange = (e) => {
        const name = e.target.name.trim();
        const value = e.target.value.trim();
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case "Word":
                if (value.length > 0) {
                    if (value.match("^[a-zA-Zs]+$")) {
                        setFormCorrect({
                            Word: "",
                            Translation: formCorrect.Translation,
                        });
                        setFormError({
                            Word: "",
                            Translation: formError.Translation,
                        });
                        setcColorInput({
                            Word: styles.greeninput,
                            Translation: colorInput.Translation,
                        });
                    } else {
                        setFormError({
                            Word: "",
                            Translation: formError.Translation,
                        });
                        setFormCorrect({
                            Word: "Word is not correct",
                            Translation: formCorrect.Translation,
                        });
                        setcColorInput({
                            Word: styles.errorinput,
                            Translation: colorInput.Translation,
                        });
                    }
                } else {
                    setFormCorrect({
                        Word: "",
                        Translation: formCorrect.Translation,
                    });
                    setFormError({
                        Word: "Field is empty",
                        Translation: formError.Translation,
                    });
                    setcColorInput({
                        Word: styles.errorinput,
                        Translation: colorInput.Translation,
                    });
                }
                setValueWord(value);
                break;
            case "Translation":
                if (value.length > 0) {
                    if (value.match("^[а-яА-ЯёЁ]+$")) {
                        setFormCorrect({
                            Word: formCorrect.Word,
                            Translation: "",
                        });
                        setFormError({ Word: formError.Word, Translation: "" });
                        setcColorInput({
                            Word: colorInput.Word,
                            Translation: styles.greeninput,
                        });
                    } else {
                        setFormError({ Word: formError.Word, Translation: "" });
                        setFormCorrect({
                            Word: formCorrect.Word,
                            Translation: "Word is not correct",
                        });
                        setcColorInput({
                            Word: colorInput.Word,
                            Translation: styles.errorinput,
                        });
                    }
                } else {
                    setFormCorrect({ Word: formCorrect.Word, Translation: "" });
                    setFormError({
                        Word: formError.Word,
                        Translation: "Field is empty",
                    });
                    setcColorInput({
                        Word: colorInput.Word,
                        Translation: styles.errorinput,
                    });
                }
                setValueTranslation(value);
                break;
            default:
                break;
        }
        validateForm();
    };
    const validateForm = () => {
        if (
            formError.Word === "" &&
            formError.Translation === "" &&
            formCorrect.Word === "" &&
            formCorrect.Translation === ""
        ) {
            setlformValid(true);
        }
    };

    const cancelChange = () => {
        toggleSelected(false);
        setFormError({ Word: "", Translation: "" });
        setFormCorrect({ Word: "", Translation: "" });
        setcColorInput({ Word: "", Translation: "" });
    };

    const acceptChange = () => {
        if (
            formError.Word === "" &&
            formError.Translation === "" &&
            formCorrect.Word === "" &&
            formCorrect.Translation === ""
        ) {
            toggleSelected(false);
            addWord(valueWord, valueTranslation);
        }
    };

    let item;
    {
        isSelected
            ? (item = (
                  <tr className={styles.edit}>
                      <td className={styles.words}>
                          <input
                              className={`${styles.iteminput} ${colorInput.Word}`}
                              name="Word"
                              onChange={handleInputChange}
                              placeholder={formError.Word}
                          />
                          <p>{formCorrect.Word}</p>
                      </td>
                      <td className={styles.words}>
                          <input
                              className={`${styles.iteminput} ${colorInput.Translation}`}
                              name="Translation"
                              onChange={handleInputChange}
                              placeholder={formError.Translation}
                          />
                          <p>{formCorrect.Translation}</p>
                      </td>
                      <div className={styles.buttons}>
                          <button
                              className={styles.smallgreenbutton}
                              onClick={() => acceptChange()}
                              disabled={!formValid}
                          >
                              Save new word
                          </button>
                          <button
                              className={styles.smallorangebutton}
                              onClick={cancelChange}
                          >
                              Cancel
                          </button>
                      </div>
                  </tr>
              ))
            : (item = (
                  <tr>
                      <td className={styles.words}></td>
                      <td className={styles.words}></td>
                      <div className={styles.buttons}>
                          <button
                              className={styles.smallgreenbutton}
                              onClick={() => {
                                  toggleSelected(true);
                              }}
                          >
                              Add new word
                          </button>
                      </div>
                  </tr>
              ));
    }

    return <>{item}</>;
};

export default Wordlistnewitem;
