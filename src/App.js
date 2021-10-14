import styles from "./styles/app.module.scss";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import {observer, inject} from "mobx-react";

import Header from './components/Header';
import Wordlist from './components/Wordlist/index';
import Slider from './components/Slider/index';
import Wordcards from './components/Wordcards/index';
import Footer from './components/Footer/index';
import Error from './components/Error/index';
import {toJS} from 'mobx';

const App = inject(['wordStore'])(observer(({ wordStore }) => {
  useEffect(() => wordStore.fetchData(), [])
  console.log(toJS(wordStore.words))

  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Header/>
      <div className={styles.main}>
                <Switch>
                    <Route exact path="/game" component={() => <Slider words={wordStore.words} isLoading={wordStore.isLoading} error={wordStore.error}/>} />
                    <Route exact path="/wordlist" component={() => <Wordlist words={wordStore.words} removeWord={wordStore.deleteWord} editWord={wordStore.editWord} addWord={wordStore.addWord} isLoading={wordStore.isLoading} error={wordStore.error}/>} />
                    <Route exact path="/allwords" component={() => <Wordcards words={wordStore.words} isLoading={wordStore.isLoading} error={wordStore.error}/>} />
                    <Route exact path="/" component={() => <Wordlist words={wordStore.words} removeWord={wordStore.deleteWord} editWord={wordStore.editWord} addWord={wordStore.addWord} isLoading={wordStore.isLoading} error={wordStore.error}/>} />
                    <Route component={() => <Error/>}/>
                </Switch>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}))

export default App;
