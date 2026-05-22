/*
var, dia bisa diakses diluar scopes,
nilainya bisa diubah
*/

// if(true){
//     var nama = "nanda"
// }//scope

// nama = "pato"
// console.log('var: ',nama)

/*
let, dia tidak bisa di akses diluar
scopes, hanya di dalam scopes, dan
nilainya bisa diubah
*/

// if(true){
//     let nama = "nanda"
//     nama = "pato"
//     console.log('let : ', nama)
// }//scope

/*
dia tidak bisa di akses diluar
scopes, hanya di dalam scopes, dan
nilainya tidak bisa diubah
*/

// let x = 5
// x *= 4

// console.log(x, typeof x)

// let a = 6
// let b = 8

// console.log(a<b)

// 


// let a = 15;
// let b = 10;
// let tambah = a + b;
// let kurang = tambah - b;
// let kali = kurang * b;

// let age = 17;
// let canVote = (age >= 18) ? "yes":"no";

// console.log(canVote)

// let str = "JavaScript"
// console.log(str[0])
// console.log(str[5])

// let hello = "hi";
// console.log(hello.length);

// let lowerCase = "huruf";
// let upperCase = lowerCase.toUpperCase();
// console.log(upperCase)

// let str = "Hello World!";
// let newStr = str.replace ("World", "JavaScript");
// console.log(newStr)

// let x = 13000;
// x *= 5;
// console.log(x)

// let age = 17
// let canVote = (age >= 18 ? "yes" : "no")
// console.log(canVote)

// operator string

// let sentences = "gw suka makan suka asiap"
// let index = sentences.lastIndexOf("suka")
// console.log(index)

// let str = "JavaScript"
// console.log(str.toLowerCase())

// cara menggabungkan nama menggunakan bactics

// let firstName = 'fernanda'
// let lastName = 'najmi'
// let resultBacktics = `${firstName} ${lastName}`
// console.log(resultBacktics)

// Cara mengambil string

// let str = "JavaScript"
// console.log(str.slice(0,4))
// console.log(str.substring(4,10))

// cara manipulasi di dalam string menggunakan .join

// const arr = ['test', 'string', 'di', 'array']
// console.log(arr.join([' ']))

// let sentences = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum accusamus quas, dolores at ut, provident labore reiciendis dolore molestiae doloribus corrupti tempora perspiciatis eaque incidunt libero. Neque molestias architecto numquam!"
// let index = sentences.indexOf("dolor")
// let lastIndexOf = sentences.lastIndexOf("amet")
// console.log(index)
// console.log(lastIndexOf)
// ----------------------------------------
// let stringAsli = "javascript"
// let stringBaru = (stringAsli.replace('j','J'))
// console.log(stringBaru)

// let float = 123.123123130
// console.log(float.toPrecision(4))

// let int = 123.123443
// console.log(int.toFixed(4))

// console.log(Math.PI)
// console.log(Math.E)

// Metode Math

// console.log(Math.abs(-7))
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(16))
// console.log(Math.cbrt(8))
// console.log(Math.max(1,20,6,40,80))
// console.log(Math.min(1,20,6,40,80))

// console.log(Math.round(3.6))
// console.log(Math.ceil(3.0001))
// console.log(Math.floor(4.9))
// console.log(Math.trunc(4.9999))
// console.log(Math.round(Math.random() * 100))
// ----------------------------------------
// let now = new Date()
// console.log(now)

// let customDate = new Date(2007, 0, 13, 10, 30, 20)
// console.log(customDate)

// let now = new Date()
// now.setFullYear(2026)
// console.log(now)

// let specificDate = new Date()
// specificDate.setMonth(7)
// console.log(specificDate)

// let now = new Date(2026, 0, 13, 4, 30 )
// console.log(now)

// let now = new Date();
// console.log(now.getFullYear());

// let startDate = new Date(2026, 03, 29, 10, 30);
// let endDate = new Date(2026, 04, 10, 10, 30);
// let diff = endDate - startDate;
// console.log(diff / (1000 * 3600 * 24));
// ----------------------------------------
// let fruits = ["Banana", "Orange", "Apple"]
// fruits[0] = "Mango"
// console.log(fruits)
// ----------------------------------------
// let num = new Array(1,2,3,4,5)
// console.log(num)
// ----------------------------------------
// let numbers = [1,2,3,4]
// let numbers2 =[5,6,7,8]
// let newNumbers = numbers.concat(numbers2)
// console.log(newNumbers)
// console.log(newNumbers.slice(2,6))
// ----------------------------------------
// newNumbers.push(9)
// newNumbers.splice(9,1,10)
// console.log(newNumbers)
// ----------------------------------------
// let buku = {
//     judul: "JavaScript",
//     penulis: "Fernanda",
//     tahun: 2026
// }
// console.log(buku["judul"])
// ----------------------------------------
// let buku = new Object()
// buku.judul = "JavaScript"
// buku.penulis = "fernanda"
// console.log(buku.penulis)
// console.log(buku.judul)
// ----------------------------------------
// let {judul, penulis} = buku
// console.log(judul)
// ----------------------------------------
// let score = 60;
// if (score >= 90){;
//     console.log('Grade: A');
// } else if(score >= 80){;
//     console.log('Grade: B');
// } else if(score >= 70){;
//     console.log('Grade: C');
// } else if(score >= 60){;
//     console.log('Grade: D true');
// }
// ----------------------------------------
// let num = -2
// if (num>0){
//     if(num % 2 == 0){
//         console.log('bilangan ini positif dan bilangan genap')
//     } else{
//         console.log('bilangan ini positif dan bilangan ganjil')
//     }
// } else{
//     console.log('bilangan ini negatif')
// }
// ----------------------------------------
// const hari = 4;
// let namaHari;

