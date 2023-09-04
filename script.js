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

document.querySelector(".check").addEventListener("click", ()=>{
    const guess = Number(document.querySelector(".guess").value)
    // console.log(guess, typeof guess)
    if(!guess){
        document.querySelector(".message").textContent = "No Number !!!"
    }
    // document.querySelector(".message").textContent = "Correct Number !"
})