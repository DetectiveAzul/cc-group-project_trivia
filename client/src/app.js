const QuestionDataHandler = require('./models/question_data_handler.js');
const CategoryDataHandler = require('./models/form_models/category_data_handler.js');
const Game = require('./models/game.js')
const GameView = require('./views/game_view.js');
const FormView = require('./views/form_view.js');
const TimerView = require('./views/timer_view.js');
const Timer = require('./models/timer.js');

document.addEventListener('DOMContentLoaded', () => {
  const questionDataHandler = new QuestionDataHandler();
  questionDataHandler.getUrl();

  const categoryDataHandler = new CategoryDataHandler();
  categoryDataHandler.getData();

  const formView = new FormView();
  formView.bindEvents();

  const gameView = new GameView();
  gameView.bindEvents();

  const game = new Game();
  game.bindEvents();

  // const testTimerView = document.createElement('div');
  // testTimerView.classList.add('header');
  // const body = document.querySelector('body');
  // body.appendChild(testTimerView);
  //
  // const timerView = new TimerView(testTimerView);
  // timerView.bindEvents();
  //
  // const timer = new Timer(10000);
  // timer.tick();

});
