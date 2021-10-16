import {makeAutoObservable} from 'mobx';

class WordsStore {
    words = []
    error = null
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }
    
    fetchData = () => {
        this.isLoading = true
        return fetch("/api/words/")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(response => this.words = response, this.isLoading = false)
            .catch(error => this.error = true, this.isLoading = false)
    }

    addWord = (id, valueWord, valueTranslation) => {
        this.isLoading = true
        fetch(`/api/words/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id: id, english: valueWord, russian: valueTranslation})
        })
            .then(response => {
                if (response.ok) {
                    this.fetchData()
                } else {
                    throw new Error('Something went wrong...');
                }
            })
    }

    deleteWord = (id) => {
        this.isLoading = true
        fetch(`/api/words/${id}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                if (response.ok) {
                    this.fetchData()
                    window.location.reload()
                } else {
                    throw new Error('Something went wrong...');
                }
            })
    }

    editWord = (id, valueWord, valueTranslation) => {
        fetch(`/api/words/${id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id: id, english: valueWord, russian: valueTranslation, tags: [], transcription: "", tags_json: [] })
        })
            .then(response => {
                if (response.ok) {
                this.fetchData()
                    window.location.reload()
                } else {
                    throw new Error('Something went wrong...');
                }
            })
    }
}

export default WordsStore