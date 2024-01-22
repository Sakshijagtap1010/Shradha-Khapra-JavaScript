/*Map 
>map function is very similar to map only kry differnce is it return new array
syntax:
arr.map(callbackFnx(val,index,array))
 */
let nums= [1,3,4,5,6];

let newArray = nums.map((val) =>{
    //console.log(val);
    return val*val;
});

console.log(newArray);

/*Filter method->create a new array of elements that give true for conditions /filter
eg:all even element
syntax:-
let newArr =arr.filter((val)=>{
    return val%2===0;
})
*/
let arr=[1,2,3,4,5,6,7,8,9];
let newArr =arr.filter((val)=>{
    return val%2===0;
})

console.log(newArr);

/*Reduce Method 
performs some operations  7 reduces the array to a single value. it returns that single value
*/
let numbers=[1,2,3,4];

const output =arr.reduce((res,curr)=>{
    return res>curr? prev : curr;
});
console.log(output);