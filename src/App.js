import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./app.module.scss";

import Header from './components/Header/Header';
import Wordlist from './components/Wordlist/Wordlist';
import Wordcards from './components/Wordcards/Wordcards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.row}>
        <div className={styles.col}>
          <Wordlist></Wordlist>
          <Wordcards></Wordcards>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
