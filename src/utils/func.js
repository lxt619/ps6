const searchRhyming = async (searchInput, setDisplayWord, setWords) => {
  try {
    const response = await fetch(
      `https://api.datamuse.com/words?${new URLSearchParams({
        rel_rhy: searchInput,
      }).toString()}`
    );
    const data = await response.json();
    setDisplayWord(searchInput);
    setWords(data);
  } catch (error) {
    console.log(error);
  }
};

const searchSynonyms = async (searchInput, setDisplayWord, setWords) => {
  try {
    const response = await fetch(
      `https://api.datamuse.com/words?${new URLSearchParams({
        ml: searchInput,
      }).toString()}`
    );
    const data = await response.json();
    setDisplayWord(searchInput);
    setWords(data);
  } catch (error) {
    console.log(error);
  }
};

export { searchRhyming, searchSynonyms };
