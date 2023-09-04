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

const secretNumber=Math.trunc(Math.random()*20) + 1
document.querySelector(".number").textContent = secretNumber

document.querySelector(".check").addEventListener("click", ()=>{
    const guess = Number(document.querySelector(".guess").value)
    // console.log(guess, typeof guess)
    if(!guess){
        document.querySelector(".message").textContent = "No Number !!!"
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent="correct number !!";

    }
    else if(guess>secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent="Too High !!";
        score--
        document.querySelector(".score").textContent = score
        }
        else{
            document.querySelector(".score").textContent = 0
            document.querySelector('.message').textContent="You lost the game!!!";
        }
    }
    else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent="Too Low !!";
            score--
            document.querySelector(".score").textContent = score
        }
        else{
            document.querySelector(".score").textContent = 0
            document.querySelector('.message').textContent="You lost the game!!!";
        }
    }
    // document.querySelector(".message").textContent = "Correct Number !"
})