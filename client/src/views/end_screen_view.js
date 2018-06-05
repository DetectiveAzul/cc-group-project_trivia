const StatsView = require('./stats_view.js');

const EndScreenView = function (players) {
  this.players = players;
  this.container = document.querySelector('body');
};

EndScreenView.prototype.render = function (){
  this.createHeader();
  const statsViewContainer = document.createElement('div');
  const statsView = new StatsView(players, statsViewContainer);
  this.container.appendChild(statsViewContainer);
  statsViewContainer.render();
};


EndScreenView.prototype.createHeader = function () {
  const header = document.createElement('h1');
  header.textContent = 'insertText';
  this.container.appendChild(header);
};



//iterate thru player array



module.exports = EndScreenView;
