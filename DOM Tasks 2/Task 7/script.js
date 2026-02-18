
let body = document.querySelector("body")

  let a =  Math.floor(Math.random()*10)
  let b =  Math.floor(Math.random()*10)
  let c =  Math.floor(Math.random()*10)
  console.log(a,b,c);
  
  if( a == b && b==c){
   let h1 = document.createElement("h1")
   h1.innerHTML = "JACKPOT"
   h1.style.color = "white"
   h1.style.fontSize = "200px"
   body.appendChild(h1)
  }
  

