//finding odd numbers using  arrow
let arr=[1,2,3,4,5,6,7,8,9,10];

let odd=arr.filter(n=>n%2)
console.log(odd)


//Convert all the strings to title caps in a string array using arrow
let arr="welcome to javascript"

console.log(

    arr.split(' ')
       .map(n => n[0].toUpperCase() + n.substr(1).toLowerCase())
       .join(' ')
    
    )


//finding sum of the inputs in array using  arrow
let arr=[1,2,3,4,5,6,7,8,9,10];

let sum=arr.reduce((a,b) => a+b,0);
console.log(sum);


//finding prime numbers of the inputs in array using  arrow
let arr=[1,2,3,4,5,6,7,8,9,10];

let prime=arr.filter((n) => {
    for(let i=2;i<n;i++) if (n%i===0) return false;
    return n>1;
});

console.log(prime)


//finding palindrome of the inputs in array using  arrow
let arr=["aba","acca","add"];
console.log(arr[0].reverse)
let palindrome=arr.map((string) =>{
    let n=string.length;
    let i=0;
    n--;
    while(i<n) {
        if(string[i] !== string[n]) return false;
        i++;n--;
    }
    return true;
});

console.log(palindrome)