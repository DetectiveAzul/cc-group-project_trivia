const PubSub = require('../helpers/pub_sub.js');

const QuestionView = function(questionText, container) {
  this.index = index;
  this.questionText = questionText;
  this.container = container;
}

QuestionView.prototype.render = function () {
  const questionElement = document.createElement('p');
  questionElement.textContent = this.questionText;
  this.container.appendChild(questionElement);
};

module.exports = QuestionView;
