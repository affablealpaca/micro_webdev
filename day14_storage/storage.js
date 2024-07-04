/* Survey */

const myform = document.querySelector(".myform");
const displayresult = document.querySelector(".displayresult");

/* myform.addEventListener("submit", function (e) {
  displayresult.innerHTML = `Username: ${username.value}`;
}); */

myform.addEventListener("submit", function (e) {
  const username = document.querySelector("#firstname").value;
  const fav_language = document.querySelector(
    "input[name='fav_language']:checked"
  ).value;
  //test data collect

  /* event.preventDefault();
  displayresult.innerHTML = `Username: ${username} <br> Fav Web Language: ${fav_language}`;
   */

  // save the data, username and favorite language
  sessionStorage.setItem("firstname", username);
  sessionStorage.setItem("selection_language", fav_language);
  sessionStorage.setItem("product123", "Product Name");
});

/* Shopping cart */
//collect elements
const formitem1 = document.querySelector(".formitem1");
const itemname = document.querySelector(".itemname");
const itemdescription = document.querySelector(
  ".itemdescription_home"
).textContent;
const saleprice = document.querySelector(".saleprice").textContent;
const imgitem1 = document.querySelector(".imgitem1").getAttribute("src");

formitem1.addEventListener("submit", function () {
  //collect the quantity
  const x = document.querySelector(".quantityinput").value;

  // set data into sessionStorage
  sessionStorage.setItem("quantityitem1", x);
  sessionStorage.setItem("name_item", itemname);
  sessionStorage.setItem("description_item1", itemdescription);
  sessionStorage.setItem("sale_price", saleprice);
  sessionStorage.setItem("item_image", imgitem1);
});
