let time = 60
let timeId
let questionTitle = document.querySelector('.questions-title')
let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let mainQuiz = document.querySelector('.main-quiz')
let totalScore = document.querySelector('.score2')
let playAgain = document.querySelector('.js-play-button')
let revealFinal = document.querySelector('.end-of-game')
let remove1 = document.querySelector('.remove1')
let block2 = document.querySelector('.block-2')
let index = 0
let score = 0



document.querySelector('.js-start-button')
    .addEventListener('click', countDown)


function countDown() {

    let removeElement = document.querySelector('.js-start-button')
    removeElement.remove()
    timeId = setInterval(function() {
        time--
        document.querySelector('.countdown')
            .innerHTML = time

    if (time === 0 || time < 0) {
        clearInterval(timeId)
        document.querySelector('.countdown')
            .innerHTML = '0'
        endGame()
    }
    }, 1000)
}

document.querySelector('.js-start-button')
    .addEventListener('click', startQuiz)

function startQuiz() {
    
    block2.classList.remove('revealed')
    block2.classList.add('hidden')
    mainQuiz.classList.remove('hidden')
    mainQuiz.classList.add('revealed')
    
    showQuestions()
}

function showQuestions() {
    questionTitle.innerHTML = questions[index]

    button1.innerHTML = A[index]
    button2.innerHTML = B[index]
    button3.innerHTML = C[index]
    button4.innerHTML = D[index]
}

button1.addEventListener('click', nextQuestion)
button2.addEventListener('click', nextQuestion)
button3.addEventListener('click', nextQuestion)
button4.addEventListener('click', nextQuestion)

function nextQuestion(event) {
    isAnswerCorrect(event)
    index++

    if(index < questions.length) {
        showQuestions()
    } else {
        console.log('No more questions!')
        endGame()
    }
}

function isAnswerCorrect(event) {
    if (event.target.innerHTML === correctAnswers[index]) {
        score++
        totalScore.innerHTML = score
    } else {
        time += -5
    }
}

function endGame() {
    mainQuiz.classList.remove('revealed')
    mainQuiz.classList.add('hidden')

    
    revealFinal.classList.remove('hidden')
    revealFinal.classList.add('end-of-game-revealed')

    
    playAgain.classList.remove('hidden')
    playAgain.classList.add('play-again-button')

    document.querySelector('.js-end-score')
        .innerHTML = score
    time = 0
}

playAgain.addEventListener('click', returnHome)

function returnHome() {
    location.reload() 
}