const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const quizQuestions = require("./questions");

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.get("/question/choices/:id", (req, res) => {
  const id = req.params.id;
  if (id < 101 && id >= 0) {
    const quiz = quizQuestions[id];
    res.status(200).send(quiz.choices);

  } else {
    res.status(400).send("Please put in a number 0-9.");
  }
});

app.get("/question/:id", (req, res) => {
  const id = req.params.id;
  if (id < 101 && id >= 0) {
    const quiz = quizQuestions[id];
    res.status(200).send(quiz.question);

  } else {
    res.status(400).send("Please put in a number 0-9.");
  }
});

app.post('/question/:id', (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;
  res.send(quizQuestions[id].mul.toLowerCase() === answer.toLowerCase());
});

app.get('/bank', (req, res) => {
  const questions = [];

  for (let i = 0; i < 101; i++) {
    const questionObj = {
      id: quizQuestions[i].id,
      question: quizQuestions[i].question
    };
    questions.push(questionObj);
  }
  res.json(questions);
});

const port = process.env.PORT || 3007;
app.listen(port, () => console.log(`Listening on ${port}!`));
