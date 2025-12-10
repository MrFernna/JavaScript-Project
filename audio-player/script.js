//untuk mengambil data playlist dari local storage
let playlist = JSON.parse(localStorage.getItem('playlist')) || []
const playIcon = document.getElementById('play-icon')
const pauseIcon = document.getElementById('pause-icon')
const playBtn = document.getElementById('play-pause')
const progressBar = document.getElementById('progress-bar')
const trackName = document.getElementById('selectedAudio')
const audio = document.getElementById('audio')
const inputFile = document.getElementById('inputFile')
const playlistSection = document.getElementById("playlist")

function createPlaylist(){
    playlistSection.innerHTML = ''
    playlist.forEach(track =>{
        const li = document.createElement('li')
        li.textContent = track.title
        li.dataset.src = track.src
        playlistSection.appendChild(li)

        li.addEventListener('click',()=>{
            audio.src = track.src
            audio.play()
            updatePlayPauseIcon()
            document.querySelectorAll('#playlist li').forEach(item => item.classList.remove('active'))

            li.classList.add('active')
            trackName.textContent = track.title
        })
    })
}

function updatePlayPauseIcon(){
    if(audio.paused){
        playIcon.style.display = 'block'
        pauseIcon.style.display = 'none'
    }else{
        playIcon.style.display = 'none'
        pauseIcon.style.display = 'block'
    }
}

//menyimpan audio ke dalam localStorage
function savePlaylist(){
    localStorage.setItem('playlist',JSON.stringify(playlist))
}

createPlaylist()

//event listener untuk upload file audio
inputFile.addEventListener('change',(event)=>{
    const files = Array.from(event.target.files)
    files.forEach(file =>{
        const reader = new FileReader()
        reader.onload = function(e){
            const track = {
                title: file.name,
                src: e.target.result
            }
            playlist.push(track)
            createPlaylist()
            savePlaylist()
        }
        reader.readAsDataURL(file)
    })
})
playBtn.addEventListener('click',()=>{
    if(audio.paused){
        audio.play()
    }else{
        audio.pause()
    }
    updatePlayPauseIcon()
})
audio.addEventListener('timeupdate',()=>{
    const progress = (audio.currentTime / audio.duration) * 100
    progressBar.style.width = progress + '%'
})