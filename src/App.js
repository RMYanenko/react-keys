import React from "react";
import "./App.css";

export default function App() {
  const list = [
    { id: 1, word: "Animals" },
    { id: 2, word: "Anime" },
    { id: 3, word: "Anti-Malware" },
    { id: 4, word: "Art Design" },
    { id: 5, word: "Books" },
    { id: 6, word: "Business" },
    { id: 7, word: "Calendar" },
    { id: 8, word: "Cloud Storage" },
    { id: 9, word: "File Sharing" },
    { id: 10, word: "Animals" },
    { id: 11, word: "Continuous Integration" },
    { id: 12, word: "Cryptocurrency" },
  ];

  return (
    <div>
      Some List:
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.word}</li>;
        })}
      </ul>
    </div>
  );
}
