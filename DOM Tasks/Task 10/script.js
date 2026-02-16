let red = document.querySelector("#stop")
let yellow = document.querySelector("#ready")
let green = document.querySelector("#go")

let redBox = document.querySelector(".red")
let yellowBox = document.querySelector(".yellow")
let greenBox = document.querySelector(".green")

red.addEventListener("click",()=>{
     yellowBox.classList.toggle("stop")
     greenBox.classList.toggle("stop")
     redBox.classList.toggle("stop")
})
yellow.addEventListener("click",()=>{
     redBox.classList.toggle("ready")
     greenBox.classList.toggle("ready")
     yellowBox.classList.toggle("ready")
})
green.addEventListener("click",()=>{
     yellowBox.classList.toggle("go")
     greenBox.classList.toggle("go")
     redBox.classList.toggle("go")
})