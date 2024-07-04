let btn1 = document.querySelector(".btn1");

btn1.onclick = function () {
  alert("HEY THERE");
};

document.querySelector(".linkqcc").onmouseout = () => {
  alert("QCC LINK WAS TOUCHED");
};

//change color div
let colorcontainer = document.querySelector(".colorcontainer");
let btncolor = document.querySelector(".btncolor");

btncolor.addEventListener("click", function () {
  colorcontainer.style.backgroundColor = randomcolor();
});

let randomcolor = function () {
  let redvalue = Math.floor(Math.random() * 255);
  let greenvalue = Math.floor(Math.random() * 255);
  let bluevalue = Math.floor(Math.random() * 255);
  return `rgb(${redvalue},${greenvalue},${bluevalue})`;
};

let btnorange = document.querySelector(".btnorange");
let btnolive = document.querySelector(".btnolive");
let btnreset = document.querySelector(".btnreset");

btnolive.addEventListener("click", () => {
  colorcontainer.style.backgroundColor = "#808000";
});

btnorange.addEventListener("click", () => {
  colorcontainer.style.backgroundColor = "#FFA500";
});

btnreset.addEventListener("click", () => {
  colorcontainer.style.backgroundColor = "#f0f0f0";
});

/* event object */
// collect the button
let btnpressme = document.querySelector(".btnpressme");
btnpressme.addEventListener("click", function (e) {
  // switch text content 'btnpressme' button from 'Press Me' to 'Button was pressed'
  if (e.target.textContent == "Press Me!") {
    e.target.textContent = "Button was pressed";
  } else {
    e.target.textContent = "Press Me!";
  }
  // toggle between class 'btnpressme' and 'btnactive'
  e.target.classList.toggle("btnactive");
});

/* remove an item from a list */
let listfruits = document.querySelector("#listfruits");
listfruits.addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() == "li") {
    event.target.remove();
  }
});

/* prevent default of an event */
let visitqcc = document.querySelector(".visitqcc");
visitqcc.addEventListener("click", function (event) {
  event.preventDefault();
  alert("QCC website is off! Try later");
});

/* SCROLL EVENTS */
let content = document.querySelector("#content");
let btnscrollright = document.querySelector(".btnscrollright");
btnscrollright.addEventListener("click", function () {
  window.scrollBy(100, 0);
});

/* slice photo gallery */
let btnleft = document.querySelector(".btnleft");
let btnright = document.querySelector(".btnright");
let gallerycontainer = document.querySelector(".gallerycontainer");

btnleft.addEventListener("click", function () {
  gallerycontainer.scrollBy({
    left: -500,
    behavior: "smooth",
  });
});

btnright.addEventListener("click", function () {
  gallerycontainer.scrollBy({
    left: 500,
    behavior: "smooth",
  });
});

const gotop = document.querySelector(".gotop");
gotop.addEventListener("click", function () {
  let pxtop = window.scrollY;
  if (pxtop > -300) {
    gotop.style.display = "block";
  } else {
    gotop.style.display = "none";
  }
});

/* Thursday */

/* FORM EVENTS */
/* input event */
// get reference to the form elements
const myform = document.querySelector("#myform");
// get the <div class="greeting">
const greeting = document.querySelector(".greeting");
const greetingname = document.querySelector(".greeting p span");

form.addEventListener("submit", function (event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // start form validation, username
  const usernameinput = document.querySelector("#username");
  // collect the input text value
  const username = usernameinput.value;
  //validation 1 make sure username before submit
  if (username.trim() === "") {
    alert("Please enter a username");
    return; // stop further execution
  }

  // if the validation passed, you can submit the data to the server
  // greeting message after the validation
  greetingname.innerHTML = username;
  greeting.style.display = "block";
});
