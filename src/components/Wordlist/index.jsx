import styles from "./wordlist.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Wordlistitem from "../Wordlistitem/index";
import Wordlistnewitem from "../Wordlistnewitem/index";
import LoadedComponent from "../LoadedComponent/index";
import { useEffect } from "react";

import {
    setWordsAction,
    addWordAction,
    editWordAction,
    deleteWordAction,
} from "../../stores/actions";
import { connect } from "react-redux";

const Wordlist = (props) => {
    useEffect(() => {
        props.setWordsAction();
    }, []);

    const words = props.allWordsData;
    const isLoading = props.isLoading;
    const error = props.error;

    return (
        <LoadedComponent isLoading={isLoading} error={error}>
            <div className={styles.list}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td colspan="3" className={styles.title}>
                                Words list
                            </td>
                        </tr>
                        <tr>
                            <th>English</th>
                            <th>Russian</th>
                            <th></th>
                        </tr>
                    </thead>
                    {words &&
                        words.map((word) => (
                            <Wordlistitem
                                removeWord={props.deleteWordAction}
                                editWord={props.editWordAction}
                                key={word.id}
                                id={word.id}
                                english={word.english}
                                russian={word.russian}
                            ></Wordlistitem>
                        ))}
                    <Wordlistnewitem addWord={props.addWordAction} />
                </table>
            </div>
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
    addWordAction,
    editWordAction,
    deleteWordAction,
};

export default connect(mapStateToProps, mapDispatchToprops)(Wordlist);
