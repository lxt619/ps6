const searchRhyming = async (
  searchInput,
  setDisplayWord,
  setWords,
  setLoading
) => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://api.datamuse.com/words?${new URLSearchParams({
        rel_rhy: searchInput,
      }).toString()}`
    );
    const data = await response.json();
    setDisplayWord(searchInput);
    setWords(
      data.sort((a, b) =>
        a.numSyllables > b.numSyllables
          ? 1
          : b.numSyllables > a.numSyllables
          ? -1
          : 0
      )
    );
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

const searchSynonyms = async (
  searchInput,
  setDisplayWord,
  setWords,
  setLoading
) => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://api.datamuse.com/words?${new URLSearchParams({
        ml: searchInput,
      }).toString()}`
    );
    const data = await response.json();
    setDisplayWord(searchInput);
    setWords(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

export { searchRhyming, searchSynonyms };
