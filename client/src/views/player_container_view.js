const PubSub = require('../helpers/pub_sub.js');
const PlayerView = require('./player_view.js');

const PlayersContainerView = function(players, container){
  this.players = players;
  this.playerViews = [];
  this.container = container;
}

PlayersContainerView.prototype.render = function () {
  this.playerViews = [];
  for (var i = 0; i < this.players.length; i++) {
    const playerContainer = document.createElement('div');
    playerContainer.classList.add('player');
    playerContainer.classList.add(`${this.players[i].className}`);
    const playerView = new PlayerView(this.players[i], playerContainer);
    this.container.appendChild(playerContainer);
    playerView.render();
    this.playerViews.push(playerView);
  }
};

module.exports = PlayersContainerView;
