const shuffle = require('shuffle-array');
const he = require('he');

const Question = function (questionData) {
  this.questionText = questionData['question'];
  this.category = questionData['category'];
  this.difficulty = questionData['difficulty'];
  this.correctAnswer = questionData['correct_answer'];
  this.allAnswers = questionData['incorrect_answers'];
  this.allAnswers.push(this.correctAnswer);
  this.decodeStrings();
};

Question.prototype.isCorrectAnswer = function (answer) {
  return (this.allAnswers[answer] === this.correctAnswer);
};

//npm install shuffle-array
Question.prototype.shuffleAnswers = function() {
  this.allAnswers = shuffle(this.allAnswers);
};

Question.prototype.decodeStrings = function () {
  this.allAnswers = this.allAnswers.map((answer) => he.decode(answer));
  this.correctAnswer = he.decode(this.correctAnswer);
  this.questionText = he.decode(this.questionText);
};

module.exports = Question;
