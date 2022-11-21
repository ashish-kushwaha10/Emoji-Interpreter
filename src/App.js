import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤩": "surprised",
  "😴": "sleeping",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad"
};

const emojiArr = Object.keys(emojiDictionary); // it will return the array of key(emoji)

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [emojiValue, setEmojiValue] = useState("");
  const onChangeHandler = (event) => {
    let inpEmoji = event.target.value;
    setEmoji(inpEmoji);

    if (inpEmoji in emojiDictionary) {
      // works on json
      console.log(emojiDictionary[inpEmoji]);
      setEmojiValue(emojiDictionary[inpEmoji]);
    } else {
      setEmojiValue("please enter correct emoji!!!");
    }
  };
  const onClickHandler = (input) => {
    setEmojiValue(emojiDictionary[input]);
  };
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <br />
      <input onChange={onChangeHandler} value={emoji} />
      <h2>{emoji}</h2>
      <h2>{emojiValue}</h2>

      <h1>
        {emojiArr.map((emoji) => {
          return <span onClick={() => onClickHandler(emoji)}>{emoji}</span>;
        })}
      </h1>
    </div>
  );
}
