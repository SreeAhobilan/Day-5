//4.Return all the prime numbers in an array
let prime = (data) => {
    return data.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(prime([1,2,3,4,5,6,7,8,9,10]));


//Return all the prime numbers in an array using IIFE function

(function (data) {
    let prime = [];
    for (let i=0;i<data.length;i++){
      if (data[i]===2){
        prime.push(data[i]);
        continue;
      }
      for (let j=2;j<data[i];j++){
        if(data[i] % j==0){
          break;
        }
        if(j===data[i]-1)
        prime.push(data[i])
      }
    }
    console.log(prime);
  })([1,2,3,4,5,6,7,8,9,10]);