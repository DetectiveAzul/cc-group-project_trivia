const PubSub = require('../helpers/pub_sub.js');

const PlayerView = function(player, container) {
  this.player = player;
  this.container = container;
}

PlayerView.prototype.render = function () {
  const newElement = document.createElement('p');
  newElement.textContent = this.player.name;
  this.container.appendChild(newElement);
};

module.exports = PlayerView;
