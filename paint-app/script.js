const brushBtn = document.getElementById('brush')
const colorInput = document.getElementById('colorInput')
const eraserBtn = document.getElementById('eraser')
const canvas = document.querySelector('.canvas')
const clearBtn = document.getElementById('clear')
const textColor = document.getElementById('color')

const ctx =  canvas.getContext('2d')

let selectedColor;

canvas.width = 700
canvas.height = 400

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

function selectBrush(e){
    erasing = false;
    brushBtn.classList.add('active')
    eraserBtn.classList.remove('active')
}
function selectEraser(e){
    erasing = true
    eraserBtn.classList.add('active')
    brushBtn.classList.remove('active')
}

function selectColor(e){
    selectedColor = e.target.value;
    textColor.style.color = selectedColor;
    textColor.textContent = selectedColor;
}
function clear(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
}

canvas.addEventListener('mousedown',startPosition)
canvas.addEventListener('mouseup',endPosition)
canvas.addEventListener('mouseout',endPosition)
canvas.addEventListener('mousemove',draw)
colorInput.addEventListener('input',selectColor)
brushBtn.addEventListener('click',selectBrush)
eraserBtn.addEventListener('click',selectEraser)
clearBtn.addEventListener('click',clear)
