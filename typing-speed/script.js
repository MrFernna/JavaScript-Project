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
let x = true;
let y = true;

console.log(x && y)
console.log(x || y)
console.log(!x)
console.log(name1)
console.log(textToType)
startBtn.addEventListener('click',updateDisplay)
//next-tomorrow again
//skip-coding-hehe
//skip-coding-hehe
//ill-be-back-tomorrow
//just-present
//just-present
//just-present