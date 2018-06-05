const TimerView = require('../views/timer_view.js')

const Timer = function(duration){
  this.duration = duration;
  this.running = true;
  this.currentSecond = duration / 1000;
}

Timer.prototype.bindEvents = function () {
  PubSub.publish('Timer:current-second', this.currentSecond);
};

Timer.prototype.tick = function () {
   const timer = setInterval(this.updateSecond(), 1000);
};

Timer.prototype.updateSecond = function () {
  if (!this.running) clearInterval(timer);
  this.duration -= 1000;
  if(this.currentSecond <= 0) this.running = false;
  this.currentSecond = this.duration / 1000;
};

module.exports = Timer;
