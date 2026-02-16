// MAIN ARRAY USED IN MOST QUESTION :

let arr = [2,1,5,100,8,60]



//1. Write a function that uses `forEach()` to calculate the total sum of an array. 

function totalSum(a){
    let total = 0;
    a.forEach((element) => {
        total = total+element
    });
    return total;
}
console.log("total sum of array :" ,totalSum(arr));

// 2. Write a function that uses `map()` to return a new array where each number is squared.

function squared(b){

   let bSq =  b.map((elem)=>{
        return elem*elem;
    })
    return bSq

}
console.log("sqaure of array :" ,squared(arr));

// 3. Write a function that uses `filter()` to return only numbers greater than 50.

function greaterthan50(c){
 let cG50 =    c.filter((x)=>{
        return x>50
    })

    return cG50;
}
console.log("greater than 50 :" ,greaterthan50(arr));

// 4. Write a function that checks whether two values are strictly equal using `===`.

let a = 50
let b = '50'

function strictCheck(a, b){
    if(a===b){
        return true
    }
    else{
        return false
    }

}
console.log("check by === :",strictCheck(a,b));

// 5. Write a function that demonstrates array mutability by modifying the original array using `push()`.
 
console.log("before push :" ,arr);

function mutability(arr){
    arr.push(100)
    console.log("after push :" , arr);
}
mutability(arr)

arr.pop()
console.log("used pop :",arr);
// so that remaining questions not affected by push


// 6. Write a function that removes the last element immutably (without modifying original array).

function immutableRemove(arr){
    console.log("used slice :",arr.slice(0, arr.length-2));    
}
immutableRemove(arr)


// 7. Write a function that sorts numbers in ascending order using a proper compare function.

function acsending(arr){
    console.log("sorted arr :",arr.sort((a,b)=> a-b));
}
acsending(arr)

// 8. Write a function that sorts strings alphabetically.

let strArr = ['harshit' , 'akshat ', 'pankaj', 'sakshi' ]
function acsending(arr){
    console.log("sorted arr :",arr.sort());
}
acsending(strArr)


// 9. Write a function that reverses an array without using `reverse()`.

function reverseWOreverse(arr){
    let reversedArr = []  

    for(let i = arr.length-1; i>=0 ; i--){
        reversedArr.push(arr[i])
    }
    return reversedArr

}
console.log("reverse array without reverse()", reverseWOreverse(arr));

// 10. Write a function that merges two arrays using `concat()` and returns the result.

let arr2 = [1, 4,5 ,6,76,7 ,3]

function concatinate (arr,arr2){
   let mergedArr =  arr.concat(arr2)
   return mergedArr
}
console.log("merge arrays :",concatinate(arr, arr2));

// 11. Write a function that merges two arrays and removes duplicate values.

function concatinateRemove (arr,arr2){
   let mergedArr =  arr.concat(arr2)
   let duplicateRemove = []
   for(let i = 0 ;i<mergedArr.length; i++){
    let isDuplicate = false
    for(let j = i+1 ; j<mergedArr.length; j++){
        if(mergedArr[i] === mergedArr[j] ){   
            isDuplicate = true 
            break
    }
   }
   if(!isDuplicate){
    duplicateRemove.push(mergedArr[i])
   }
}
  return duplicateRemove
}
console.log("removed duplicates :", concatinateRemove(arr, arr2));


// 12. Write a function that manually checks whether a value exists in an array (without using `includes()`).

function checkValue(arr, value){

    let exist = false
    arr.forEach((elem)=>{
        if(elem === value){
            exist = true
        }
    })
    return exist
}

console.log("checked wether value is in array or not", checkValue(arr, 200));

//13. Write a function that uses `includes()` to check if an array contains a specific value.

function checkWinclude(arr, value){
return arr.includes(value)
}
console.log("check by includes :",checkWinclude(arr,100));

// 14. Write a function that filters strings starting with "A" using `startsWith()`.
let Stringarr = ['Harshit', 'Arpit'];

function startWith(arr) {
    return arr.filter(elem => elem.startsWith('A'));
}

console.log("starts with A :", startWith(Stringarr));
;

// 16. Create an object and write a function that returns all its keys using a loop.

let obj = {
    name: 'harhsit',
    age : 30,
    school : 'bhopal',
    city : 'popular'

}

function getKeys(object) {
    let keys = [];

    for (let key in object) {
        keys.push(key);
    }

    return keys;
}

console.log("keys using let key in obj",getKeys(obj));

// 17. Write a function that adds a new property to an object immutably.

function addProp(){
    let obj2 = { ...obj, a: 'b' };
    return obj2;
}
console.log(addProp());

// 18. Write a function that updates a property in an object.

function updateProp(){
    obj.age = 70
    return obj
}
console.log(updateProp());

// 19. Write a function that checks whether a specific key exists inside an object.

function checkKey(obj,givenKey){
    let exist = false
        for (let key in obj) {
      if(key === givenKey ){

        exist = true
      }
       
    }
    return exist

}
console.log(checkKey(obj,'name'));


// 20. Write a function that converts an object into an array of key-value pairs.

function keyValue(obj){
console.log(Object.entries(obj));


}

keyValue(obj)