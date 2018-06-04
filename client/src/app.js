const QuestionDataHandler = require('./models/question_data_handler.js');
const CategoryDataHandler = require('./models/form_models/category_data_handler.js');
const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // const questionDataHandler = new QuestionDataHandler(`https://opentdb.com/api.php?amount=10&category=18`);
  // questionDataHandler.getData();

  const categoryDataHandler = new CategoryDataHandler();
  categoryDataHandler.getData();

  const formView = new FormView();
  formView.bindEvents();

});
