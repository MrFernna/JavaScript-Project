const inputUsername = document.querySelector(".input-username")
const inputPassword = document.querySelector(".input-password")
const EnterBtn = document.querySelector(".button")

EnterBtn.addEventListener('click',()=>{
    console.log(`Username: ${inputUsername.value}`)
    console.log(`Password: ${inputPassword.value}`)
    inputUsername.value = ""
    inputPassword.value = ""
})