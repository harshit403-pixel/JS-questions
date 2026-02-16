var mode = document.querySelector("#right")
var num = document.querySelector("h1")
var main = document.querySelector("body")
let bgcolor = "white"

mode.addEventListener("click",()=>{
    if(bgcolor == "white"){
        main.style.backgroundColor = "black"
        main.style.color = "white"
        bgcolor = "black"
        num.textContent = "Dark mode is on"
    }
    else{
        main.style.backgroundColor = "white"
        main.style.color = "black"
        bgcolor = "white"
        num.textContent = "White mode is on"
    }
})
