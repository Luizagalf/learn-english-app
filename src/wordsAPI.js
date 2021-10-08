import React, {
    createContext,
    useState,
    useEffect,
} from 'react';

export const WordsContext = createContext();

const WordsAPI = (props) => {
    const [words, setWords] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch("http://itgirlschool.justmakeit.ru/api/words/")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(response => setWords(response), setIsLoading(false))
            .catch(error => setError(true), setIsLoading(false))
    }, [])
    return (
        <WordsContext.Provider value={{words, isLoading, error}}>
            {props.children}
        </WordsContext.Provider>
    );
}

export default WordsAPI;