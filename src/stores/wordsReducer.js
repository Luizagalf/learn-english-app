export const wordsReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_WORDS_STARTED":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_WORDS_SUCCESS":
            return {
                ...state,
                words: [...action.payload],
                isLoading: false,
            };

        case "GET_WORDS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: true,
            };

        default:
            return state;
    }
};
