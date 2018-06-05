const TimerView = require('../views/timer_view.js');
const PubSub = require('../helpers/pub_sub.js');

const Timer = function(duration){
  this.duration = duration;
  this.currentTime = duration/1000;
  this.started = false;
  this.running = false;
}

Timer.prototype.startTimer = function () {
  PubSub.publish('TimerMode:time-starts', "Timer Started");
};

module.exports = Timer;
