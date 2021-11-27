//8. Rotate an array by k times and return the rotated array using anonymous function
let rotate = function(arr,d){
    let data ;
    for(let i=0;i<d;i++){
        data =arr.shift();
        arr.push(data);
    }
    return arr;
}
console.log(rotate([1,2,3,4,5,6],2));
// Rotate an array by k times and return the rotated array using IIFE function 
console.log((function(arr,d){
    let data ;
    for(let i=0;i<d;i++){
        data =arr.shift();
        arr.push(data);
    }
    return arr;
})([1,2,3,4],3));