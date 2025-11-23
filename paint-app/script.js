const brushBtn = document.getElementById('brush')
const colorInput = document.getElementById('colorInput')
const eraserBtn = document.getElementById('eraser')
const canvas = document.querySelector('.canvas')
const clearBtn = document.getElementById('clear')
const textColor = document.getElementById('color')

const ctx =  canvas.getContext('2d')

canvas.width = 700
canvas.height = 200

let painting = false
let erasing = false
let lineWidth = 5
let colorDefault = "#000000"

function startPosition(e){
    painting = true;
    draw(e)
}

function endPosition(e){
    painting = false
    ctx.beginPath()
}

function draw(){
    if(!painting) return

    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    ctx.strokeStyle = erasing ? '#eeeeee':colorDefault

}

function selectBrush(e){
    eraserBtn.classList.add('active')
}

function selectColor(e){
    let selectedColor = e.target.value;
    textColor.style.color = selectedColor;
    textColor.textContent = selectedColor;
}
colorInput.addEventListener('input',selectColor)

