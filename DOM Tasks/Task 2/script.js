var btn = document.querySelector("button")
var box = document.querySelector(".box")

clickCount = 1

btn.addEventListener("click",()=>{

    if(clickCount == 1){
        box.style.backgroundColor = "red"
        clickCount = 2
    }
    else if(clickCount == 2){
        box.style.backgroundColor = "green"
        clickCount = 3
    }
    else if(clickCount == 3){
        box.style.backgroundColor = "blue"
        clickCount = 1
    }
})

