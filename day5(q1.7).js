//7. Remove duplicates from an array using anonymous function

let remove = function(arr){
    return [...new Set(arr)];
}
console.log(remove(["tom","john","tom","tim","tom","ruby","tim"]));

//7. Remove duplicates from an array using IIFE function

console.log((function(arr){
    return[...new Set(arr)];
})([1,2,2,3,5,4,6,5,4]));
