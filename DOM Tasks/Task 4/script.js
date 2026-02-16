var btn = document.querySelector("#right")
var btn2 = document.querySelector("#left")
var box = document.querySelector(".box")

let rot = 0
btn.addEventListener("click",()=>{
    if(rot == 0){
        box.style.rotate = "45deg"
        rot = 45
    }
    else if(rot == 45){
        box.style.rotate = "90deg"
        rot = 0
    }
})
btn2.addEventListener("click",()=>{
        if(rot == 0){
        box.style.rotate = "-45deg"
        rot = 45
    }
    else if(rot == 45){
        box.style.rotate = "-90deg"
        rot = 0
    }
})