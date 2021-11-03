// Create variables/ objects for manipulation
let time = 4;
let timeEl = document.getElementById('time')
let starterEl = document.querySelector('.starter')
let questionAreaEl = document.querySelector('.question-area')
let startBtn = document.getElementById('Start')
let questionEl = document.getElementById('question')
let resultContainerEl = document.querySelector('.results')
let saveNameEl=document.querySelector('.namebtn')
let finalScoreEl = document.getElementById('final-score')
let rightWrongEl = document.getElementById('right/wrong')
let tooltipEl = document.getElementById('tooltip')
let answer1El = document.getElementById('1')
let answer2El = document.getElementById('2')
let answer3El = document.getElementById('3')
let answer4El = document.getElementById('4')
let timerIntervalID = null;

// Create a start quiz function that hides Starter and shows content/questions
function startQuiz() {
	timerIntervalID = setInterval(populateTime, 1000);
	starterEl.classList.add('hidden')
    questionAreaEl.classList.add('top')
	questionAreaEl.classList.remove("hidden")
	populateQuestion()
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
// Create a function that increments the currentQuestionIndex by 1 when an answer button is clicked
function incrementQuestionIndex() {
	
	let buttonElAnswer = this.innerText
	
	checkAnswer(buttonElAnswer)
	
	currentQuestionIndex++

	if (currentQuestionIndex > questionsArray.length - 1) {
		
		questionAreaEl.classList.add('hidden')
        resultContainerEl.classList.add('top')
		resultContainerEl.classList.remove('hidden')
        timeEl.classList.add('hidden')
		finalScoreEl.textContent = `Your final score is ${time}!`
		clearInterval(timerIntervalID)
		return
	}

	populateQuestion()
}

function populateTime() {
    time--
	timeEl.textContent = `Time: ${time}`
	if (time < 0) {
		time = 0;
        timeEl.classList.add('hidden')
		questionEl.classList.add('hidden')
        answer1El.classList.add('hidden')
        answer2El.classList.add('hidden')
        answer3El.classList.add('hidden')
        answer4El.classList.add('hidden')
        rightWrongEl.classList.add('hidden')

        resultContainerEl.classList.add('top')
		resultContainerEl.classList.remove('hidden')
		finalScoreEl.textContent = `You ran out of time! Your final score is 0!`
	}
}

function checkAnswer(answer) {
	let tooltipText = ''
	if (answer == questionsArray[currentQuestionIndex].correctAnswer) {
		
		tooltipText = 'Correct!'
		rightWrongEl.classList.remove('hidden')
		tooltipEl.textContent = tooltipText
	} else {
		
		tooltipText = 'Wrong!'
		time = time - 10
		rightWrongEl.classList.remove('hidden')
		tooltipEl.textContent = tooltipText
        return time
	}
	setTimeout(() => {
		rightWrongEl.classList.add('hidden')
	}, 1000);
}


// LocalStorage 
let playerName= document.querySelector("#playername")
// var playerName= document.getElementById("#playername")
// console.log(playerName)
function saveScore () {
let playerName= document.querySelector("#playername")
console.log(time);
localStorage.setItem("score", time)
localStorage.setItem("name", playerName.value)
console.log(time)
console.log(playerName.value)
}
saveNameEl.addEventListener("click",saveScore)
