const inputColor = document.getElementById("colorInput")
const colorCode = document.getElementById("colorCode")
const outputColor = document.getElementById("colorDisplay")

inputColor.addEventListener('input',(e)=>{
    colorCode.style.color = e.target.value
    outputColor.style.background = e.target.value
    colorCode.textContent = e.target.value
})