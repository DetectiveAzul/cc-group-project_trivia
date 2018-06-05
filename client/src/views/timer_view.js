const Timer = require('../models/timer.js');
const PubSub = require('../helpers/pub_sub.js');

const TimerView = function(container){
  this.container = container;
  this.currentTime = 0;
}

TimerView.prototype.bindEvents = function () {
  PubSub.subscribe('TimerMode:time-starts', (evt) => {
    this.renderTimer();
  });
};

TimerView.prototype.renderTimer = function () {

};



module.exports = TimerView;
