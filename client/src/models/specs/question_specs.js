const assert = require('assert');
const Question = require('../question.js');

describe('Question', function () {
  let question1;
  beforeEach( function() {
    const questionData =
    {"category":"Entertainment: Japanese Anime & Manga",
    "type":"multiple",
    "difficulty":"medium",
    "question":"In Pok&eacute;mon Chronicles, why was Misty afraid of Gyarados?",
    "correct_answer":"She crawled into it&#039;s mouth as a baby.",
    "incorrect_answers":["She found it scary.",
    "She was badly injured from it.",
    "It is part Bug."]}
    question1 = new Question(questionData);
  });

  it('should have a questionText', function () {
    const actual = question1.questionText;
    const expected = "In Pok&eacute;mon Chronicles, why was Misty afraid of Gyarados?";
    assert.strictEqual(actual, expected);
  });

  it('should have a category', function () {
    const actual = question1.category;
    const expected = "Entertainment: Japanese Anime & Manga";
    assert.strictEqual(actual, expected);

  });

  it('should have a difficulty', function () {
    const actual = question1.difficulty;
    const expected = "medium";
    assert.strictEqual(actual, expected);
  });

  it('should have a correct answer', function () {
    const actual = question1.correctAnswer;
    const expected = "She crawled into it&#039;s mouth as a baby.";
    assert.strictEqual(actual, expected);
  });

  it('should have answers', function () {
    const actual = question1.allAnswers.length;
    const expected = 4;
    assert.strictEqual(actual, expected);
  });

});
