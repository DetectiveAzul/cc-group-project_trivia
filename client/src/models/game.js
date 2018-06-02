const Player = require('./player');
const Question = require('./question');
const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');
const shuffle = require('shuffle-array');

const Game = function(players, questions){
  this.players = players;
  this.questions = questions;
  this.currentQuestion = 0;
  this.currentPlayer = 0;
}

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
  }else{
    this.currentPlayer = 0;
  }
};

Game.prototype.nextQuestion = function () {
  if(this.currentQuestion < this.length-1){
    this.currentQuestion++;
  }else{
    this.currentQuestion = 0;
  }
};

module.exports = Game;
