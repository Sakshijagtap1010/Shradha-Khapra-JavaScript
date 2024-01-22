//array of item price on all item 10% off change the array to strre final price affter applying offer

let item=[250,645,300,900,50];

//calculating discound /final amount
for(let i=0;i<item.length;i++)
{
    item[i] =item[i] - item[i]*0.1;
    
}

//printing arrray
console.log(item);

/*Array Method
push(),pop(),toString().concat(),unshift()->same as push push element at start
shift()->pop strat se pop karna
slice()(do not change in original array),splice(startindex,deletecnt,newIndex)
*/
item.push(100,280,950);
console.log(item);
