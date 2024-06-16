console.log("Allen A");
console.log("====Example 1: for loop as a counter ====");

let i = 1;
for (i; i < 5; i++) {
  console.log(`iteration = ${i}`);
}

console.log("==== Example 2: for loop as a decrement counter =====");
//create a loop counter from 10 to 0
for (let n = 10; n >= 0; n--) {
  console.log(`iteration = ${n}`);
}

console.log("==== Example 3: condition inside the loop ====");
//check how many even numbers are in between -5 and 5
let counter = 0;
for (let m = -5; m < 5; m++) {
  console.log(`iteration = ${m}`);
  if (m % 2 === 0 && m !== 0) {
    counter++;
  }
}
console.log(`There is/are ${counter} even numbers`);

console.log("==== Example 4: while loop as a counter =====");
// display number from 0-4
let p = 0;
while (p <= 4) {
  console.log(`iteration = ${p}`);
  p++;
}

console.log("==== Example 5: while loop application =====");
// guess number game
const SECRET = 8;
let guessnumber = parseInt(prompt("Guess a number between 1 and 10"));
while (guessnumber !== SECRET) {
  //console.log(`${guessnumber} is a wrong guess, try again!`)
  guessnumber = parseInt(prompt("Guess another number between 1 and 10"));
}
console.log(`Great! You guessed it right! the number is ${SECRET}`);

console.log("==== Example 6: while loop application in a list=====");
let colors = ["megenta", "olive", "babyblue"]; // index 0,1,2
let sizeofcolors = colors.length;
let index = 0;
while (index < sizeofcolors) {
  console.log(colors[index]);
  index++;
}
console.log("==== Example 7: while loop to simulate a password log-in=====");
// terminate the loop if password fails in three attempts
const password = "peterpan";
let userpassword = prompt("Enter a password");
let numberattempt = 0;
while (userpassword !== password) {
  numberattempt++;
  if (numberattempt > 2) {
    console.log("Your account is locked!");
    break;
  }
  userpassword = prompt(
    `Attempt = ${3 - numberattempt} left, Enter password again`
  );
}
console.log("Have a good day!");

console.log(
  "==== Example 8: do-while loop to simulate a withdraw from a bank account====="
);
// user try to widthraw money from an account with balance of $1000.
let balancee = 1000;
let widthdraw = 0;
do {
  widthdraw = parseInt(prompt("How much do you want to widthdraw?"));
  if (widthdraw <= balancee) {
    balancee = balancee - widthdraw;
    break;
  } else {
    console.log("Insufficient amount, try again!");
  }
} while (widthdraw > balance);
console.log(`Your new balance is ${balancee}`);

console.log("==== Exercise: simulate a bank transaction =====");

const pin = 6789; // The correct PIN
let balance = 1000; // Initial balance
let pinAttempts = 0;

while (true) {
  let askPin = parseInt(prompt("Enter your 4-digit PIN:"));
  pinAttempts++;

  if (askPin === pin) {
    let transaction = prompt(
      "Choose a transaction: (balance, deposit, withdraw)"
    );

    switch (transaction) {
      case "balance":
        console.log("Your balance is:", balance);
        break;
      case "deposit":
        let depositAmount = parseInt(
          prompt("Enter the amount you want to deposit:")
        );
        if (depositAmount > 0) {
          balance += depositAmount;
          console.log("Deposit successful. New balance is:", balance);
        } else {
          console.log(
            "Invalid deposit amount. Please enter a positive number."
          );
        }
        break;
      case "withdraw":
        let withdrawAmount = parseInt(
          prompt("Enter the amount you want to withdraw:")
        );
        if (withdrawAmount > 0 && withdrawAmount <= balance) {
          balance -= withdrawAmount;
          console.log("Withdrawal successful. New balance is:", balance);
        } else {
          console.log(
            "Invalid withdrawal amount. Please enter a positive number less than or equal to your balance."
          );
        }
        break;
      default:
        console.log("Invalid transaction choice.");
    }

    let anotherTransaction = prompt(
      "Do you want another transaction? (yes/no)"
    );

    if (anotherTransaction === "yes") {
    } else {
      console.log("Thank you for using the service!");
    }
    break;
  } else if (pinAttempts > 2) {
    console.log("Your account is locked!");
    break;
  } else {
    console.log(`Attempt ${3 - pinAttempts} left, Enter password again`);
  }
}
