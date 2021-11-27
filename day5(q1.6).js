//6.Return median of two sorted arrays of same size using anonymous function

let median = function(arr1,arr2){
    let temp = [...arr1,...arr2].sort((a,b)=>a-b);
    if (temp.length%2===0){
        let med2=temp[Math.floor(temp.length/2)];
        let med1=temp[Math.floor(temp.length/2)-1];
        console.log("the median is: "+(med2+med1)/2);
    }else{
        let med2=temp[Math.floor(temp.length/2)];
        console.log("the medianis:" +med2/2);
    }
};
console.log(median([1,2,3,4,5],[6,7,8,9,10]));

//Return median of two sorted arrays of same size using IIFE function

console.log((function(arr1,arr2){
    let temp = [...arr1,...arr2].sort((a,b)=>a-b);
    return temp[Math.floor(temp.length/2)]/2;
})([1,2,3],[4,5,6,7]));
