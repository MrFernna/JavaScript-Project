const inputNumber = document.getElementById('inputNumber')
const enterBtn = document.getElementById('enterBtn')
const ul = document.getElementById("ul")
let number;

function numberLoop(){
    number = inputNumber.value
    while(number <= 10){
        console.log(number)
        number++
    }
    returnLoop()
}
function returnLoop(){
    const li = document.createElement('li')
    li.forEach(li2 => {
        li2.textContent = `iterasi ke- ${number}`
    })
    ul.appencChild(li)
}
inputNumber.addEventListener('keydown',(event)=>{
    if(event.key === "Enter"){
        numberLoop()
    }
})