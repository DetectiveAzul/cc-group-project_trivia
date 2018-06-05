const PubSub = require('../helpers/pub_sub.js');
const PlayersContainerView = require('./player_container_view.js');
const QuestionMainContainerView = require('./question_main_container_view.js');

const GameView = function(){
  this.players = null;
  this.question = null;
  this.container = null;
}

GameView.prototype.bindEvents = function () {
  PubSub.subscribe('Game-ready', (evt) => {
    this.players = evt.detail.players;
    this.question = evt.detail.question;
    this.render();
  });
};

GameView.prototype.render = function () {
  this.createOwnElement();
  this.renderPlayers();
  this.renderQuestion();
};

GameView.prototype.createOwnElement = function() {
  //Find and delete the body
  const body = document.querySelector('body');
  body.innerHTML = '';

  //Create own div and append it
  this.container = document.createElement('div');
  this.container.classList.add('main-container');
  body.appendChild(this.container);

};

GameView.prototype.renderQuestion = function () {
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');
  this.container.appendChild(questionContainer);
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
  //TODO: Refactor this to divide players on two divs
};

module.exports = GameView;
