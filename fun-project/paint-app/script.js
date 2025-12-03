const brushBtn =  document.getElementById('brush')
const eraserBtn = document.getElementById('eraser')
const inputColor = document.getElementById('color')
const clearBtn = document.getElementById('clear')
const colorText = document.getElementById('textColor')

const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')
let selectedColor;

const lineWidth = 5

canvas.width = 800
canvas.height = 500
defaultColor = "#000000"

let painting = false
let erasing = false

function startPoint(e){
    painting = true
    draw(e)
}

function endPoint(){
    painting = false
    ctx.beginPath()
}

function draw(e){
    if(!painting) return

    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    ctx.strokeStyle = erasing ? '#ffffff': selectedColor

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
    
}
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function selectColor(e){
    selectedColor = e.target.value
    colorText.style.color = selectedColor
    colorText.textContent = selectedColor
}

function selectBrush(){
    erasing = false
    painting = true
    brushBtn.classList.add('active')
    eraserBtn.classList.remove('active')
}
function selectEraser(){
    painting = false
    erasing = true
    brushBtn.classList.remove('active')
    eraserBtn.classList.add('active')
}

canvas.addEventListener('mousedown',startPoint)
canvas.addEventListener('mouseup',endPoint)
canvas.addEventListener('mouseout',endPoint)
canvas.addEventListener('mousemove',draw)


inputColor.addEventListener("input",selectColor)
brushBtn.addEventListener('click',selectBrush)
eraserBtn.addEventListener('click',selectEraser)
clearBtn.addEventListener('click',clear)