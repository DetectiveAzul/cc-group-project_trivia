const QuestionDataHandler = require('./models/question_data_handler');

document.addEventListener('DOMContentLoaded', () => {
  const questionDataHandler = new QuestionDataHandler(`https://opentdb.com/api.php?amount=10&category=18`);

  questionDataHandler.getData();

  console.table(questionDataHandler.questionsArray);
});
