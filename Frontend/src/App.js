import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; 

const API_HOST = "http://localhost:3007";

function App() {
  const [num, setNum] = useState("");
  const [message, setMessage] = useState("");
  const [choices, setChoices] = useState("");
  const [correct, setCorrect] = useState("");
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [right, setRight] = useState(0);
  const [use, setUse] = useState(0);
  let qn = [];

  useEffect(() => {
    handleButtonClick();
  }, []);

  useEffect(() => {
    if (num === "") return;

    axios.get(`${API_HOST}/question/${num}`)
      .then((res) => setMessage(res.data))
      .catch((error) => console.log(error));
  }, [num]);

  useEffect(() => {
    if (num === "") return;
    axios.get(`${API_HOST}/question/choices/${num}`)
      .then((res) => setChoices(res.data));
  }, [message, num]);

  const handleButtonClick = () => {
    let q = Math.floor(Math.random() * 101)
    
    qn.push(q)
    setCorrect("")
    setNum(q);
    setUse(0);
  };

  const updateScore = () => {
    if (count === 0) {
      setScore(0);
    } else {
      setScore(Math.round((right / count) * 100));
    }
  };

  const handleSubmitAnswer = (answer) => {
    axios.post(`${API_HOST}/question/${num}`, { answer })
      .then((res) => {
        if (res.data) {
          if (use === 0) {
            setRight(prevRight => prevRight + 1);
            setUse(1);
          }
          handleButtonClick()
        } else {
          setCorrect("Incorrect answer.");
          setUse(1);
        }
        setCount(prevCount => prevCount + 1);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    updateScore();
  }, [right, count]);

  return (
    <div>
      <h1>Quiz</h1>
      <button onClick={handleButtonClick}>New Question</button>
      <h1>{message}</h1>
      <h2>{correct}</h2>
      {choices.split(",").map(e => (
        <button className="choice" key={e} onClick={() => handleSubmitAnswer(e.split(":")[0].trim())}>
          {e}
        </button>
      ))}
      <h3>Percent Score</h3>
      <h2>{score}%</h2>
    </div>
  );
}

export default App;
