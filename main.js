const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleClick(event){
event.preventDefault()

const inputNumber = document.querySelector("#inputNumber").value

if(Number(inputNumber) == randomNumber){
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
}

xAttempts++
}

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', function(){
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    xAttempts = 1
})

