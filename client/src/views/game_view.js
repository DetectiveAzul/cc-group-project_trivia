const PubSub = require('../helpers/pub_sub.js');
const PlayersContainerView = require('./player_container_view.js');
const QuestionMainContainerView = require('./question_main_container_view.js');

const GameView = function(players, question, container){
  this.players = players;
  this.question = question
  this.container = container;
}

GameView.prototype.renderQuestion = function () {
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');
  const questionMainContainerView = new QuestionMainContainerView(this.question, questionContainer);
  questionMainContainerView.render();
};

GameView.prototype.renderPlayers = function() {
  //This will divide players on two divs for styling purposes
  const playerContainer = document.createElement('div');
  playerContainer.classList.add('player-container');
  this.container.appendChild(playerContainer);
  const playersContainerView = new PlayersContainerView(this.players, playerContainer);
  playersContainerView.render();

};

module.exports = GameView;
