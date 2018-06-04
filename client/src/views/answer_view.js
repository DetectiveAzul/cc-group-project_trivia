const PubSub = require('../helpers/pub_sub.js');

const AnswerView = function(index, answerText, element) {
  this.index = index;
  this.answerText = answerText;
  this.element = element;
}

AnswerView.prototype.render = function () {
  const answerElement = document.createElement('p');
  answerElement.textContent = this.answerText;
  this.element.appendChild(answerElement);
  this.element.addEventListener('click', (event) => {
    this.handleClick();
  });

};

AnswerView.prototype.handleClick = function () {
   PubSub.publish('AnswerView:answer-selected', this.answerText);
   console.log(this.answerText);
};
