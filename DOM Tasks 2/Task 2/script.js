
let body = document.querySelector("body")

let addBtn = document.createElement("button")
addBtn.classList.add("btn")
addBtn.textContent = "Add Box"



body.appendChild(addBtn)


addBtn.addEventListener("click",()=>{
    let box = document.createElement("div")
box.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;

    box.style.height = Math.floor(Math.random()*201)+"px"
    box.style.width = Math.floor(Math.random()*201)+"px"
    body.appendChild(box)
}) 