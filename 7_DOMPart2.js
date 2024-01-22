/*DOM manupulation
Attributes
1>getAttribute(attr)
2>setAttribute(attr,value)

Style
1>node.style

Insert Element
let el = document.createElement("div")
1>node.append(el) //add at end (inside)
2>node.prepend(el) //at start(inside)
3>node.before(el) //(outside)
4>node.after(el) //outside

Delete
1>node.remove()

 */
let heading = document.querySelector("h2");
console.log(heading.setAttribute("class","newHeading"));

let id =heading.getAttribute("id");
console.log();

let div=document.querySelector("div");
console.log(div);
div.style.backgroundColor="red";