// switch(hari){
//     case 1:
//         namaHari="Senin";
//         break;
//     case 2:
//         namaHari="Selasa";
//         break;
//     case 3:
//         namaHari="Rabu";
//         break;
//     case 4:
//         namaHari="Kamis";
//         break;
//     case 5:
//         namaHari="Jumat";
//         break;
//     case 6:
//         namaHari="Sabtu";
//         break;
//     case 7:
//         namaHari="Minggu";
//         break;
//     default:
//         console.log("Hari Ini Tidak Valid")
// }
// console.log(namaHari)
// ----------------------------------------
// let score = 80;
// switch(true){
// case score >= 90:
//     console.log('Grade: A');
//     break
// case score >= 80:
//     console.log('Grade: B');
//     break
// case score >= 70:
//     console.log('Grade: C');
//     break
// case score >= 60:
//     console.log('Grade: D');
//     break
// case score >= 50:
//     console.log('Grade: E');
//     break
// default:
//     console.log('Grade: F');
// }
// ----------------------------------------
// let nilai = 60;

// if(nilai >= 90){
//     console.log('Grade: A');
// } else if(nilai >= 80){;
//     console.log('Grade: B');
// } else if(nilai >= 70){;
//     console.log('Grade: C');
// } else if(nilai >= 60){;
//     console.log('Grade: D');
// } else if(nilai >= 50){;
//     console.log('Grade: E');
// };
// ----------------------------------------
// For Loop

// for(i = 1; i <= 10; i++){
//     console.log(`Orang ke-${i} dengan for loop`)
// }
// ----------------------------------------
// While-Loop

// let y = 1;

// while(y <= 10){
//     console.log(`Orang ke-${y} dengan while loop`)
//     y++
// }
// ----------------------------------------
// Do-While-Loop

// let i = 1;

// do{
//     console.log(`Orang ke-${i} dengan do-while loop`)
//     i++
// }while(i <= 10)
// ----------------------------------------
// For-In-Loop

// const object ={nama: "nande", umur: 18, tinggi: 179}

// for(let property in object){
//     console.log(property)
//     console.log(object[propert   y])
// }
// ----------------------------------------
// For-Of-Loop

// let sum = 0
// const array = [1,2,3,4,5,6,7,8]

// for(let nilai of array){
//     sum = sum + nilai
// }
// console.log(sum)
// ----------------------------------------
// Challenge For-Loop

// for(let i = 1; i <= 10; i++){
//     if(i === 5){
//         continue;
//     }
//     console.log(i)
// }
// ----------------------------------------
// function sapaNama(nama){
//     console.log(`hello, ${nama} !`)
// }
// console.log(sapaNama("Udin"))

// function sapaSemua(){
//     console.log("Halo semua")
// }
// sapaSemua()
// ----------------------------------------
// function kuadrat(z,x){
//     console.log(z*x)
// }
// kuadrat(5,5)
// ----------------------------------------
// function kuadrat(a,b){
//     console.log(a*b)
// }
// kuadrat(3,4)
// ----------------------------------------
// Challenge Function

// function bagi(a,b){
//     return a/b
// }
// let bagi2 = bagi(10,2)
// console.log(bagi2)
// ----------------------------------------
// let kali = function(a,b){
//     return a*b
// }
// console.log(kali(4,5))
// ----------------------------------------
// let kali = (a,b,c,d) => a*b*c*d
// console.log(kali(2,2,2,2))
// ----------------------------------------
// (function(){
//     console.log("IIFE HAS BEEN ACTIVATED")
// })()

// const appConfig = (function(){
//     const apiKey = "1243"
//     const apiURL = "https://api.example.com"

//     return {
//         getApiKey: function(){
//             return apiKey
//         },
//         getApiURL: function(){
//             return apiURL
//         }
//     }
// })()
// console.log(appConfig.getApiKey())
// console.log(appConfig.getApiURL())
// ----------------------------------------
// Ini function Callback

// function fungsi(tugas, callback){
//     console.log("Menyelesaikan Tugas: ", tugas)
//     callback()
// }
// function fungsi1(){
//     console.log("tugas selesai!")
// }
// fungsi("JavaScript", fungsi1)

// function orang(output,callback){
//     console.log('output: ', output)
//     callback()
// }
// function orang2(){
//     console.log('connected')
// }
// orang('Keyboard', orang2)

// function namaSaya(nama, callback){
//     console.log("Nama: ", nama)
//     callback()
// }
// function eksekusi(){
//     console.log("lulus")
// }
// namaSaya("Fernanda Najmi", eksekusi)
// ----------------------------------------
// function faktorial(n){
//     if(n === 0){
//         return 1;
//     }
//     console.log(n)
//     return n * faktorial(n-1)
// }
// console.log(faktorial(5))
// ----------------------------------------
// const pangkat = (base, eksponen)=>{
//     return base**eksponen
// }
// let hasil = pangkat(2,3)
// console.log(hasil)
// ----------------------------------------
// document.getElementById('addButton').addEventListener('click',()=>{
//     const inputText = document.getElementById('inputText').value;
    
//     if(inputText === "") return;

//     const li = document.createElement('li')
//     li.textContent = inputText;

//     const deleteButton = document.createElement('button')
//     deleteButton.textContent = "hapus"
//     deleteButton.addEventListener('click',()=>{
//         li.remove()
//     })

//     li.appendChild(deleteButton);

//     document.getElementById('itemList').appendChild(li);

//     document.getElementById('inputText').value = ''

// })
// ----------------------------------------
// let names = [
//     "John","Doe","Rusdi","Bahlil"
// ]
// names.push("Amba")
// console.log(names)
let load = 100;

if(load >= 100){
    console.log("Loading Complete")
}else if(load < 100){
    console.log("Waiting a moment...")
}