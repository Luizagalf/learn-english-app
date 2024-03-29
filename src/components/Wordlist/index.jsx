import styles from "./wordlist.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Wordlistitem from "./Wordlistitem/index";
import Wordlistnewitem from "./Wordlistnewitem/index";
import LoadedComponent from "../LoadedComponent/index";

const Wordlist = ({
  words,
  removeWord,
  addWord,
  editWord,
  isLoading,
  error
}) => {
  return (
    <LoadedComponent isLoading={isLoading} error={error}>
      <div className={styles.list}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th colSpan="3" className={styles.title}>
                Word list
              </th>
            </tr>
            <tr>
              <th>English</th>
              <th>Russian</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Wordlistnewitem addWord={addWord} />
            {words.map((word) => (
              <Wordlistitem
                removeWord={removeWord}
                editWord={editWord}
                key={word.id}
                id={word.id}
                english={word.english}
                russian={word.russian}
              />
            ))}
          </tbody>
        </table>
      </div>
    </LoadedComponent>
  );
};

export default Wordlist;
