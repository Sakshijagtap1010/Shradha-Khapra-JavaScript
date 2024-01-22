/*DOM->Document Object model
<style> css connect
<script> javascript connect
>window object contain all method
>dymamic change
eg:window.alert("hi")

window->document->html->head->meta,title,link
                      ->body->div,script
for making dynamic changes we use DOM 

html code in javascript convert as object called as document

//console.log(window);
//console.dir->document methods and properties

DOM manuplation
*selector
1> selecting with id: document.getElementById(" ")
2> Selecting with class: document.getElementByClassName(" ")
3> selecting with tag: document.getElementByTagName()
4> Query Selector->u can pass id tag class it detect by itself

*Properties (set and get value)
1> tagName
2> innerText->all children text
3> innerHTML->all child tag
4> textConternt->same innerText only difference is it can access hidden tag as well(i.e visiblity:hidden)
*/

// let heading=document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("headings")
// console.dir(headings); //return html collection same as array

let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);

let firstEle = document.querySelector("p");
console.dir(firstEle);

let allEle = document.querySelectorAll("p");
console.dir(allEle);