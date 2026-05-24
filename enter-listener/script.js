//Mengambil ID HTML
const inputNumber = document.getElementById('inputNumber')
const enterBtn = document.getElementById('enterBtn')
const ul = document.getElementById("ul")

// Membuat Variabel Nilai 
let number;


//Membuat Kondisi Nilai
number = Number(inputNumber.value)

ul.innerHTML = ''

while(number <= 20){
    
    addingLi(number)
    
    console.log(number)
    number++
}
function numberLoop(){
}

//Menambahkan Jumlah Perulanngan
function addingLi(e){
    const li = document.createElement('li')

    li.textContent = `Iterasi Ke-${e}`

    ul.appendChild(li)
}

//Menekan Tombol Enter untuk Menjalankan Perulangan
enterBtn.addEventListener('click',numberLoop)
inputNumber.addEventListener('keydown',(event)=>{
    if(event.key === "Enter"){
        numberLoop()
    }
})