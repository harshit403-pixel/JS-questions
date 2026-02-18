 let images = [
    "https://i.pinimg.com/1200x/01/b6/d1/01b6d174963d2a1e95a6e4cf410319cf.jpg",
    "https://i.pinimg.com/736x/04/7b/f5/047bf5edcb74d59d3108f9d5c2bdfd8d.jpg",
    "https://i.pinimg.com/736x/77/f1/7c/77f17c49786a142bcbb84b522d5842cb.jpg",
    "https://i.pinimg.com/736x/e4/fd/36/e4fd368cf4942f5aad3b2800d18bb6b5.jpg",
    "https://i.pinimg.com/736x/89/dd/eb/89ddebb4e8d6f6e00e9f11af8a28c5b0.jpg",
    "https://i.pinimg.com/736x/68/a7/39/68a739ee9fe997396263e982567d9e33.jpg",
    "https://i.pinimg.com/736x/f5/35/87/f535871c49372544a89504b5d16a690f.jpg",
    "https://i.pinimg.com/736x/d3/4b/5e/d34b5ed5022a8c36552be0c7d810c4d1.jpg"
 ]



 let box = document.querySelector(".box")
 
 let addBtn = document.querySelector("button")


 addBtn.addEventListener("click",()=>{
    let randomUrl = images[Math.floor(Math.random()*images.length)]
    console.log(randomUrl);
    let image = document.createElement("img")
    image.setAttribute("src", `${randomUrl}`)
    image.style.height = "200px"
    image.style.width = "200px"
    image.style.objectFit = "cover"
    image.style.borderRadius = "5px"
    box.appendChild(image)
    image.getAttribute("src")
    
 })

