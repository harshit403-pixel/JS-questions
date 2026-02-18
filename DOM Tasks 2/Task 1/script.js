let body = document.querySelector("body")

let mainbox = document.createElement("main")
mainbox.classList.add("mainstyle")

let center1 = document.createElement("div")
center1.classList.add("align")
let center2 = document.createElement("div")
center2.classList.add("align")


let dice01 = document.createElement("div")
dice01.classList.add("dice1")



let dice02 = document.createElement("div")
dice02.classList.add("dice2")


let btn1 = document.createElement("button")
btn1.textContent = "Roll"
btn1.classList.add("roll")

let h1 = document.createElement("h1")
let h2 = document.createElement("h1")
let h3 = document.createElement("h1")
let h4 = document.createElement("h1")

dice01.appendChild(h1)
dice01.appendChild(h3)
center1.appendChild(dice01)
mainbox.appendChild(btn1)

dice02.appendChild(h2)
dice02.appendChild(h4)
center2.appendChild(dice02)

mainbox.appendChild(center1)
mainbox.appendChild(center2)

body.appendChild(mainbox)


btn1.addEventListener("click",()=>{
    let a =  Math.floor(Math.random()*7)
        h1.textContent = a
    let b  = Math.floor(Math.random()*7)
        h2.textContent = b

        if(a==b){
            btn1.textContent ="try again"
                        h3.textContent = "DRAW"
            h4.textContent = "DRAW"
        }
        else if(a>b){
            h3.textContent = "Winner"
            h4.textContent = "loser"
            btn1.textContent ="Roll"
        }
        
        else{
            h4.textContent ="winner"
            h3.textContent = "loser"
            btn1.textContent ="Roll"
        }
})
