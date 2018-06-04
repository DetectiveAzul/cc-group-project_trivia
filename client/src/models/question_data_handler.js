const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const Question = require('./question.js');

const QuestionDataHandler = function(){
  this.url = null;
  this.questionsArray = null;
}

QuestionDataHandler.prototype.getData = function () {
  const request = new Request(this.url);

  request.get()
    .then((questions) => {
      this.questionsArray = this.handleData(questions["results"]);
      PubSub.publish('QuestionData:Questions-ready', this.questionsArray);
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

QuestionDataHandler.prototype.getUrl = function () {
  PubSub.subscribe('FormView:url-ready', (evt) => {
    this.url = evt.detail;
    this.getData();
  });
};


module.exports = QuestionDataHandler;
