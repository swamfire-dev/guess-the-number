'use strict';
let score = 20
let secretNumber=Math.trunc(Math.random()*20) + 1
let highscore = 0

const displayMessage = function(message){
    document.querySelector(".message").textContent = message
}

document.querySelector(".again").addEventListener("click", ()=>{
    score=20
    secretNumber = Math.trunc(Math.random()*20) + 1
    displayMessage("Start Guessing ...")
    document.querySelector(".score").textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""
    document.querySelector(".number").style.width = "15rem"
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".highscore").textContent = highscore
})

document.querySelector(".check").addEventListener("click", ()=>{
    const guess = Number(document.querySelector(".guess").value)
    if(!guess){
        displayMessage("No Number !!!")
    }
    else if(guess === secretNumber){
        displayMessage("Correct Number !!")
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber
        if (score >highscore ){
            highscore = score
            document.querySelector(".highscore").textContent = highscore
        }
    }
    else if(score > 1){
            document.querySelector('.message').textContent = guess>secretNumber?"Too High !!":"Too Low !!"
            score--
            document.querySelector(".score").textContent = score
            }
        else{
            document.querySelector(".score").textContent = 0
            displayMessage("You lost the game!!!")
        }
})