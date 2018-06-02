const assert = require('assert');
const QuestionDataHandler = require('../question_data_handler.js');

describe('QuestionDataHandler', function () {
  let questionDataHandler;
  beforeEach( function() {
    questionDataHandler = new QuestionDataHandler(`https://opentdb.com/api.php?amount=10&category=18`);
  });

  it('should have a questions Array', function () {
    const actual = questionDataHandler.questionsArray;
    const expected = null;
    assert.strictEqual(actual, expected);
  });

  it('QuestionDataHandler should be able to get questions from the API', function () {
    questionDataHandler.getData();
    const actual = questionDataHandler.questionsArray.length;
    const expected = 10;
    assert.equal(actual, expected);
  });

});
