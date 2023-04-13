import React from "react";

const EmojiComp = ({ onClick, style, emojicode }) => {
  return (
    <div onClick={onClick} style={style}>
      {emojicode}
    </div>
  );
};

export default EmojiComp;
