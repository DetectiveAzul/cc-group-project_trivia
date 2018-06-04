const QuestionDataHandler = require('./models/question_data_handler.js');
const CategoryDataHandler = require('./models/form_models/category_data_handler.js');
const Game = require('./models/game.js')
const FormView = require('./views/form_view.js');
//THIS IS FOR TESTING. DELETE LATER:
// const QuestionMainContainerView = require('./views/question_main_container_view.js');
// const questionSeed = require('./models/specs/question_test_seed_file.js');

document.addEventListener('DOMContentLoaded', () => {
  const questionDataHandler = new QuestionDataHandler();
  questionDataHandler.getUrl();

  const categoryDataHandler = new CategoryDataHandler();
  categoryDataHandler.getData();

  const formView = new FormView();
  formView.bindEvents();

  const newGame = new Game();
  newGame.bindEvents();

  //TO TEST: DELETE LATER
  // const body = document.querySelector('body');
  // body.innerHTML = '';
  // const mainContainer = document.createElement('div');
  // mainContainer.classList.add('question-container');
  // body.appendChild(mainContainer);
  // const questionMainContainerView = new QuestionMainContainerView(questionSeed[0], mainContainer);
  // questionMainContainerView.render();





});
