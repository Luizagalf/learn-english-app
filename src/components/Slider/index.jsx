import LoadedComponent from "../LoadedComponent/index";
import Wordcard from "../Wordcard";
import styles from "./slider.module.scss";
import React, { useState, useEffect } from "react";
import { setWordsAction } from "../../stores/actions";
import { connect } from "react-redux";

const Slider = (props) => {
    useEffect(() => {
        props.setWordsAction();
        window.scrollTo(0, window.offsetTop);
    }, []);

    const words = props.allWordsData;
    const isLoading = props.isLoading;
    const error = props.error;

    const [count, setCount] = useState(0);
    const [learnedWords, setLearnedWords] = useState(0);
    const change = false;

    const addToLearnedWords = () => {
        setLearnedWords(learnedWords + 1);
    };

    const handelClickState = (e) => {
        if (e <= 0) {
            setCount(words.length - 1);
            return;
        }
        if (e >= words.length) {
            setCount(0);
            return;
        }
        setCount(e);
    };

    return (
        <LoadedComponent isLoading={isLoading} error={error}>
            {words && (
                <div className={styles.slider}>
                    <div
                        className={styles.arrowleft}
                        onClick={() => {
                            handelClickState(count - 1);
                        }}
                    >
                        <div className={styles.arrowlefttop}></div>
                        <div className={styles.arrowleftbottom}></div>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.title}>
                            You learned {learnedWords} words in this training!
                        </p>
                        {words.length && (
                            <Wordcard
                                change={change}
                                addToLearnedWords={addToLearnedWords}
                                key={words[count].id}
                                id={words[count].id}
                                english={words[count].english}
                                url={words[count].url}
                                transcription={words[count].transcription}
                                russian={words[count].russian}
                                tags={words[count].tags}
                            ></Wordcard>
                        )}
                        <div>
                            {count + 1}/{words.length}
                        </div>
                    </div>
                    <div
                        className={styles.arrowright}
                        onClick={() => {
                            handelClickState(count + 1);
                        }}
                    >
                        <div className={styles.arrowrighttop}></div>
                        <div className={styles.arrowrightbottom}></div>
                    </div>
                </div>
            )}
        </LoadedComponent>
    );
};

const mapStateToProps = (state) => {
    return {
        allWordsData: state.words,
        isLoading: state.isLoading,
        error: state.error,
    };
};

const mapDispatchToprops = {
    setWordsAction,
};

export default connect(mapStateToProps, mapDispatchToprops)(Slider);
