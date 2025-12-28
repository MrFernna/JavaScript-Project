const clickBtn = document.getElementById('clickBtn')
let margin = 0;
let marginBottom = 0;

function randomMove(){
    const randomMargin = Math.floor(Math.random(margin)* 100)
    clickBtn.style.margin = randomMargin + '%'
}
//test
clickBtn.addEventListener('mouseover',randomMove)
