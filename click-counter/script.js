const clickBtn = document.getElementById('clickButton')
const clickCounter = document.getElementById('counter')
const colorContainer = document.querySelector('.click-container')

let count = 0
function updateCounter(){
    count++
    clickCounter.textContent = count
    if(count % 2 == 0){
        colorContainer.style.backgroundColor = "#1ae635ff"
        clickCounter.textContent = `${count}x`
    }else{
        colorContainer.style.backgroundColor = "#e61a1aff"
        clickCounter.textContent = `${count}x`

    }
}
clickBtn.addEventListener('click', updateCounter)