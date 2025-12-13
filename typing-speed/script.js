const textToTypeElement = document.getElementById('text-to-type')
const textToType = textToTypeElement.innerHTML.split('')
const userType = document.getElementById('user-type')
const timeDisplay = document.getElementById('time')
const wpmDisplay = document.getElementById('word-per-minute')
const startBtn = document.getElementById('start-button')

let startTime
let timeInterval

function updateDisplay(){
    startTime = new Date(2007,0,13)
    userType.value = ''
    userType.focus()
    timeInterval = setInterval(startCounting,1000)
    textToTypeElement = textToType.map(word =>`${word}` ).join(' ')
}
function startCounting(){
    let currentTime = new Date()
}
console.log(textToType)
userType.addEventListener('click',updateDisplay)
