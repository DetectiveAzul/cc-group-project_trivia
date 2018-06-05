const Timer = require('../models/timer.js');

const TimerView = function(container){
  this.container = container;
}

TimerView.prototype.bindEvents= function () {
  PubSub.subscribe('Timer:current-second', )
};

TimerView.prototype.render = function () {
  const timeBox = document.createElement('div');
  const newSecond = this.createSecond();
  timeBox.appendChild(newSecond);
  this.container.appendChild(timeBox);
  const tick = setInterval(this.refreshSecond(), 1000);
};

TimerView.prototype.createSecond = function () {
  const second = document.createElement('p');
  second.classList.add('timer');
  second.textContent = this.timer.updateSecond();
  return second;
};

TimerView.prototype.refreshSecond = function () {
  document.querySelector('.timer').textContent = this.timer.currentSecond;
};

module.exports = TimerView;
