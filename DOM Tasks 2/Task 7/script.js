
// let body = document.querySelector("body")

// let box1 = document.createElement("div")
// let box2 = document.createElement("div")
// let box3 = document.createElement("div")
// let box4 = document.createElement("div")
// let box5 = document.createElement("div")

// box1.setAttribute("data-id","1")
// box2.setAttribute("data-id","2")
// box3.setAttribute("data-id","3")
// box4.setAttribute("data-id","4")
// box5.setAttribute("data-id","5")

// box1.classList.add("box")
// box2.classList.add("box")
// box3.classList.add("box")
// box4.classList.add("box")
// box5.classList.add("box")

// body.appendChild(box1)
// body.appendChild(box2)
// body.appendChild(box3)
// body.appendChild(box4)
// body.appendChild(box5)



// box1.addEventListener("click",()=>{
//    box1.style.display = "none"
//    console.log(box1.getAttribute("data-id"));
// })
// box2.addEventListener("click",()=>{
//    box2.style.display = "none"
//    console.log(box2.getAttribute("data-id"));
// })
// box3.addEventListener("click",()=>{
//    box3.style.display = "none"
//    console.log(box3.getAttribute("data-id"));
// })
// box4.addEventListener("click",()=>{
//    box4.style.display = "none"
//    console.log(box4.getAttribute("data-id"));
// })
// box5.addEventListener("click",()=>{
//    box5.style.display = "none"
//    console.log(box5.getAttribute("data-id"));
// })




let body = document.querySelector("body");

for (let i = 1; i <= 5; i++) {

   let box = document.createElement("div");

   box.classList.add("box");
   box.setAttribute("data-id", i)

   body.appendChild(box);

   box.addEventListener("click", () => {
      box.style.display = "none";
      console.log(box.getAttribute("data-id"));
   });
 
}



