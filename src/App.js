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
  const [words, setWords] = useState([" "])
    useEffect(() => {
      const savedWords = JSON.parse(localStorage.getItem('words'));
      if (savedWords) {
          setWords(savedWords)
      } else {
              setWords(jsonWords)
            }
  }, [])

    useEffect(() => {
        localStorage.setItem('words', JSON.stringify(words));
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
        localStorage.setItem('words', JSON.stringify(words))
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
                    <Route exact path="/game" component={() => <Slider words={words}/>} />
                    <Route exact path="/wordlist" component={() => <Wordlist words={words} removeWord={removeWord} editWord={editWord} addWord={addWord} />} />
                    <Route exact path="/allwords" component={() => <Wordcards words={words}/>} />
                    <Route exact path="/" component={() => <Wordlist/>} />
                    <Route component={() => <Error/>}/>
                </Switch>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
