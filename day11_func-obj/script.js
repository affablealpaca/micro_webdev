/* 
student's full name 
June 15, function and object
*/

console.log("Student full name");

// function to print a something
function msg() {
  console.log("Hello World!");
}

// function to print numbers from 1 to 3, inclusive
function printcount() {
  for (let x = 1; x <= 3; x++) {
    console.log(x);
  }
}

// function that passes a name as argument
function greeting(name) {
  console.log("Welcome to JavaScript ${name}");
}

// function that passes multiple arguments
function fullname(firstname, lastname) {
  console.log("Welcome to JS ${firstname} ${lastname[0]}");
  //lastname[0] to print the first character of lastname
}
let firstname = "Martha";
let lastname = "Smith";

fullname(firstname, lastname);
function sumxy() {
  // any lines after the first return will not be executed
  x = x + 2;
  y = y + 5;
  return x + y;
}

// function with parameters and returns a value
function sum(x, y) {
  return x + y;
}

// calling sum()
let s = sum(5, 10);
console.log("The sum is ${s}");

// function check if a number is positive
function checkpositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

// call the function
let n = 2;
let check = checkpositive(n);
console.log("is number ${n} positive? ${checkpositive(n)}");

//save function in a variable

/* function sum = function(num1, num2){
return num1+num2
} */

const addition = function (num1, num2) {
  return num1 + num2;
};

//Arrow function
const product = (num1, num2) => {
  return num1 * num2;
};

//Anon function with immediate invoked function execution IFFE or IFFY

(function () {
  console.log("This is an Anon function");
})();

() => console.log("This is anon arrow function");

//OBJECTS

let car = {
  make: "Jeep",
  year: "2021",
  mode1: "Wrangler",
  startmilage: 10,
  endmilage: 50,

  //behavior (methods,function)

  accelerate: function () {
    return this.mode1;
  },

  brake: function () {
    return this.make;
  },

  distancetravel: function () {
    this.endmilage - this.startmilage;
  },
};

//add a method 'start' to the car object
car.start = function () {
  return `${this.make} ${this.model} is running`;
};

//add a propertt 'price'
car.price = 32000;
