//print
console.log("Hello everyone , i am learning javascript.");

//variable
age = 24; //declaration
console.log(age);
name = "sakshi";
console.log(name);

/* VARIABLE:-
write in camel case
NULL , Undefined ,boolean
dynamically typed language -> no need to declared datatype(automatically identified at run time)
variable valid->case sensitive,only letter,underscore,$
invalid->no special character,no space ,reserved word,digit starting 

do not directly assign values to variable it as bad practice so instead use keywords->var(redeclaration allowed,global scope),let(redeclaration not allowed , block scope),const(unchanged)
*/
let fullName ="sakshi jagtap";
console.log(fullName);

/* DATA TYPE:- typeof student
1)primitive(7)->number,string,boolean,undefined, Null,bigint,symbol
2)non primmitive->object

example 
student->name,roll no,marks,ispass
key:value store
access-> student["fullName"],student.fullName

*/

const student = {
    name:"sakshi",
    age:22,
    cgpa:8.7,
    isPass:true
}



