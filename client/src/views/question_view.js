const PubSub = require('../helpers/pub_sub.js');

const QuestionView = function(questionText, container) {
  this.questionText = questionText;
  this.container = container;
}

QuestionView.prototype.render = function () {
  const questionElement = document.createElement('h1');
  questionElement.textContent = this.questionText;
  this.container.appendChild(questionElement);
};

module.exports = QuestionView;
