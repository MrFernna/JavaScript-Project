const inputNumber = document.getElementById('input')
const guessButton = document.getElementById('guessingBtn')
const restartButton = document.getElementById('restartBtn')
const result = document.getElementById('h3')

let attempts = 0;

let randomNumber = Math.floor(Math.random() * 10) + 1

function checkGuess(){
    const userGuess = Number(inputNumber.value)
    attempts++
    if(userGuess === randomNumber){
        result.textContent = `Congratulations! Your Guess Was Correct! Correctly In ${attempts} Attempts`
        result.style.color = '#00ff00'
        endGame()
    }else if(userGuess > randomNumber){
        result.textContent = `Your Number To High! ${attempts} Attempts`
        result.style.color = '#ff0000'
    }else if(userGuess < randomNumber){
        result.textContent = `Your Number To Low! ${attempts} Attempts`
        result.style.color = '#ff0000'
    }
}
function endGame(){
    inputNumber.disabled = true
    guessButton.disabled = true
    restartButton.style.display = 'inline'
}
function reset(){
    randomNumber = Math.floor(Math.random() * 10) + 1
    inputNumber.disabled = false
    guessButton.disabled = false
    restartButton.style.display = 'none'
    inputNumber.value = ''
    result.textContent = `Guess The Number! Good Luck lol`
    result.style.color = '#ffffff'
}
restartButton.addEventListener('click',reset)
inputNumber.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        checkGuess()
    }
})
guessButton.addEventListener('click',()=>{
    checkGuess()
})