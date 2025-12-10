let playlist = JSON.parse(localStorage.getItem('playlist')) || []
const playlistSection = document.getElementById('playlist')
const playIcon = document.getElementById('play-icon')
const pauseIcon = document.getElementById('pause-icon')
const playPauseBtn = document.getElementById('play-pause')
const progressBar = document.getElementById('progress-bar')
const trackSelected = document.getElementById("selectedAudio")
const audio = document.getElementById('audio')
const audioFile = document.getElementById('inputFile')

function createAudioList(){
    playlistSection.innerHTML = ''
    playlist.forEach((track, index) => {
        const li = document.createElement('li')
        li.textContent = track.title
        li.dataset.src = track.src
        playlistSection.appendChild(li)
        li.classList.add('file-list')

        li.addEventListener('click',()=>{
            audio.src = track.src
            audio.play()
            updatePlayPauseIcon()

            document.querySelectorAll('#playlist li').forEach(item => item.classList.remove('active'))
            li.classList.add('active')
            trackSelected.textContent = track.title
        })
    })
}


function saveAudio(){
    localStorage.setItem('playlist',JSON.stringify(playlist))
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

createAudioList()

audioFile.addEventListener('change',(event)=>{
    const files = Array.from(event.target.files)
    files.forEach(file =>{
        const reader = new FileReader()
        reader.onload = function(e){
            const track = {
                title: file.name,
                src: e.target.result
            }
            playlist.push(track)
            createAudioList()
            saveAudio()
        }
        reader.readAsDataURL(file)
    })

})
playPauseBtn.addEventListener('click',()=>{
    if(audio.paused){
        audio.play()
    }else{
        audio.pause()
    }
    updatePlayPauseIcon()
})
audio.addEventListener('timeupdate',()=>{
    const progress = (audio.currentTime / audio.duration) * 100
    progressBar.style.width = progress + "%"
})