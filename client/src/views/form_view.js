const PubSub = require('../helpers/pub_sub.js');

const FormView = function() {
  this.container = null;
  this.categories = [];
  this.difficulty = ['Any', 'Easy', 'Medium', 'Hard'];
}

FormView.prototype.createView = function () {
  this.createContainer();
  this.createTitle();
  this.createPlayerMenu();
  this.createDifficultyMenu();
  this.createCategoryMenu();
  this.createQuestionNumber();
  this.createSubmitButton();
  this.addSubmitListener();
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('CategoryDataHandler:categories-ready', (evt) => {
    this.categories = evt.detail["trivia_categories"];
    this.createView();
  });
};

FormView.prototype.createContainer = function () {
  const formElement = document.createElement('form');
  const bodyElement = document.querySelector('body');
  bodyElement.appendChild(formElement);
  this.container = formElement;
};

FormView.prototype.createTitle = function () {
  const heading = document.createElement('h1');
  heading.id = 'title';
  heading.textContent = 'Pug Quiz';
  this.container.appendChild(heading);
};

FormView.prototype.createPlayerMenu = function () {
  this.createLabel('Choose Numbers of Players');
  const dropDownElement = document.createElement('select');
  dropDownElement.id = 'playerNumber';
  this.container.appendChild(dropDownElement);
  this.populatePlayerMenu(dropDownElement);
};

FormView.prototype.populatePlayerMenu = function (parent) {
  for (var i = 0; i < 4; i++) {
    const option = document.createElement('option');
    option.textContent = `${i+1} players`;
    option.value = i+1;
    parent.appendChild(option);
  }
};

FormView.prototype.createCategoryMenu = function () {
  this.createLabel('Choose Category');
  const dropDownElement = document.createElement('select');
  dropDownElement.id = 'category';
  this.container.appendChild(dropDownElement);
  this.populateCategoryMenu(dropDownElement);
};

FormView.prototype.populateCategoryMenu = function (parent) {
  this.createDefaultCategory(parent);
  for (var i = 0; i < this.categories.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${this.categories[i].name}`;
    option.value = this.categories[i].id;
    parent.appendChild(option);
  }
};

FormView.prototype.createDefaultCategory = function (parent) {
  const option = document.createElement('option');
  option.textContent = `All Categories`;
  option.value = 0;
  option.defaultSelected;
  parent.appendChild(option);
};

FormView.prototype.createDifficultyMenu = function () {
  this.createLabel('Choose Difficulty');
  const dropDownElement = document.createElement('select');
  dropDownElement.id = 'difficulty';
  this.container.appendChild(dropDownElement);
  this.populateDifficultyMenu(dropDownElement);
};

FormView.prototype.populateDifficultyMenu = function (parent) {
  for (var i = 0; i < this.difficulty.length; i++) {
    const option = document.createElement('option');
    if (this.difficulty[i] === 'Any') option.defaultSelected;
    option.textContent = `${this.difficulty[i]}`;
    option.value = this.difficulty[i].toLowerCase();
    parent.appendChild(option);
  }
};

FormView.prototype.createQuestionNumber = function () {
  this.createLabel('Choose Number of Questions');
  const numberField = document.createElement('input');
  numberField.id = 'numberQuestions';
  numberField.type = 'number';
  numberField.min = '5';
  numberField.max = '50';
  numberField.defaultValue = '5';
  this.container.appendChild(numberField);
};

FormView.prototype.createSubmitButton = function () {
  const submitButton = document.createElement('input');
  submitButton.id = 'start';
  submitButton.type = 'submit';
  submitButton.value = 'Start Game';
  this.container.appendChild(submitButton);
};

FormView.prototype.addSubmitListener = function () {
   this.container.addEventListener('submit', (event) => {
     this.handleSubmit(event.target);
   });
};

FormView.prototype.handleSubmit = function (form) {
   event.preventDefault();
   const amount = form.numberQuestions.value;
   let category = '';
   if(form.category.value != 0) category = `&category=${form.category.value}`
   let difficulty = '';
   if(form.difficulty.value !== 'any') difficulty = `&category=${form.difficulty.value}`;

   let url = `https://opentdb.com/api.php?amount=${amount}${category}${difficulty}&type=multiple`;
   PubSub.publish('FormView:url-ready', url);
   PubSub.publish('FormView:player-number', form.playerNumber.value);
};

FormView.prototype.createLabel = function (textContent) {
  const label = document.createElement('label');
  label.textContent = textContent;
  this.container.appendChild(label);
};

module.exports = FormView;
