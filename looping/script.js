const inputNumber = document.getElementById('inputNumber')
const enterBtn = document.getElementById('enterBtn')
const ul = document.getElementById("ul")
let number;

function numberLoop(){
    number = Number(inputNumber.value)

    ul.innerHTML = ''

    while(number <= 10){

        addingLi(number)

        console.log(number)
        number++
    }
}
function addingLi(e){
    const li = document.createElement('li')

    li.textContent = `Iterasi Ke-${e}`

    ul.appendChild(li)
}
enterBtn.addEventListener('click',numberLoop)
inputNumber.addEventListener('keydown',(event)=>{
    if(event.key === "Enter"){
        numberLoop()
    }
})