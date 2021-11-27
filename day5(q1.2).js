//2.program to convert all the strings to title caps in a string array using anonymous function

let arr=["tom","john","paul","tim","ram"]

let titlecaps=function(d) {
    let x=[];
    let cap=(y) =>
    {
        return y.charAt(0).toUpperCase()+y.slice(1);

    }
for (let i=0;i<d.length;i++)
{
x[i]=cap(d[i]);
}
console.log(x);
}
titlecaps(arr);


//program to convert all the strings to title caps in a string array using IIFE function

(function(data){
    let result=[];
    for(let index in data){
        let firstletter =data[index][0].toUpperCase();
        let restletters= data[index].slice(1)
        result.push(firstletter+restletters)
    }
    console.log(result)
})(["tom","john","paul","tim","ram"]);