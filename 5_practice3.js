//problem1:we are given array of marks of student.filter out the marks of student that scored 90+

let marks=[70,80,90,100];
 
let topper =marks.filter((val)=>{
    return val>90; //true /false
})

console.log(topper);

//problem2:take number n from user create an array from 1 to n use reduce method to calculate sum of all element and also product of all element

let input =prompt("Enter Number Of Element:");
let arr=[];
for(let i=1;i<=input;i++)
{
    arr[i-1] =i;
}

const sum =arr.reduce((pre,curr)=>
{
    return pre+curr;
})

console.log("sum of element:",sum);

const multi =arr.reduce((pre,curr)=>{
    return pre*curr;
});
console.log("multiplication is",multi);
