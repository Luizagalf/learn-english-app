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

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className={styles.main}>
                <Switch>
                    <Route exact path="/wordlist" component={() => <Wordlist/>} />
                    <Route exact path="/slider" component={() => <Slider/>} />
                    <Route path="/home">
                      <div className={styles.row}>
                        <div className={styles.col}>
                          <Wordlist/>
                          <Slider/>
                        </div>
                      </div>
                    </Route>
                    <Route>
                        Ничего не найдено!
                    </Route>
                </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
