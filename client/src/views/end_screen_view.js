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
  this.container.appendChild(statsViewContainer);
  const statsView = new StatsView(this.players, statsViewContainer);
  statsView.render();
  const button = this.createHomeButton();
  this.container.appendChild(button);
};


EndScreenView.prototype.createHeader = function () {
  const header = document.createElement('h1');
  header.textContent = 'insertText';
  this.container.appendChild(header);
  console.log('Hello World from createHeader');
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
