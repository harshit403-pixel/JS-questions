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
    console.log("used slice :",arr.slice(0, length-2));    
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
    console.log("sorted arr :",arr.sort((a,b)=> a-b));
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
console.log(concatinateRemove(arr, arr2));






