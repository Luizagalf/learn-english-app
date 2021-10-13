import styles from "./styles/app.module.scss";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import React, { useState, useEffect } from "react";


import Header from './components/Header';
import Wordlist from './components/Wordlist/index';
import Slider from './components/Slider/index';
import Wordcards from './components/Wordcards/index';
import Footer from './components/Footer/index';
import Error from './components/Error/index';
import jsonWords from "./jsonWords";

function App() {
  const [words, setWords] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const getWords = () => {localStorage.setItem('words', JSON.stringify(words))}
  const savedWords = JSON.parse(localStorage.getItem('words'))
      useEffect(() => {
      if (savedWords) {
          setWords(savedWords)
      } else {
              setWords(jsonWords)
            }
  }, [])

    useEffect(() => {
      getWords()
    }, [words]);

    const removeWord = (id) => {
        setWords(words.filter(word => word.id !== id))
    }

    const editWord = (id, valueWord, valueTranslation) => {
        for (let i = 0; i < words.length; i++) {
            if (words[i].id === id) {
                words[i].english = valueWord
                words[i].russian = valueTranslation
            }
        }
        getWords()
    }

    const addWord = (id, valueWord, valueTranslation) => {
        setWords([...words, { id: id, english: valueWord, russian: valueTranslation }]);
    };

  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Header/>
      <div className={styles.main}>
                <Switch>
                    <Route exact path="/game" component={() => <Slider words={words} isLoading={isLoading} error={error}/>} />
                    <Route exact path="/wordlist" component={() => <Wordlist words={words} removeWord={removeWord} editWord={editWord} addWord={addWord} isLoading={isLoading} error={error}/>} />
                    <Route exact path="/allwords" component={() => <Wordcards words={words} isLoading={isLoading} error={error}/>} />
                    <Route exact path="/" component={() => <Wordlist words={words} removeWord={removeWord} editWord={editWord} addWord={addWord} isLoading={isLoading} error={error}/>} />
                    <Route component={() => <Error/>}/>
                </Switch>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
