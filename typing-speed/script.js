//NOTE - Memanggil class dan id di HTML
const textToTypeElement = document.getElementById('text-to-type')
const textToType = textToTypeElement.innerHTML.split('')
const userType = document.getElementById('user-type')
const timeDisplay = document.getElementById('time')
const wpmDisplay = document.getElementById('word-per-minute')
const startBtn = document.getElementById('start-button')


//NOTE - Membuat Variabel Waktu Mulai dan Countdown
let startTime;
let timeInterval;

//NOTE - Fungsi ketika program dimulai
function startButton(){
    startTime = new Date()
    userType.value = ''
    userType.focus()
    timeInterval = setInterval(updateDisplay,1000)
    textToTypeElement = textToType.map(word =>`<span>${word}</span>` ).join(' ')
}
function updateDisplay(){

}