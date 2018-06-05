const PlayerScoreView = require('./player_score_view.js');

const StatsView = function (players, container) {
  this.players = players;
  this.container = container;
};

StatsView.prototype.render = function () {
  this.players.forEach((player, index) => {
    this.createPlayerStats(player, index);
  });
};

StatsView.prototype.createPlayerStats = function (player, index) {
  const statsContainer = document.createElement('div');
  statsContainer.classList.add('player', `p-${index+1}`);
  const playerStats = new PlayerScoreView(player, statsContainer);
  this.container.appendChild(statsContainer);
  playerStats.render();
};




module.exports = StatsView;
