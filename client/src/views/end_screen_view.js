const StatsView = require('./stats_view.js');
const FormView = require("./form_view.js");

const EndScreenView = function (players, body) {
  this.players = players;
  this.container = body;
  // this.container = document.querySelector('body');
};

EndScreenView.prototype.render = function (){
  this.createHeader();
  const statsViewContainer = document.createElement('div');
  statsViewContainer.classList.add('line')
  this.container.appendChild(statsViewContainer);
  const statsView = new StatsView(this.players, statsViewContainer);
  statsView.render();
  const button = this.createHomeButton();
  this.container.appendChild(button);
};


EndScreenView.prototype.createHeader = function () {
  const header = document.createElement('h1');
  header.id = 'title';
  header.textContent = this.getWinner();
  this.container.appendChild(header);
};

EndScreenView.prototype.getWinner = function() {
  console.log(this.players);
  this.sortByAnswers();
  console.log(this.players);
  return `${this.players[0].name} is the Winner!`;
}

EndScreenView.prototype.sortByAnswers = function () {
  return this.players.sort(function(a, b) { return b.correctQuestionsAnswered.length - a.correctQuestionsAnswered.length });
};

EndScreenView.prototype.createHomeButton = function () {
  const button = document.createElement('input');
  button.type = 'button';
  button.value = 'Play Again!'
  button.addEventListener('click', function() {
    window.location.reload();
  });
  return button;
};



module.exports = EndScreenView;
