const StatsView = require('./stats_view.js');

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
};


EndScreenView.prototype.createHeader = function () {
  const header = document.createElement('h1');
  header.textContent = 'insertText';
  this.container.appendChild(header);
  console.log('Hello World from createHeader');
};



//iterate thru player array



module.exports = EndScreenView;
