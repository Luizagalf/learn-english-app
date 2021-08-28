import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header/Header';
import Wordlist from './components/Wordlist/Wordlist';
import Wordcards from './components/Wordcards/Wordcards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header></Header>
    <Wordlist></Wordlist>
    <Wordcards></Wordcards>
    <Footer></Footer>
    </>
  );
}

export default App;
