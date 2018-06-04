const PubSub = require('../helpers/pub_sub.js');
const AnswersContainerView = require('./answers_container_view.js');
const QuestionView = require('./question_view.js');

const QuestionMainContainerView = function(question, container){
  this.question = question;
  this.answers = question.allAnswers;
  this.container = container;
}

AnswersContainerView.prototype.render = function () {
  questionElement = document.createElement('div');
  questionElement.classList.add('question');

  answersElement = document.createElement('div');
  answersElement.classList.add('list-of-answer');

  const questionView = new QuestionView(this.question.questionText, questionElement);
  const answersContainerView = new AnswerContainerView(this.answers, answersElement);

  questionView.render();
  answersContainerView.render();

};
