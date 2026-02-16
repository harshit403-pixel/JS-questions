var write = document.querySelector("input")
var para = document.querySelector("p")

write.addEventListener("input",(dets)=>{
    para.innerHTML = dets.target.value
})