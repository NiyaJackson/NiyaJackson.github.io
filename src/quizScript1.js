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
        'Select a property that you like and put in a offer with the real estate agent',
        'Close all your credit and store cards to improve your credit score',
        'Get a pre-approval for your loan from a lender that suits you best'
      ],
      'correctIndex': 2,
      'correctResponse': 'Awesome, thats the right answer',
      'incorrectResponse': 'That\'s incorrect. The first step is to get in touch with a mortgage broker who can help you get a pre-approval so that when you start looking for homes so that sellers undersand that you are serious.'
    },
    {
      'q': 'When do you have to take LMI (Lenders Mortgage Insurance) ',
      'options': [
        'Typically when the LVR is greater than 80%',
        'It is mandatory for all home loans',
        'If your years to retirement is less than than 20 years'
      ],
      'correctIndex': 0,
      'correctResponse': 'Awesome, thats the right answer',
      'incorrectResponse': 'LMI is usually mandatory  when the LVR is greater than 80%, although there are schemes by which the Goverment acts as a guarantor, hence required only if the LVR is greater than 95% '
    },
    {
      'q': 'How much genuine savings is typically required to take a home loan',
      'options': [
        '5% of the property value',
        '5% of the loan value',
        '5% of your taxable income'
      ],
      'correctIndex': 1,
      'correctResponse': 'Awesome, thats the right answer',
      'incorrectResponse': '5% of the property value is required by most vendors'
    },
    {
      'q': 'Which of the following is considered as a genuine savings',
      'options': [
        'First home owners grant (FHOG)',
        'Shares held for three months',
        'Tax refunds'
      ],
      'correctIndex': 1,
      'correctResponse': 'Awesome, thats the right answer',
      'incorrectResponse': 'Tax refunds and FHOG do not demonstrate good savings habit'
    },
    {
      'q': 'What is the maximum duration of a fixed rate residential home loan',
      'options': [
        '2 years',
        '5 years',
        '10 years'
      ],
      'correctIndex': 1,
      'correctResponse': 'Awesome, thats the right answer',
      'incorrectResponse': 'Lenders do not provide residential home loans for a period of more than 5 years'
    }
  ]
});
