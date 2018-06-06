const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');

const PlayerScoreView = function(player, container) {
  this.player = player;
  this.container = container;
};

PlayerScoreView.prototype.render = function () {
  this.addName();
  this.percentageScore();
  this.chartElement();
};

PlayerScoreView.prototype.addName = function () {
  const newName = document.createElement('h2');
  newName.textContent = this.player.name;
  this.container.appendChild(newName);
};

PlayerScoreView.prototype.percentageScore = function () {
  const percentageScore = document.createElement('p');
  const percentage = this.calculatePercentage();
  percentageScore.textContent = `Has answered ${Math.floor(percentage)}% correctly`;
  this.container.appendChild(percentageScore);
};

PlayerScoreView.prototype.calculatePercentage = function () {
  const totalAnswer = this.player.questionsAnswered.length;
  const totalCorrect = this.player.correctQuestionsAnswered.length;
  return (totalCorrect * 100) / totalAnswer;
};


PlayerScoreView.prototype.chartElement = function () {
  this.container.id = `container-${this.player.name}`;
  const newName = document.createElement('p');
  newName.textContent = this.player.name;
  this.container.appendChild(newName);

  const chartElement = document.createElement('script');
  chartElement.innerHTML = this.createChart();
  this.container.appendChild(chartElement);

};


PlayerScoreView.prototype.runOnLoad = function (c,o,d,e) {function x(){for(e=1;c.length;)c.shift()()}o[d]?(document[d]('DOMContentLoaded',x,0),o[d]('load',x,0)):o.attachEvent('onload',x);return function(t){e?o.setTimeout(t,0):c.push(t)}
}
([],window,'addEventListener');

PlayerScoreView.prototype.createChart = function () {
  return this.runOnLoad( () => {
    new Highcharts.Chart({
     chart : {
       renderTo : `container-${this.player.name}`,
       type     : 'bar'
     },
     title: {
            text: 'percentage score'
        },
        xAxis: {
            categories: ['Correct', 'Incorrect']
        },
        yAxis: {
            title: {
                text: 'Questions'
            }
        },
        series: [{
            name: this.player.name,
            data: [this.player.correctQuestionsAnswered.length, (this.player.questionsAnswered.length - this.player.correctQuestionsAnswered.length)]
        }]
   });
  });
};


module.exports = PlayerScoreView;
