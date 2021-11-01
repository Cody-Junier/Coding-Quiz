// Create variables/ objects for manipulation
let time = 100;
let timeEl = document.getElementById('time')
let starterEl = document.querySelector('.starter')
let questionAreaEl = document.querySelector('.question-area')
let startBtn = document.getElementById('Start')
let questionEl = document.getElementById('question')
let answer1El = document.getElementById('1')
let answer2El = document.getElementById('2')
let answer3El = document.getElementById('3')
let answer4El = document.getElementById('4')

// Create a start quiz function that hides Starter and shows content/questions
function startQuiz() {
	// timerIntervalID = setInterval(populateTime, 1000);
	starterEl.classList.add('hidden')
	questionAreaEl.classList.remove("hidden")
	// populateQuestion()
}

startBtn.onclick = startQuiz;

// Make Quiz questions in array
let questionsArray = [
	{
		question: 'What does "HTML" mean?',
		answers: ['Hyper-Text-Markup-Language', 'Hyper-Text-Marking-Language', 'Human-Text-Markup-Language', 'It means nothing'],
		correctAnswer: 'Hyper-Text-Markup-Language'
	},
	{
		question: 'What does the "C" in "CSS" mean?',
		answers: ['Correct', 'Cereal', 'Cody', 'Cascading'],
		correctAnswer: 'Cascading'
	},
	{
		question: 'How do you comfort a JavaScript bug?',
		answers: ['You do not', 'Lysol', 'You console it', 'With hugs'],
		correctAnswer: 'You console it'
	},
]
// Go through questions + answers
let currentQuestionIndex = 0
function populateQuestion() {
	let currentQuestion = questionsArray[currentQuestionIndex] 

	questionEl.textContent = currentQuestion.question

	answer1El.textContent = currentQuestion.answers[0]
	answer2El.textContent = currentQuestion.answers[1]
	answer3El.textContent = currentQuestion.answers[2]
	answer4El.textContent = currentQuestion.answers[3]

	answer1El.onclick = incrementQuestionIndex
	answer2El.onclick = incrementQuestionIndex
	answer3El.onclick = incrementQuestionIndex
	answer4El.onclick = incrementQuestionIndex
}