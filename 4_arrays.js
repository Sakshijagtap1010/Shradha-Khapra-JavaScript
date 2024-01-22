/*Array->collection of item
we can save differnet type of data in array in javascript. but we dont preffered it mostly save same type of data
>position matter karengi
>array is special type of object
*/

let marks = [96,12,75,67]; //creation
console.log(marks);
console.log(marks.length);

/*Array Indices
arr[0],arr[1],...store in linear fasion
array are mutable
*/
console.log(marks[0]);

marks[0] =75;
console.log(marks);

/*Looping over array
printing or iterable(string,object,array)->loops used 
 */

for(let i =0;i<marks.length;i++)
{
    console.log(marks[i]);
}
