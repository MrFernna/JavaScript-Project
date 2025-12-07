//untuk mengambil data playlist dari local storage
let playlist = JSON.parse(localStorage.getItem('playlist'))

const playIcon = document.getElementById('play-icon')
const pauseIcon = document.getElementById('pause-icon')
const playBtn = document.getElementById('play-pause')
const progressBar = document.getElementById('progress-bar')
const trackName = document.getElementById('selectedAudio')
const audio = document.getElementById('audio')
const inputFile = document.getElementById('inputFile')
const playlistSection = document.getElementById("playlist")

function createPlayList(){
    playlistSection.innerHTML = ""
    playlist.forEach((track, index) => {
        const li = document.createElement('li')
        li.textContent = track.title
        li.dataset.src = track.src
    })
    li.addEventListener('click',()=>{
        audio.src = track.src
    })
}
