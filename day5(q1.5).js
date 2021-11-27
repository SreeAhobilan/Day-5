//5.	Return all the palindromes in an array using anonymous function

let arr=["john","paul","peter","aba","abba"];

let palindrome= function (d) 
{
    return d.filter((x) =>
    {
        let y=x.split("").reverse().join("");
        if (y==x)
        {
            return true;
        }
        else return false;
    });
}
console.log(palindrome(arr));

//Return all the palindromes in an array using IIFE function

(function (arr) {
    data=[]
    for (let i in arr) {
    let y=arr[i].split("").reverse().join("");
    if (y==arr[i]){
        data.push(arr[i]);
    }
   // else return fa;
    }
    console.log(data);
  })(["john","paul","peter","aba","abba"]);