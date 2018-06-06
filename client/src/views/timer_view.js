const Timer = require('../models/timer.js');
const PubSub = require('../helpers/pub_sub.js');

const TimerView = function(container){
  this.container = container;
}

TimerView.prototype.bindEvents = function () {
  PubSub.subscribe('TimerMode:time-runs', (evt) => {
    this.renderTimer(evt.detail);
  });
};

TimerView.prototype.renderTimer = function (currentTime) {
  this.container.innerHTML = ''
  const headerContainer = document.createElement('h1');
  headerContainer.textContent = `${currentTime} seconds`
  this.container.append(headerContainer);
};



module.exports = TimerView;
