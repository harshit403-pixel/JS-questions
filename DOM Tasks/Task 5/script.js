var add = document.querySelector("#right")
var sub = document.querySelector("#left")
var num = document.querySelector("h1")

var currentNum = Number(num.innerHTML)
console.log(currentNum);

add.addEventListener("click", ()=>{
    num.innerHTML = currentNum+1
    currentNum++
})

sub.addEventListener("click",()=>{
    if(currentNum>0){
    num.innerHTML = currentNum-1
    currentNum--
    }
    else{
        num.innerHTML = "press add"
    }
})