const PubSub = require('../helpers/pub_sub.js');
const AnswersContainerView = require('./answers_container_view.js');
const QuestionView = require('./question_view.js');

const QuestionMainContainerView = function(question, container){
  this.question = question;
  this.answers = question.allAnswers;
  this.container = container;
}

QuestionMainContainerView.prototype.render = function () {
  questionElement = document.createElement('div');
  questionElement.classList.add('question');

  answersElement = document.createElement('div');
  answersElement.classList.add('list-of-answer');

  this.container.appendChild(questionElement);
  this.container.appendChild(answersElement);

  const questionView = new QuestionView(this.question.questionText, questionElement);
  const answersContainerView = new AnswersContainerView(this.answers, this.question.correctAnswer, answersElement);

  questionView.render();
  answersContainerView.render();

};

module.exports = QuestionMainContainerView;
