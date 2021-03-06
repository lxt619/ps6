// Datamuse API: https://www.datamuse.com/api/

import { useState } from "react";
import Button from "./components/Button";
import Item from "./components/Item";
import { searchRhyming, searchSynonyms } from "./utils/func";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [displayWord, setDisplayWord] = useState("");
  const [words, setWords] = useState([]);
  const [savedWords, setSavedWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const saveWord = (word) => {
    setSavedWords((prev) => [...prev, word]);
  };

  return (
    <main className="container">
      <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
      <h2>https://github.com/lxt619/ps6</h2>
      <div className="row">
        <div className="col">
          Saved words: <span id="saved_words">{savedWords.join(", ")}</span>
        </div>
      </div>
      <div className="row">
        <div className="input-group col">
          <input
            className="form-control"
            type="text"
            placeholder="Enter a word"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button
            className="btn btn-primary"
            onClick={() =>
              searchRhyming(searchInput, setDisplayWord, setWords, setLoading)
            }
          >
            Show rhyming words
          </Button>
          <Button
            className="btn btn-secondary"
            onClick={() =>
              searchSynonyms(searchInput, setDisplayWord, setWords, setLoading)
            }
          >
            Show synonyms
          </Button>
        </div>
      </div>
      {displayWord && (
        <div className="row">
          <h2 className="col" id="output_description">
            Words with a meaning similar to {displayWord}:
          </h2>
        </div>
      )}
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="container-md row">
          <ul id="word_output" className="col">
            {words.length === 0 ? (
              <h4>No rhymes found</h4>
            ) : (
              words.map((item, index) => {
                return <Item key={index} item={item} saveWord={saveWord} />;
              })
            )}
          </ul>
        </div>
      )}
    </main>
  );
}

export default App;
