/*For Each Loop In Array
>also called as higher order function/methode->function take another function as parameter or return another function
>it is an method
>method are function we bind it with object
syntax:-
arr.forEach(callBackFunction)=>
{
    statement
}

CallBackFunctio : here, it is a finction to executr for each element in the array
callback function have 3 parameter val,index,arr
**imp**a callback  is a function passed as an argument to another function
*/

function abc()
{
    console.log("hello");
}

function myFunction(abc)
{
    return abc;
}

let arr = [1,2,3,4];
let city =["pune","mumbai","delhi"];

arr.forEach(function printVal(val)
{
    console.log(val);
});

city.forEach((val, idx ,city)=>{
    console.log(val.toUpperCase() , idx, city);
});

