const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;


const highScoresRouter = function(highScoresCollection) {
  //index
  router.get('/', (req, res) => {
    highScoresCollection
      .find()
      .toArray()
      .then( (docs) => res.json(docs))
  });

  //show
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    highScoresCollection
      .find({ _id: ObjectID(id)})
      .toArray()
      .then( (docs) => res.json(docs))
  });

  router.post('/', (req, res) => {
    const newStats = req.body.stats;
    highScoresCollection
      .insertMany(newStats)
      .then( () => {
        highScoresCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
        });
  });

  router.delete('/all', (req, res) => {
    highScoresCollection
      .deleteMany({})
      .then( () => {
        highScoresCollection
          .find()
          .toArray()
          .then( (docs) => res.json(docs))
        });
  });

  return router;
};


module.exports = highScoresRouter ;
