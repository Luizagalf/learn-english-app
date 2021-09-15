import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/app.module.scss";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Wordlist from './components/Wordlist/Wordlist';
import Slider from './components/Slider/Slider';
import Wordcards from './components/Wordcards/Wordcards';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Header/>
      <div className={styles.main}>
                <Switch>
                    <Route exact path="/game" component={() => <Slider/>} />
                    <Route exact path="/wordlist" component={() => <Wordlist/>} />
                    <Route exact path="/allwords" component={() => <Wordcards/>} />
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
