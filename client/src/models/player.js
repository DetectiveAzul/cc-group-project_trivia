
const Player = function(name, className){
  this.name = name;
  this.className = className;
  this.score = 0;
  this.questionsAnswered = [];
  this.correctQuestionsAnswered = [];
}

Player.prototype.correctAnswer = function (question) {
  this.correctQuestionsAnswered.push(question);
  this.questionsAnswered.push(question);
  // this.increaseScore(question.difficulty);
};

Player.prototype.incorrectAnswer = function (question) {
  this.questionsAnswered.push(question);
};



module.exports = Player;
