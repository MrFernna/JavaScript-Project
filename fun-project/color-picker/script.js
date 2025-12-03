document.getElementById('colorInput').addEventListener('input',(event)=>{
    
    let selectedColor = event.target.value
// Get color code from input color
    document.getElementById('colorCode')
    colorCode.textContent = selectedColor
// Get display color from input color
    document.getElementById('colorDisplay').style.backgroundColor = selectedColor
// Get font color from input color Yesssirrr!!!
    document.querySelector('.color-font').style.color = selectedColor

})