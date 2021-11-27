//1.program to find odd number using anonymous function
let odd = (arr) => {
    return arr.filter((n) => {
      for (let i = 0; i < arr.length; i++) {
        if (n % 2 === 0) {
          return false;
        }
      }
      return true;
    });
  };
  console.log(odd([1, 2, 3,4,5,6,7,8,9,10]));

//program to find odd number using IIFE function

(function (arr) {
    let odd = [];
    for (let i in arr) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
    }
    console.log(odd);
  })([1,2,3,4,5,6,7,8,9,10]);