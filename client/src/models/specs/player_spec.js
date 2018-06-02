const assert = require('assert');
const Player = require('../player.js');

describe('Player', function () {
  let player1;
  beforeEach(function(){
    player1 = new Player('Juan');
  });

  it('should have a name', function(){
      const actual = player1.name;
      const expected = 'Juan';
      assert.strictEqual(actual, expected);
  });

  it('should have a score', function(){
    const actual = player1.score;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should start with questionsAnswered empty', function(){
    const actual = player1.questionsAnswered.length;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  xit('should have a name', function(){

  });
});
