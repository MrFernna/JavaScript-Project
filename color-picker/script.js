const selectedColor = document.getElementById('colorInput')
const colorDisplay = document.getElementById('colorDisplay')
const colorCode = document.getElementById('colorCode')

selectedColor.addEventListener('input',(e)=>{
    colorDisplay.style.backgroundColor = e.target.value;
    colorCode.textContent = e.target.value
})