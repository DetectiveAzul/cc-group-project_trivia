const shuffle = require('shuffle-array');

const Question = function (questionData) {
  this.questionText = questionData['question'];
  this.category = questionData['category'];
  this.difficulty = questionData['difficulty'];
  this.correctAnswer = questionData['correct_answer'];
  this.allAnswers = questionData['incorrect_answers'];
  this.allAnswers.push(this.correctAnswer);
};

//npm install shuffle-array
Question.prototype.shuffleAnswers = function() {
  this.allAnswers = shuffle(this.allAnswers);
};

module.exports = Question;
