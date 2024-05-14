
const inputsenha = document.querySelector("#password")

function generatePassword(){
    
    const chars = "abcdefghijklmnpqrstuvxwyvABCDEFGHIJQLMNPQRSTUVXYWZ1234567898?!@&*()[]"

    let password = ""

    for(let i = 0; i <8; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber , randomNumber + 1)
    }
    inputsenha.value = password
}

function copy(){
  navigator.clipboard.writeText(inputsenha.value)
}

generatePassword()





