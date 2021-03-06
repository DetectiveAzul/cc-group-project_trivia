const PubSub = require('../helpers/pub_sub.js');
const PlayersContainerView = require('./player_container_view.js');
const QuestionMainContainerView = require('./question_main_container_view.js');
const TimerView = require('./timer_view.js');

const GameView = function(){
  this.players = null;
  this.question = null;
  this.container = null;
  this.currentPlayer = null;
}

GameView.prototype.bindEvents = function () {
  PubSub.subscribe('Game-ready', (evt) => {
    this.players = evt.detail.players;
    this.question = evt.detail.question;
    this.currentPlayer = evt.detail.currentPlayer;
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

  //Add the header div
  this.renderTimer(body);

  //Create own div and append it
  this.container = document.createElement('div');
  this.container.classList.add('main-container');
  body.appendChild(this.container);

};

GameView.prototype.renderTimer = function (parent) {
  const newContainer = document.createElement('div');
  newContainer.classList.add('header');
  parent.appendChild(newContainer);
  const timerView = new TimerView(newContainer);
  timerView.bindEvents();
};

GameView.prototype.renderQuestion = function () {
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');
  this.container.appendChild(questionContainer);
  const questionMainContainerView = new QuestionMainContainerView(this.question, questionContainer);
  questionMainContainerView.render();
};

GameView.prototype.renderPlayers = function() {
  const playerContainer = document.createElement('div');
  playerContainer.classList.add('player-container');
  this.container.appendChild(playerContainer);
  const playersContainerView = new PlayersContainerView(this.players, playerContainer, this.currentPlayer);
  playersContainerView.render();
};

module.exports = GameView;
