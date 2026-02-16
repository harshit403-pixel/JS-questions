var btn = document.querySelector("button")
var box = document.querySelector(".box")

isHidden = false

btn.addEventListener("click",()=>{
    if(!isHidden){
    box.style.display = "none"
    isHidden = true
}
else{
    box.style.display = "flex"
    isHidden = false
}
})