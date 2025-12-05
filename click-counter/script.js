const clickBtn = document.getElementById('clickButton')
const clickCounter = document.getElementById('counter')

let count = 0;

clickBtn.addEventListener('click',()=>{
    count++;
    clickCounter.textContent = `${count}x`
})