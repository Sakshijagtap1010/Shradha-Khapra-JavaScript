/*Function-> block of code that perform specific task can be invoked whenever needed
Syntax:-
 >function defination
 function functionName(){
    //statement
 }
 >function call
 functionName();
 
 Arrow function ->compact way to write function 
 */
console.log("hello!")

"abc".toUpperCase(); //builtin function

function myFunction()
{
    console.log("hello, Welcome All!");
}

myFunction(); //call

function Sum(a,b)
{
    //parameter->local variable of function 
    s=a+b;
    return s;
    //code after return are unreacable
}

console.log(Sum(10,17));

//Arraow Function->we are able to store function in variable

const arrowSum=(a,b) => {
    console.log(a+b);
}
console.log(arrowSum); //storing function defination in single variable

arrowSum(20,30); //callling