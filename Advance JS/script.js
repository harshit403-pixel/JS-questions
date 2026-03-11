// 1---
//2--------
//6----------
let res = fetch("https://jsonplaceholder.typicode.com/users")

// do baar . then chalaenge because fetch is low level connected to browser do promises return horhi hai anbsically pwhli bar response dusri baar JSON promsie
res.then((val)=> val.json())
 .then((val) => console.log("ANS 1 and 2 :",val))
  .catch((erorr)=> console.log(erorr))

//3----------

let cloths = fetch("https://fakestoreapi.com/products")

let resObj = cloths.then((val)=> console.log("object before data",val)) 

cloths.then((val)=> val.json()).then((val)=> console.log(val)) 

//4------

let data = fetch("https://fakestoreapi.com/products")

data.then((val)=> val.json())
  .then((val)=>{
    console.log("data loading")
    console.log("data is here",(val))
    console.log("data loaded")
  })
//5------

let users = fetch("https://fakestoreapi.com/products") 

let userdata = users.then((val)=> val.json()).then((val)=> console.log("total users :",(val.length))
)


// ## Promises (.then / .catch)

// 7-----------
//this is promise without any handler toh siidhe main stack mai jaega and sabse pehle chalega
let promHello = new Promise((resolve, reject) => {
    
   resolve ("hello")
})

promHello.then((val)=>console.log("ques 7 :",val))
 
//8=---------------

let promWrong = new Promise((resolve, reject) => {
    
  reject("Something Went Wrong")
})

promWrong.catch((val)=> console.log("ques 8: ", val) 
)

//9------------
let promThen =  new Promise((resolve, reject) => {
    resolve("2 then hai isme")
})
promThen.then((val)=>{
    console.log("1st then : ",val)
}) .then(()=>{

    console.log("second then")
    
})
//10-------- 
    let promAfter = new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve ("after 2 secons")              // resolve hi 2 second baad kro 
        }, 2000);
    }) 
    

promAfter.then((val)=>console.log("ques 9 :",val))



// 11-----------
    let promChain = new Promise((resolve, reject) => {
        resolve("Step 1 done")
    }) 

    promChain.then((val)=>{
        console.log(val)
        return "Step 2 done"
        
    })
    .then((val)=>{
        console.log(val) 
        
    })




    // Async // Await

    // 12----------**12.** Convert the following code into `async/await`: `fetch(url).then(res => res.json()).then(data => console.log(data))`
    // 14 ----------------

    let dataAsync = fetch("https://fakestoreapi.com/users") 

    let resolver = async()=>{
        let result = await dataAsync
        let finalResult = await result.json()
        console.log("final result of 12 th question : ",finalResult)
        
    }

    resolver()
    

    
    // 13-----16------------

    let fetchData = async()=>{
        let getData = await fetch("https://fakestoreapi.com/users")
        let finalgetData = await getData.json()
        console.log("final data of ques 13 is : ",finalgetData)
        console.log("data recieved ques 16")
        
    
    }

    fetchData()

// 15-------
function waitOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Done after 1 second")
    }, 1000)
  })
}

let oneSecond = async()=>{
   let res =  await waitOneSecond()
   console.log(res)
   console.log("waited for 1 sec")
   
}

oneSecond()



//erorrr handling -----------

//17
try{
    let data = JSON.parse({name:"harshit",})
}
catch(erorrr){
    console.log("invalid json  data", erorrr) 
}


//18-----------

function alwaysError(){
        console.error("Invalid input")
}


    alwaysError()

// 19--------------

    try {
  throw new Error ("Failed")
} catch (error) {
  console.log("Error occurred")
} 


//20-------------
try {
  console.log("Trying something")
  throw new Error("Something failed")
} catch (error) {
  console.log("Error caught")
} finally {
  console.log("Always runs")
}

//21============
async function fetchUsers() {
  try {
let  res = await fetch("https://fakestoreapi.com/users")
    let data = await res.json()
    console.log("answer odf ques 21: ",data)
  } catch (error) {
    console.log("Fetch failed:", error)
  } 
}

fetchUsers()










// importing form utils.js

import {name} from "./util.js"

console.log(name) 

import addition from "./util.js"

console.log(addition(10,20)) 

