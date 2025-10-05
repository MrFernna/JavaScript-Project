const countdownElement = document.getElementById('countdown')
const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')
// Get element from input container in html
const inputHours = document.getElementById('inputHours')
const inputMinutes = document.getElementById('inputMinutes')
const inputSeconds = document.getElementById('inputSeconds')
const startButton = document.getElementById('startButton')
// variable countdownInterval
let countdownInterval;
// function to start the countdown
function startTimer(){
    // get the input values from user
    let hours = parseInt(inputHours.value) || 0
    let minutes = parseInt(inputMinutes.value) || 0
    let seconds = parseInt(inputSeconds.value) || 0
    // convert the total time into seconds
    let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds

    // if no time in input, stop the function
    if(totalTimeInSeconds <= 0){
        alert('Please input a valid time')
        return
    }
    // clear the input after the timer start
    if(inputHours.value){
        inputHours.value = inputHours.value.padStart(2,'0')
    }
    if(inputMinutes.value){
        inputMinutes.value = inputMinutes.value.padStart(2,'0')
    }
    if(inputSeconds.value){
        inputSeconds.value = inputSeconds.value.padStart(2,'0')
    }
    // function to update the time display in every second
    countdownInterval = setInterval(()=>{
        //calculate remaining days, hours, minutes, and second
        const days = Math.floor(totalTimeInSeconds/86400)
        const hours = Math.floor((totalTimeInSeconds % 86400) / 3600)
        const minutes = Math.floor((totalTimeInSeconds % 3600) / 60)
        const seconds = Math.floor((totalTimeInSeconds % 60)) 
        //update the HTML element display
        daysElement.textContent = days.toString().padStart(2,'0')
        hoursElement.textContent = hours.toString().padStart(2,'0')
        minutesElement.textContent = minutes.toString().padStart(2,'0')
        secondsElement.textContent = seconds.toString().padStart(2,'0')
        //Decrease the timer by one second
        totalTimeInSeconds--
        //stop the timer when times runs out
        if(totalTimeInSeconds < 0){
            clearInterval(countdownInterval)
            alert("Time's Up")
        }
        //
    }, 1000)
}
//addEventListener function for the start button
startButton.addEventListener('click',()=>{
    //clear all countdownInterval when timer start
    clearInterval(countdownInterval)
    //start a New timer
    startTimer()
})