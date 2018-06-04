const QuestionDataHandler = require('./models/question_data_handler.js');
const CategoryDataHandler = require('./models/form_models/category_data_handler.js');
const Game = require('./models/game.js')
const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const questionDataHandler = new QuestionDataHandler();
  questionDataHandler.getUrl();

  const categoryDataHandler = new CategoryDataHandler();
  categoryDataHandler.getData();

  const formView = new FormView();
  formView.bindEvents();

  const newGame = new Game();
  newGame.bindEvents();



});
