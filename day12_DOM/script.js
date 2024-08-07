console.log("student's name");

let division = document.querySelector("#special");

division.style.color = "olive";

//select s3

let s3 = document.querySelector(".s3");

s3.style.color = "magenta";
s3.style.fontSize = "30px";

let title = document.querySelector(h1);
title.setAttribute("class", "styletitle");

//select s4

let s4 = document.querySelector(".s4");
s4.style.backgroundColor = "lightgray";
s4.style.padding = "12 px";

//change text content
s3.textContent = "50%";
s4.innerHTML = "OFF by the <b><em>midnight</em></b>";

//className
let spans = document.querySelector("#special-span");
spans.className = "changefontfamily";

//remove a class name from an element
//remove the class 'info' from <div class="info">
let divmoreinfo = document.querySelector(".moreinfo");
divmoreinfo.classList.remove("info");

// append a text after <div id="special">
let divspecial = document.querySelector("#special");
divspecial.append("NEW INFORMATION");

// appendChild to add a new <li> to <ul class="todo">
// step 1) create <li> element
let newitem = document.createElement("li");

// step 2) give content to the new <li>
let newlist = document.createTextNode("Post students' grade");
newitem.appendChild(newlist);

// step 3) append as child the newitem into the document
// append to <ul class="todo">
let todolist = document.querySelector(".todo");
todolist.appendChild(newitem);

// remove an element using removeChild method
todolist.removeChild(todolist.children[1]);

// remove an element using remove method
// select the element that you want to remove and use the method remove
todolist.children[0].remove();
