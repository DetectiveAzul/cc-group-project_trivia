const PubSub = require('../helpers/pub_sub.js');

const PlayerScoreView = function(player, container) {
  this.player = player;
  this.container = container;
};

PlayerScoreView.prototype.render = function () {
  this.addName();
  this.percentageScore();
};

PlayerScoreView.prototype.addName = function () {
  const newName = document.createElement('h4');
  newName.textContent = this.player.name;
  this.container.appendChild(newName);
};

PlayerScoreView.prototype.percentageScore = function () {
  const percentageScore = document.createElement('p');
  const percentage = this.calculatePercentage;
  percentageScore.textContent = percentage;
  this.container.appendChild(percentageScore);
};

PlayerScoreView.prototype.calculatePercentage = function () {
  const totalAnswer = this.player.questionsAnswered.length;
  const totalCorrect = this.player.correctQuestionsAnswered.length;
  return (totalCorrect * 100) / totalAnswer;
};

//play again
module.exports = PlayerScoreView;
