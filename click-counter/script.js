const clickBtn = document.getElementById('clickButton')
const clickCounter = document.getElementById('counter')

let count = 0
function updateCounter(){
    count++
    clickCounter.textContent = count
    if(count % 2 == 0){
        clickCounter.style.color = "green"
        clickCounter.textContent = `${count}x`
    }else{
        clickCounter.style.color = "red"
        clickCounter.textContent = `${count}x`

    }
}
clickBtn.addEventListener('click', updateCounter)