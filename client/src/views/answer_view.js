const PubSub = require('../helpers/pub_sub.js');

const AnswerView = function(index, answerText, container) {
  this.index = index;
  this.answerText = answerText;
  this.container = container;
}

AnswerView.prototype.render = function () {
  const answerContainer = document.createElement('p');
  answerContainer.textContent = this.answerText;
  this.container.appendChild(answerContainer);
  this.container.addEventListener('click', (event) => {
    this.handleClick();
  });

};

AnswerView.prototype.handleClick = function () {
   PubSub.publish('AnswerView:answer-selected', this.index);
};

module.exports = AnswerView;
