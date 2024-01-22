/*
for loop(same as used in cpp)

while loop

do while loop

for-of loop(string and arrays ke upar use karte hai)
syntax:-
  for(let val of StringName)
  {
    statement
  }
  #do not used in case of object.

for-in loop(object,array)
syntax:-
  for(let key in objVar)
  {
    Statement
  }
*/
for(let i=1;i<=5;i++)
{
    console.log("Sakshi Jagtap");
}

//sum of first five number
let sum =0;
for(let i=0;i<5;i++)
{
    sum = sum+i;
}
console.log("sum :",sum);

//infinite loop avoid

//while
let i=1;
while(i<=5)
{
    console.log("Love javascript");
    i++;
}

//do while at least once it run
let j=0;
do
{
console.log(j);
j++;
}
while(j<5);

//for-of
let str = "i love javascript";
let length =0;
for(let m of str)
{
    console.log("m=",m);
    length++;
}
console.log("length=",length);

//for-in
let student = {
    name:"sakshi jagtap",
    age: 21,
    cgpa:8.65,
    isPass:true
};

for(let key in student)
{
    console.log("key=",key,"value=",student[key]);
}

