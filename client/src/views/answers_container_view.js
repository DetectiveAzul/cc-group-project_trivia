const PubSub = require('../helpers/pub_sub.js');
const AnswerView = require('./answer_view.js');

const AnswersContainerView = function(answers, container){
  this.answers = answers;
  this.answerViews = [];
  this.container = container;
}

AnswersContainerView.prototype.render = function () {
  this.answerViews = [];
  for (var i = 0; i < this.answers.length; i++) {
    const answerContainer = document.createElement('div');
    answerContainer.classList.add('answer');
    const answerView = new AnswerView(i, this.answers[i], answerContainer);
    this.container.appendChild(answerContainer);
    answerView.render();
    this.answerViews.push(answerView);
  }
};

module.exports = AnswersContainerView;
