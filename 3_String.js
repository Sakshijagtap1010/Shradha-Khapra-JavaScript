//string-> sequence of character
let str ="sakshi"; //creation

console.log(str.length) //length

/*
str.length ->return length
str[position]-> acessing individual character

Template Literals -> special type of string->create backtags (``)
bar bar likhne se accha hai combined form ne likhe 
syntax:-
`string text ${expression} string text`->string interpolation
To create string by doing substitution of placeholder

escape character -> \n ->string ke andar nextline 
\t->tab
if we want to calculate length then it consider as sigle character
*/

let obj={
    item:"pen",
    price:10
};

let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

/* String Method
str.toUpperCase(),str.toLowerCase(),str.trim()(remove whitespace at start and end )
str.slice(start,end?),str1.concate(str2),str.replace(serchVal,newval),str.replaceAll(searVal,newVal),str.charAt(index)

>original string are immutable(unchanged)
 */

let string1 ="  ab cdefgd    ";

console.log(string1.toUpperCase());

console.log(string1.slice(0,5));

console.log(string1.trim());

console.log(str.concat(string1)); //concatination is also happened with + sign

console.log(string1.replace("d","l"));

console.log(string1.charAt(6));