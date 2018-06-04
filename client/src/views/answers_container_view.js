const PubSub = require('../helpers/pub_sub.js');
const AnswerView = require('./answer_view.js');

const AnswersContainerView = function(answers){
  this.answers = answers;
  this.answerViews = [];
  this.container = container;
}

AnswersContainerView.prototype.createContainer = function(){
  const container = document.createElement('div');
  this.container = container;
}

AnswersContainerView.prototype.render = function () {
  createContainer();
  this.answerViews = [];
  for (var i = 0; i < this.answers.length; i++) {
    const answerContainer = document.createElement('div');
    const answerView = new AnswerView(i, this.answers[i], answerContainer);
    answerViews.render();
    this.container.appendChild(answerView);
    this.answerViews.push(answerView);
  }
};
