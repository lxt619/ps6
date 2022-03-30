import React from "react";

const Item = ({ item, saveWord }) => {
  return (
    <li className="py-1">
      <span>
        {item.word} {item?.numSyllables && `(${item?.numSyllables} syllable)`}
      </span>{" "}
      <button
        className="btn btn-outline-success"
        onClick={() => saveWord(item.word)}
      >
        (save)
      </button>
    </li>
  );
};

export default Item;
