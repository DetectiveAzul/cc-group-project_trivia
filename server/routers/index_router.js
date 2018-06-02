const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const highScoresRouter = require('./high_scores_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('trivia');
  const highScoresCollection = db.collection('high_scores');
  router.use('/api/highscores', highScoresRouter(highScoresCollection));
});

module.exports = router;
