console.log("student's name");

let division = document.querySelector("#special");

division.style.color = "olive";

//select s3

let s3 = document.querySelector(".s3");

s3.style.color = "magenta";
s3.style.fontSize = "30px";

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
