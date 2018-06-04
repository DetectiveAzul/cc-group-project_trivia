const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const questionsArray = require('./question_test_seed_file.js');

describe('Game', function(){
  let game1;
  let player1, player2, player3;

  beforeEach(function(){
    player1 = new Player('Juan');
    player2 = new Player('Alice');
    player3 = new Player('Yoda');
    game1 = new Game([player1, player2, player3], questionsArray);
  })

  it('should have questions', function(){
    const actual = game1.questions.length;
    const expected = 10;
    assert.strictEqual(actual, expected);
  });

  it('should shuffle players', function(){
    //TODO: refactor with %
    game1.shufflePlayers();
    const actual = game1.players;
    const expected = [player1, player2, player3];
    assert.notDeepStrictEqual(actual, expected);
  });

  it('should manage players answering correctly', function(){
    game1.playerAnswer(3);
    const actual = player1.correctQuestionsAnswered.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should select next player', function(){
    game1.nextPlayer();
    const actual = game1.currentPlayer;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('change question after last player\'s turn', function(){
    game1.nextPlayer();
    game1.nextPlayer();
    game1.nextPlayer();
    const actual = game1.currentQuestion;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

});
