const Player = require('./player');
const Question = require('./question');
const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');
const shuffle = require('shuffle-array');
const EndScreenView = require('../views/end_screen_view.js');

const Game = function(players=[], questions=[]){
  this.players = players;
  this.questions = questions;
  this.currentQuestion = 0;
  this.currentPlayer = 0;
  this.gameEnded = false;
}

Game.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:player-number', (evt) => {
    this.createPlayers(evt.detail);
    console.log(this.players);
  });
  PubSub.subscribe('QuestionData:Questions-ready', (evt) => {
    this.questions = evt.detail;
    console.log(this.questions);
    this.renderGame();
  });
  PubSub.subscribe('AnswerView:answer-selected', (evt) => {
    // if (this.isLastPlayer()) {
    //   PubSub.publish('GameModel:end-of-round', this.questions[this.currentQuestion].correctAnswer);
    // };

    console.log(`${this.players[this.currentPlayer].name} selects:`, evt.detail);
    this.handleAnswerClick(evt.detail);
  });

};

Game.prototype.renderGame = function() {
  if (!this.gameEnded) {
    const game = {
      players: this.players,
      question: this.questions[this.currentQuestion]
    };
    PubSub.publish('Game-ready', game );
  };
};


// Conections with the views

Game.prototype.handleAnswerClick = function (answerIndex) {
  this.playerAnswer(answerIndex);
  this.nextPlayer();
  // this.renderGame();
};



// Game model logic

Game.prototype.createPlayers = function (numberOfPlayers) {
  for (var i = 0; i < numberOfPlayers; i++) {
    const newPlayer = new Player(`Player ${i+1}`);
    this.players.push(newPlayer);
  };
};



// For the current player we check if the argument passed to this method is
// the correct one, using the Question object's method isCorrectAnswer. Depending
// on this we pass the currentQuestion to one of the currentPlayer's methods to
// be stored.
Game.prototype.playerAnswer = function (answer) {
  if(this.questions[this.currentQuestion].isCorrectAnswer(answer)){
    this.players[this.currentPlayer].correctAnswer(this.questions[this.currentQuestion]);
  }else{
    this.players[this.currentPlayer].incorrectAnswer(this.questions[this.currentQuestion]);
  }
};

// Method shuffles existing array of players, so we can randomise which player
// goes first.
Game.prototype.shufflePlayers = function () {
  this.players = shuffle(this.players);
};



// We add 1 to currentPlayer (in reference to the players index), making sure
// to loop back to zero if the new number would be higher than the array's length
Game.prototype.nextPlayer = function () {
  if(this.currentPlayer < this.players.length-1){
    this.currentPlayer++;
    this.renderGame();
  }else{
    this.currentPlayer = 0;
    this.nextRound();
  };
};

// Next Round Logic
Game.prototype.nextRound = function () {
  this.displayCorrectAnswer();
  this.shufflePlayers();
  document.querySelector('.correct-answer').style.background = 'green';
  setTimeout(() => {
    this.nextQuestion();
    this.renderGame();
  }, 1000);
};

// Advances currentQuestion index by one, or resets it after the last uqestion
Game.prototype.nextQuestion = function () {
  if(this.currentQuestion < this.questions.length-1){
    this.currentQuestion++;
  }else{
    this.gameEnded = true;
    this.endGame();
  };
};

Game.prototype.isLastPlayer = function() {
  return (this.currentPlayer === (this.players.length - 1))
}

Game.prototype.getCorrectAnswer = function() {
  return this.questions[this.currentQuestion].correctAnswer;
}

Game.prototype.displayCorrectAnswer = function() {
  // alert(`Correct answer was: ${this.getCorrectAnswer()}`);
  PubSub.publish('GameModel:end-of-round', this.getCorrectAnswer());

}

Game.prototype.endGame = function () {
  const body = document.querySelector('body');
  body.innerHTML = '';
  const endScreenView = new EndScreenView(this.players, body);
  endScreenView.render();
};

module.exports = Game;
