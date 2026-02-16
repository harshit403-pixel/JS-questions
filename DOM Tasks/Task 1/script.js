var btn = document.querySelector("button")
var para = document.querySelector("p")

isClicked = false


btn.addEventListener("click",()=>{
    if(!isClicked){
        para.textContent = "Welcome"
        isClicked =true
    }
    else{
        para.textContent = "Hello"
        isClicked = false
    }
})

