import React, {
    createContext,
    useState,
    useEffect,
} from 'react';

export const WordsContext = React.createContext();

const API = (props) => {
    const [words, setWords] = useState(" ")
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
            .catch(error => setWords(false))
    })
    return (
        <WordsContext.Provider value={{words, isLoading}}>
            {props.children}
        </WordsContext.Provider>
    );
}

export default API;