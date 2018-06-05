const PlayerScoreView = require('./player_score_view.js');

const StatsView = function (players, container) {
  this.players = players;
  this.container = container;
};

StatsView.prototype.render = function () {
  this.players.forEach((player) => {
    this.createPlayerStats(player);
  });
};

StatsView.prototype.createPlayerStats = function (player) {
  const statsContainer = document.createElement('div');
  const playerStats = new PlayerScoreView(player, statsContainer);
  this.container.appendChild(statsContainer);
  playerStats.render();
};




module.exports = StatsView;
