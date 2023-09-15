//const
//objects
const fruites = {
  apples: { price: 52, amount: 61 },
  mango: { price: 120, amount: 73 },
  orange: { price: 20, amount: 3 },
  banana: { price: 12, amount: 352 },
};

const welcomeMsg = "";
//var
var amount = 0;
var totalBill = 0;
var shipping = 0;



setInterval(() => {
  var date = new Date();
  document.getElementById(
    "time"
  ).innerHTML = `<h1>${date.getHours()}: </h1><h2>${date.getMinutes()}: </h2><h3>${date.getSeconds()}</h3>`;
  // console.log(date);
}, 1000);

//windos method
window.onload = () => {
  let str = "Welcome ,To Fruit Shop".split("");

  const interval = setInterval(() => {
    let msg = (document.getElementById("welcome").innerHTML += str[0]);
    str = str.slice(1);

    if (!str.length) {
      clearInterval(interval);
    }
  }, 600);

  /**this method will set defaults */
  setAmmountAndPrices();
};
//functions
function addFruitToCart(pices, price) {

  let allreadyAmount = Number(document.getElementById("amount").innerHTML);

  console.log("allready:",allreadyAmount);

  var amount = allreadyAmount+(pices * price);
  var shipping = amount >= 250 ? 0 : 99;
  var totalBill = amount + shipping;
  document.getElementById("amount").innerHTML = amount;
  document.getElementById("shipping").innerHTML = shipping;
  document.getElementById("total-bill").innerHTML = totalBill;


  /**Promise
   * that everything is added to cart Successfully
   * now you can continue
   */
  return new Promise((resolve) => {
    resolve("Everything is added to cart nicely");
  });
}

function addMangoes() {
  //let
  let weHave = fruites.mango.amount;
  let cusWant = Number(document.getElementById("cust-mango-amount").value);
  if (cusWant  <= 0) {
    document.getElementById("mango-error").classList.add("text-danger");
    setTimeout(() => {
      document.getElementById("mango-error").classList.remove("text-danger");
    }, 1000);
  } else if (cusWant > weHave) {
    document.getElementById(
      "mango-error"
    ).innerHTML = `We have only ${weHave} Pc`;
    document.getElementById("mango-error").classList.add("text-danger");
  } else {
    if (confirm("Press Ok to Place Order ")) {
      let price = fruites.mango.price;
      /**
       * 
       * here is 
       * our
       * promise call
       * 
       */
      addFruitToCart(cusWant, price).then((msg) => {
        console.log("msg"+msg);
        let itemLeft = weHave - cusWant;
        fruites.mango.amount = itemLeft;
        document.getElementById("mango-ammount").innerHTML = fruites.mango.amount;
        document.getElementById("cust-mango-amount").value = 0;
      });
    }
  }

}
function addOranges() {
  let weHave = fruites.orange.amount;
  let cusWant = Number(document.getElementById("cust-orange-amount").value);
  if (cusWant  <= 0) {
    document.getElementById("orange-error").classList.add("text-danger");
    setTimeout(() => {
      document.getElementById("orange-error").classList.remove("text-danger");
    }, 1000);
  } else if (cusWant > weHave) {
    document.getElementById(
      "orange-error"
    ).innerHTML = `We have only ${weHave} Pc`;
    document.getElementById("orange-error").classList.add("text-danger");
  } else {
    if (confirm("Press Ok to Place Order ")) {
      let price = fruites.orange.price;
      addFruitToCart(cusWant, price);
      let itemLeft = weHave - cusWant;
      fruites.orange.amount = itemLeft;
      document.getElementById("orange-ammount").innerHTML =
        fruites.orange.amount;
      document.getElementById("cust-orange-amount").value = 0;
    }
  }
}
function addBananas() {
  let weHave = fruites.banana.amount;
  let cusWant = Number(document.getElementById("cust-banana-amount").value);
  if (cusWant  <= 0) {
    document.getElementById("banana-error").classList.add("text-danger");
    setTimeout(() => {
      document.getElementById("banana-error").classList.remove("text-danger");
    }, 1000);
  } else if (cusWant > weHave) {
    document.getElementById(
      "banana-error"
    ).innerHTML = `We have only ${weHave} Pc`;
    document.getElementById("banana-error").classList.add("text-danger");
  } else {
    if (confirm("Press Ok to Place Order ")) {
      let price = fruites.banana.price;
      addFruitToCart(cusWant, price);
      let itemLeft = weHave - cusWant;
      fruites.banana.amount = itemLeft;
      document.getElementById("banana-ammount").innerHTML =
        fruites.banana.amount;
      document.getElementById("cust-banana-amount").value = 0;
    }
  }
}

function addApples() {
  let weHave = fruites.apples.amount;
  let cusWant = Number(document.getElementById("cust-apple-amount").value);
  if (cusWant  <= 0) {
    document.getElementById("apple-error").classList.add("text-danger");
    setTimeout(() => {
      document.getElementById("apple-error").classList.remove("text-danger");
    }, 1000);
  } else if (cusWant > weHave) {
    document.getElementById(
      "apple-error"
    ).innerHTML = `We have only ${weHave} Pc`;
    document.getElementById("apple-error").classList.add("text-danger");
  } else {
    if (confirm("Press Ok to Place Order ")) {
      let price = fruites.apples.price;
      addFruitToCart(cusWant, price);
      let itemLeft = weHave - cusWant;
      fruites.apples.amount = itemLeft;
      document.getElementById("apple-ammount").innerHTML =
        fruites.apples.amount;
      document.getElementById("cust-apple-amount").value = 0;
    }
  }
}
//function
function setAmmountAndPrices() {
  //operations
  //events
  document.getElementById("apple-ammount").innerHTML = fruites.apples.amount;
  document.getElementById("apple-price").innerHTML = fruites.apples.price;

  document.getElementById("mango-ammount").innerHTML = fruites.mango.amount;
  document.getElementById("mango-price").innerHTML = fruites.mango.price;

  document.getElementById("orange-ammount").innerHTML = fruites.orange.amount;
  document.getElementById("orange-price").innerHTML = fruites.orange.price;

  document.getElementById("banana-ammount").innerHTML = fruites.banana.amount;
  document.getElementById("banana-price").innerHTML = fruites.banana.price;

  var amount = 0;
  var totalBill = 0;
  var shipping = 0;
  
  document.getElementById("amount").innerHTML = amount;
  document.getElementById("shipping").innerHTML = shipping;
  document.getElementById("total-bill").innerHTML = totalBill;
}
