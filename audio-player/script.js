const playIcon = document.getElementById('play-icon')
const pauseIcon = document.getElementById('pause-icon')
const playBtn = document.getElementById('play-pause')


playIcon.addEventListener('click', ()=>{
    playIcon.style.display = "none";
    pauseIcon.style.display = "block"
})
pauseIcon.addEventListener('click', ()=>{
    playIcon.style.display = "block";
    pauseIcon.style.display = "none"
})