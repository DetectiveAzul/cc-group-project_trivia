const TimerView = require('../views/timer_view.js');
const PubSub = require('../helpers/pub_sub.js');

const Timer = function(duration){
  this.duration = duration;
  this.currentTime = duration;
  this.timer = null;
  this.started = false;
  this.running = false;
}

Timer.prototype.startTimer = function () {
  this.timerTick();
};

Timer.prototype.timerTick = function () {
  PubSub.publish('TimerMode:time-runs', this.currentTime);
  this.timer = setTimeout(() => {
    this.currentTime --;
    if (this.stopTick()) {
      console.log('TIME STOP!');
      PubSub.publish('TimerModel:time-finished', 'Time Stop')
    } else {
      this.timerTick();
    }
  }, 1000);
};

Timer.prototype.stopTick = function () {
  return this.currentTime <= 0;
};

Timer.prototype.stopTimer = function() {
  console.log('TIME STOP!');
  this.currentTime = 0;
  clearTimeout(this.timer);
}

module.exports = Timer;
