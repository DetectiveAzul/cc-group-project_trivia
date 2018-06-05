const Timer = require('../models/timer.js');
const PubSub = require('../helpers/pub_sub.js');

const TimerView = function(container){
  this.container = container;
  this.currentSecond = null;
}

TimerView.prototype.bindEvents= function () {
  PubSub.subscribe('Timer:current-second', (evt) => {
    this.currentSecond = evt.detail;
    this.render();
  })
};

TimerView.prototype.render = function () {
  this.container.innerHTML = '';
  const timeBox = document.createElement('div');
  const newSecond = this.createSecond();
  timeBox.appendChild(newSecond);
  this.container.appendChild(timeBox);
};

TimerView.prototype.createSecond = function () {
  const second = document.createElement('p');
  second.classList.add('timer');
  second.textContent = this.currentSecond;
  return second;
};

module.exports = TimerView;
