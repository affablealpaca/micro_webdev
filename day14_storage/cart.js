const priceitem_display = document.querySelector(".priceitem_display");
const quantity_display = document.querySelector(".quantity_display");
const totalprice_display = document.querySelector(".totalprice_display");
const itemimg = document.querySelector(".itemimg");
const itemdescription = document.querySelector(".itemdescription");

// get values for quantity and price per unit
const priceitem = sessionStorage.getItem("sale_price");
const quantityitem = sessionStorage.getItem("quantityitem1");
const itemimage = sessionStorage.getItem("item_image");
const description_item = sessionStorage.getItem("description_item1");

// calculate for the total price
const totalprice = (priceitem * quantityitem).toFixed(2);

// append image and itme description
let image = document.createElement("img");
image.src = sessionStorage.getItem("item_image");
image.style.width = "30px";

itemimg.append(image);

// append product description
let product = document.createElement("p");
product.innerHTML = description_item;
itemdescription.append(product);

// append price
let productprice = document.createElement("p");
productprice.innerHTML = priceitem;
priceitem_display.append(productprice);

// append quantity
let totalquantity = document.createElement("p");
totalquantity.innerHTML = quantityitem;
quantity_display.append(totalquantity);

// append total price
let t = document.createDocumentFragment("p");
t.innerHTML = `$ ${totalprice}`;
totalprice_display.append(t);
