const textToTypeElement = document.getElementById('text-to-type')
const textToType = textToTypeElement.innerHTML.split('')
const userType = document.getElementById('user-type')
const timeDisplay = document.getElementById('time')
const wpmDisplay = document.getElementById('word-per-minute')
const startBtn = document.getElementById('start-button')

let startTime;
let timeInterval;

function startButton(){
    startTime = new Date()
    userType.value = ''
    userType.focus()
    timeInterval = setInterval(updateDisplay,1000)
    textToTypeElement = textToType.map(word =>`<span>${word}</span>` ).join(' ')
}
function updateDisplay(){
    
}
console.log(name1)
console.log(textToType)
startBtn.addEventListener('click',updateDisplay)