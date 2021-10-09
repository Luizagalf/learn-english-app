import styles from "./styles/app.module.scss";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header/index';
import Wordlist from './components/Wordlist/index';
import Slider from './components/Slider/index';
import Wordcards from './components/Wordcards/index';
import Footer from './components/Footer/index';
import Error from './components/Error/index';
import WordsAPI from './wordsAPI';

function App() {
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Header/>
      <div className={styles.main}>
      <WordsAPI>
                <Switch>
                    <Route exact path="/game" component={() => <Slider/>} />
                    <Route exact path="/wordlist" component={() => <Wordlist/>} />
                    <Route exact path="/allwords" component={() => <Wordcards/>} />
                    <Route exact path="/" component={() => <Wordlist/>} />
                    <Route component={() => <Error/>}/>
                </Switch>
          </WordsAPI>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
