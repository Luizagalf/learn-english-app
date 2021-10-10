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
    const fetchData = () => {
        setIsLoading(true)
        fetch("/api/words/")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(response => setWords(response), setIsLoading(false))
            .catch(error => setError(true), setIsLoading(false))
    }
    useEffect(() => fetchData(), [])

    const addWord = (valueWord, valueTranslation) => {
        setIsLoading(true)
        fetch(`/api/words/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ english: valueWord, russian: valueTranslation, tags: [] })
        })
            .then(response => {
                if (response.ok) {
                    fetchData()
                } else {
                    throw new Error('Something went wrong...');
                }
            })
    }

    const deleteWord = (id) => {
        setIsLoading(true)
        fetch(`/api/words/${id}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                if (response.ok) {
                    fetchData()
                } else {
                    throw new Error('Something went wrong...');
                }
            })
    }

    const editWord = (id, valueWord, valueTranslation) => {
        fetch(`/api/words/${id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id: id, english: valueWord, russian: valueTranslation, tags: [], transcription: "ывс", tags_json: [] })
        })
            .then(response => {
                if (response.ok) {
                    fetchData()
                    window.location.reload()
                } else {
                    throw new Error('Something went wrong...');
                }
            })
    }
    return (
        <WordsContext.Provider value={{ words, isLoading, error, addWord, deleteWord, editWord }}>
            {props.children}
        </WordsContext.Provider>
    );
}

export default WordsAPI;