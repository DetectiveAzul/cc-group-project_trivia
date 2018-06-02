const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const Question = require('./question.js');

const QuestionDataHandler = function(url){
  this.url = url;
  this.questionsArray = null;
}

QuestionDataHandler.prototype.getData = function () {
  const request = new Request(this.url);

  request.get()
    .then((questions) => {
      this.questionsArray = this.handleData(questions["results"]);
    });
};

QuestionDataHandler.prototype.handleData = function (questions) {
  const questionsArray = [];

  questions.forEach((question) => {
    const newQuestion = new Question(question);
    questionsArray.push(newQuestion);
  });
  return questionsArray;
};

module.exports = QuestionDataHandler;
