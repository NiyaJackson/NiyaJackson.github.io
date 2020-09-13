$('#quiz').quiz({
  resultsScreen: '#results-screen1',
  counter: true,
  resultsFormat:'You got %score out off %total correct!',

  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'Which of these should you do first when considering buying a new home',
      'options': [
        'Contact Property agents and start visiting home opens',
        'Close all your credit and store cards to improve your credit score',
        'Get a pre-approval for your loan from a lender that suits you best'
      ],
      'correctIndex': 3,
      'correctResponse': 'Awesome, thats the right answer',
      'incorrectResponse': 'Well, if you don\'t include it, your quiz won\'t work'
    },
    {
      'q': 'Which of these should you do first when considering buying a new home',
      'options': [
        'Contact Property agents and start visiting home opens',
        'Close all your credit and store cards to improve your credit score',
        'Get a pre-approval for your loan from a lender that suits you best'
      ],
      'correctIndex': 2,
      'correctResponse': 'Awesome, thats the right answer',
      'incorrectResponse': 'Well, if you don\'t include it, your quiz won\'t work'
    }
  ]
});
