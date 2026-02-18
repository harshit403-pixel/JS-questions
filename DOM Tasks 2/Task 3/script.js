let result = document.querySelector("h2")

let num = prompt("Enter your number")
let random =  Math.ceil(Math.random()*50)

console.log("number :",num);
console.log("random: ", random);


if(num<=50 && num>0){

    if(num == random){

        console.log();
        
        result.innerHTML = "WINNERRRRRRRRR"

    }
    else{
        result.innerHTML = "TRY AGAIN"
    }

}
else{
   result.innerHTML = "TRY BETWEEN 1-50"
}



