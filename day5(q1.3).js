//3.Sum of all numbers in an array using anonymous function

let arr=[1,2,3,4,5];
let sum=function(s)
{
    console.log(s.reduce((ac,b)=>ac+b,0));
}
sum(arr);


//Sum of all numbers in an array using IIFE function

(function(arr){
   // for(i in arr);
    let y=arr.reduce((ac,b)=>ac+b,0);
    console.log(y);
})([1,2,3,4,5]);