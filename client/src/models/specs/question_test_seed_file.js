require('../question.js');

const rawQuestions = [{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "medium",
"question": "In the &quot;Halo&quot; franchise, in what country is New Mombasa?",
"correct_answer": "Kenya",
"incorrect_answers": ["India","Turkey","Slovakia"]
},{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "Which company did Gabe Newell work at before founding Valve Corporation?",
"correct_answer": "Microsoft",
"incorrect_answers": ["Apple","Google","Yahoo"]
},{
"category": "Entertainment: Music",
"type": "multiple",
"difficulty": "medium",
"question": "Who had a 1973 hit with the song &#039;Hocus Pocus&#039;?",
"correct_answer": "Focus",
"incorrect_answers": ["Pilot","Rush","AC/DC"]
},{
"category": "Science: Mathematics",
"type": "multiple",
"difficulty": "hard",
"question": "What is the derivative of Acceleration with respect to time?",
"correct_answer": "Jerk",
"incorrect_answers": ["Shift","Bump","Slide"]
},{
"category": "Vehicles",
"type": "multiple",
"difficulty": "easy",
"question": "The Italian automaker Lamborghini uses what animal as its logo?",
"correct_answer": "Bull",
"incorrect_answers": ["Bat","Horse","Snake"]
},{
"category": "History",
"type": "multiple",
"difficulty": "medium",
"question": "How old was Lyndon B. Johnson when he assumed the role of President of the United States?",
"correct_answer": "55",
"incorrect_answers": ["50","60","54"]
},{
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "The medical condition osteoporosis affects which part of the body?",
"correct_answer": "Bones",
"incorrect_answers": ["Skin","Brain","Heart"]
},{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "medium",
"question": "If you play the Super Mario RPG and nap in a rented hotel room, you will wake up next to what familiar looking character?",
"correct_answer": "Link",
"incorrect_answers": ["Wario","Q*bert","Solid Snake"]
},{
"category": "Entertainment: Video Games",
"type": "multiple",
"difficulty": "easy",
"question": "In Dota 2, Wraith King was previously known as...",
"correct_answer": "Skeleton King",
"incorrect_answers": ["Reaper King","Skull King","Hell King"]
},
{
"category": "Entertainment: Film",
"type": "multiple",
"difficulty": "medium",
"question": "Leonardo Di Caprio won his first Best Actor Oscar for his performance in which film?",
"correct_answer": "The Revenant",
"incorrect_answers": ["The Wolf Of Wall Street","Shutter Island","Inception"]
}];

questionsArray = [];

rawQuestions.forEach((rawQuestion) => {
  const question = new Question(rawQuestion);
  questionsArray.push(question);
});

module.exports = questionsArray;
