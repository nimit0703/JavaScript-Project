//const
//objects
const fruites = {
  apples: { price: 52, amount: 61 },
  mango: { price: 120, amount: 73 },
  orange: { price: 20, amount: 3 },
  banana: { price: 12, amount: 352 },
};

//var
var amount = 0;
var totalBill = 0;
var shipping = 0;

//windos method
window.onload = () => {
  setAmmountAndPrices();
};

function addFruitToCart(pices, price) {
  var amount = pices * price;
  var shipping = amount >= 250 ? 0 : 99;
  var totalBill = amount + shipping;
  document.getElementById("amount").innerHTML = amount;
  document.getElementById("shipping").innerHTML = shipping;
  document.getElementById("total-bill").innerHTML = totalBill;
}

function addMangoes() {
  let weHave = fruites.mango.amount;
  let cusWant = Number(document.getElementById("cust-mango-amount").value);
  if (cusWant === 0) {
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
    if (confirm("Press a button!\nEither OK or Cancel.")) {
      let price = fruites.mango.price;
      addFruitToCart(cusWant, price);
      let itemLeft = weHave - cusWant;
      console.log(fruites.mango);
      fruites.mango.amount = itemLeft;
      console.log(fruites.mango);
      document.getElementById("mango-ammount").innerHTML = fruites.mango.amount;
      document.getElementById("cust-mango-amount").value = 0;
    }
  }

  console.log(weHave, cusWant);
}
function addOranges() {
  let weHave = fruites.orange.amount;
  let cusWant = Number(document.getElementById("cust-orange-amount").value);
  if (cusWant === 0) {
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
    if (confirm("Press a button!\nEither OK or Cancel.")) {
      let price = fruites.orange.price;
      addFruitToCart(cusWant, price);
      let itemLeft = weHave - cusWant;
      console.log(fruites.orange);
      fruites.orange.amount = itemLeft;
      console.log(fruites.orange);
      document.getElementById("orange-ammount").innerHTML =
        fruites.orange.amount;
      document.getElementById("cust-orange-amount").value = 0;
    }
  }

  console.log(weHave, cusWant);
}
function addBananas() {
  let weHave = fruites.banana.amount;
  let cusWant = Number(document.getElementById("cust-banana-amount").value);
  if (cusWant === 0) {
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
    if (confirm("Press a button!\nEither OK or Cancel.")) {
      let price = fruites.banana.price;
      addFruitToCart(cusWant, price);
      let itemLeft = weHave - cusWant;
      console.log(fruites.banana);
      fruites.banana.amount = itemLeft;
      console.log(fruites.banana);
      document.getElementById("banana-ammount").innerHTML =
        fruites.banana.amount;
      document.getElementById("cust-banana-amount").value = 0;
    }
  }

  console.log(weHave, cusWant);
}

function addApples() {
  let weHave = fruites.apples.amount;
  let cusWant = Number(document.getElementById("cust-apple-amount").value);
  if (cusWant === 0) {
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
    if (confirm("Press a button!\nEither OK or Cancel.")) {
      let price = fruites.apples.price;
      addFruitToCart(cusWant, price);
      let itemLeft = weHave - cusWant;
      console.log(fruites.apples);
      fruites.apples.amount = itemLeft;
      console.log(fruites.apples);
      document.getElementById("apple-ammount").innerHTML =
        fruites.apples.amount;
      document.getElementById("cust-apple-amount").value = 0;
    }
  }

  console.log(weHave, cusWant);
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
