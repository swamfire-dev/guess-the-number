'use strict';
/*
//DOM -> Document Object Models
console.log(document.querySelector(".message").textContent)
document.querySelector(".message").textContent = "Correct Number !"
// console.log(document.querySelector(".message").textContent)
document.querySelector(".number").textContent = 13
document.querySelector(".score").textContent = 10

console.log(document.querySelector(".guess").value)
document.querySelector(".guess").value = 23
console.log(document.querySelector(".guess").value)
*/

// console.log(document.querySelector(".check"))
// document.querySelector(".check").addEventListener("click", function(){
//     console.log(document.querySelector(".guess").value)
// })
let score = 20
let secretNumber=Math.trunc(Math.random()*20) + 1
let highscore = 0

const displayMessage = function(message){
    document.querySelector(".message").textContent = message
}

document.querySelector(".again").addEventListener("click", ()=>{
    // document.querySelector('.message').textContent="Again clicked !!";
    score=20
    secretNumber = Math.trunc(Math.random()*20) + 1
    // document.querySelector('.message').textContent= "Start Guessing ..."
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
    // console.log(guess, typeof guess)
    if(!guess){
        // document.querySelector(".message").textContent = "No Number !!!"
        displayMessage("No Number !!!")
    }
    else if(guess === secretNumber){
        // document.querySelector('.message').textContent="correct number !!";
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
            // document.querySelector('.message').textContent="You lost the game!!!";
            displayMessage("You lost the game!!!")
        }
    // else if(guess>secretNumber){
    //     if(score > 1){
    //     document.querySelector('.message').textContent="Too High !!";
    //     score--
    //     document.querySelector(".score").textContent = score
    //     }
    //     else{
    //         document.querySelector(".score").textContent = 0
    //         document.querySelector('.message').textContent="You lost the game!!!";
    //     }
    // }
    // else if(guess<secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent="Too Low !!";
    //         score--
    //         document.querySelector(".score").textContent = score
    //     }
    //     else{
    //         document.querySelector(".score").textContent = 0
    //         document.querySelector('.message').textContent="You lost the game!!!";
    //     }
    // }
    // document.querySelector(".message").textContent = "Correct Number !"
})