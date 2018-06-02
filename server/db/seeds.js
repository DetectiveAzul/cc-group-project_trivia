use high_scores
db.dropDatabase();

db.high_scores.insertMany([
  {
  playerName: "Andris",
  totalAnswers: 40,
  totalCorrectAnswer: 2,
  totalGames: 2,
  totalWinGames: 0,
  winRatio: 0.00,
  totalCorrectAnswersRatio: 5.00,
  averageCorrectAnswers: 1
},
  {
  playerName: "Jemma",
  totalAnswers: 800,
  totalCorrectAnswer: 540,
  totalGames: 80,
  totalWinGames: 54,
  winRatio: 67.50,
  totalCorrectAnswersRatio: 67.50,
  averageCorrectAnswers: 6.75
},
  {
  playerName: "Alex S",
  totalAnswers: 600,
  totalCorrectAnswer: 200,
  totalGames: 1,
  totalWinGames: 0,
  winRatio: 0.00,
  totalCorrectAnswersRatio: 33.33,
  averageCorrectAnswers: 200
},
  {
  playerName: "Jaime",
  totalAnswers: 10,
  totalCorrectAnswer: 2,
  totalGames: 1,
  totalWinGames: 0,
  winRatio: 0.00,
  totalCorrectAnswersRatio: 20.00,
  averageCorrectAnswers: 2
}]
);
