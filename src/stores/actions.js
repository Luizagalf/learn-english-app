// thunk-creator
export const setWordsAction = () => {
    return (dispatch) => {
        dispatch(getWordsLoading());
        fetch("/api/words/")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong...");
                }
            })
            .then((response) => {
                dispatch(getWordsSuccess(response));
            })
            .catch((error) => {
                dispatch(getWordsFail(error));
            });
    };
};

export const addWordAction = (valueWord, valueTranslation) => {
    return (dispatch) => {
        dispatch(getWordsLoading());
        fetch(`/api/words/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                english: valueWord,
                russian: valueTranslation,
            }),
        }).then((response) => {
            if (response.ok) {
                dispatch(setWordsAction());
            } else {
                throw new Error("Something went wrong...");
            }
        });
    };
};

export const editWordAction = (id, valueWord, valueTranslation) => {
    return (dispatch) => {
        fetch(`/api/words/${id}/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                id: id,
                english: valueWord,
                russian: valueTranslation,
                tags: [],
                transcription: "",
                tags_json: [],
            }),
        }).then((response) => {
            if (response.ok) {
                dispatch(setWordsAction());
                window.location.reload();
            } else {
                throw new Error("Something went wrong...");
            }
        });
    };
};

export const deleteWordAction = (id) => {
    return (dispatch) => {
        dispatch(getWordsLoading());
        fetch(`/api/words/${id}/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((response) => {
            if (response.ok) {
                dispatch(setWordsAction());
                window.location.reload();
            } else {
                throw new Error("Something went wrong...");
            }
        });
    };
};

const getWordsSuccess = (words) => ({
    type: "GET_WORDS_SUCCESS",
    payload: [...words],
});

const getWordsLoading = () => ({
    type: "GET_WORDS_STARTED",
});

const getWordsFail = (error) => ({
    type: "GET_WORDS_FAILURE",
    payload: error,
});
