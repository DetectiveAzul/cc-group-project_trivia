# Pub Quiz

PubQuiz is a JavaScript Trivia Game made with Express and MongoDB made by a team of four in one week as a part of Codeclan 16 week Software Developer course. It was developed following Event Driven Development and MVC, and a RESTfull Server for storing highscores (in development). Takes question from an external API (OpenTDB) and creates a game depending on number of player, difficulty, category and number of questions.

#Tech Used

* JavaScript, HTML and CSS (with Flexbox)
* NPM for package install
* Express for the server
* Mocha for testing the logic
* Webpack for bundling javascript files
* MongoDB database

#Live Demo

You can find a live demo of this webApp on the following address: http://jajapubquiz.herokuapp.com

## Install
* Install npm: `$ brew install npm`
* `$ git clone ...`

* If prompted, install node
* Run npm packager `$ npm install`
* Create development database:
`$ mongod`
* Add the seed file on a new terminal tab
`$ mongo < server/db/seeds.js`
* Run bundler on a new tab: `$ npm run build`
* Run server on a new tab: `$ npm run server:dev`

## Run
* Open Google Chrome and go to `http://localhost:3000`

![character view](https://github.com/DetectiveAzul/cc-group-project_trivia/blob/master/images/intro.png?raw=true)


![character view](https://github.com/DetectiveAzul/cc-group-project_trivia/blob/master/images/last_design.png?raw=true)

# Pub Quiz
A chain of pubs is looking to improve its system of quizzes to adapt themselves to modern times. They have decided to create an interactive webApp to display questions, answers and stats of the team in real time. Your task is to make an MVP so they can play the quiz with diferent number of players and being able to configure number of questions, categories and difficulty. They want questions to be random and numerous, so you might use an API to bring in content to the app.

# MVP

* There is a screen to set up the game:
	* Number of players
	* Category of the questions
	* Difficulty of the questions
	* Number of questions
* There are players
* There are questions
* Questions have multiple answers
* Player select answers taking turns
* Correct answer will be displayed after all the players answer the question
* After all the questions, game shows the winner

# Extensions

* There are stats for every player
* Stats can be recorded on a high score chart
* The turns of the players are randomly decided
* Turns are timed. Every consequent player will have less time.

# API, Libraries, Resources

- https://www.highcharts.com/ HighCharts is an open-source library for rendering responsive charts.
- https://opentdb.com/ OpenTriviaDB is an open-source library of trivia questions.
