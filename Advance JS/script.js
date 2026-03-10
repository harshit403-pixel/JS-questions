// 1---
//2--------
let res = fetch("https://jsonplaceholder.typicode.com/users")

// do baar . then chalaenge because fetch is low level connected to browser 
res.then((val)=> val.json()).then((val) => console.log(val))

//3----------

let cloths = fetch("https://fakestoreapi.com/products")

let resObj = cloths.then((val)=> console.log(val)) 

cloths.then((val)=> val.json()).then((val)=> console.log(val)) 


//4------

let users = fetch("https://fakestoreapi.com/products") 

let finalResult = users.then((val)=> val.json()).then((val)=> val.forEach(element => {
     
  
})) 

 



 