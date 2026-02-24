 let arr = [
    1,2,3,4,5,6,7,8,9
 ]

 function takeArr(arr){
     let avgtotal = 0

    arr.forEach(element => {
        avgtotal += element 
    
    });
    avgtotal = avgtotal/arr.length

   let newArr = arr.filter((elem)=>{
   return elem>avgtotal;
   })
   return newArr
 }

console.log(takeArr(arr));
