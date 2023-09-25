const cartItems = [];
const homePage = document.getElementById("home-section");
const productPage = document.getElementById("product-section");
const cartPage = document.getElementById("cart-section");

function showPage(pageToShow) {
  pageToShow = document.getElementById(pageToShow);
  const pages = [homePage, productPage, cartPage];

  _.forEach(pages, (page) => {
    page.style.display = page == pageToShow ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cart-change").style.display = "none";
  document.getElementById("cart-default").style.display = "block";
  document.getElementById("successMsg").style.display = "none";

  showPage("home-section");
});

document.querySelectorAll(".view-product").forEach(function (button) {
  button.addEventListener("click", function (event) {
    const productCard = event.target.closest(".card");

    
    const productId = productCard.getAttribute("data-product-id");;
    const productName = productId +" "+ _.get(
      productCard.querySelector(".prod-name"),
      "textContent"
    );
    const productDesc = _.get(
      productCard.querySelector(".prod-desc"),
      "textContent"
    );
    const productAmount = _.get(
      productCard.querySelector(".prod-amount"),
      "textContent"
    );
    const productImg = _.get(productCard.querySelector(".prod-img"), "src");

    console.log(productId, productName);
    let productSelected = new Product(productId,productName,productDesc,productAmount,productImg
    );
    setProductPagePara(productSelected);
  });
});

class Product {
  constructor(productId, productName, productDesc, amount, productImg) {
    this.id = productId;
    this.name = productName;
    this.desc = productDesc;
    this.imgSrc = productImg;
    this.amount = amount;
  }
}

function setProductPagePara(productDetails) {
  let productSection = document.getElementById("prod-sec-prod");
  productSection.setAttribute("data-product-id", productDetails.id);
  let img = productSection.querySelectorAll("img");
  img.forEach(function (param) {
    param.src = productDetails.imgSrc;
  });
  let name = productSection.querySelector("#product-name");
  name.innerHTML = productDetails.name;
  let desc = productSection.querySelector("#product-desc");
  desc.innerHTML = productDetails.desc;
  let amount = productSection.querySelector("#product-amount");
  amount.innerHTML = productDetails.amount;

}


function addToCartBtnClick(){
  debugger;
  let productSection = document.getElementById("prod-sec-prod");
    let id = productSection.getAttribute("data-product-id");

    let name = productSection.querySelector("#product-name").innerHTML;
    let desc = productSection.querySelector("#product-desc").innerHTML;
    let amount = productSection.querySelector("#product-amount").innerHTML;
    let img = productSection.querySelector("img").src;

    let currentProductDetails = new Product(id, name,desc, amount,img)


    cartItems.push(currentProductDetails);
    addToCartDOM(currentProductDetails);
    refreshBill();
    document.getElementById("cart-change").style.display = "block";
    document.getElementById("cart-default").style.display = "none";
    document.getElementById("successMsg").style.display = "none";
}
function refreshBill() {
  const amount = _.reduce(
    cartItems,
    (accumulator, currentItem) => {
      return accumulator + parseFloat(currentItem.amount);
    },
    0
  );

  const tax = _.multiply(amount, 0.25);
  const dCharge = amount + tax >= 5000 ? 0 : 150;
  const totalAmount = _.add(amount, tax, dCharge);
  // console.log(amount, tax, dCharge, totalAmount);

  document.getElementById("amount").innerHTML = amount;
  document.getElementById("tax").innerHTML = tax;
  document.getElementById("d-charge").innerHTML = dCharge;
  document.getElementById("total-amount").innerHTML = totalAmount;
}

function addToCartDOM(productDetails) {
  debugger;
  const cartProducts = document.getElementById("cart-products");
  const existingCartProduct = cartProducts.querySelector(
    `[data-product-id="${productDetails.id}"]`
  );

  if (existingCartProduct) {
    modifyCartProduct(existingCartProduct, productDetails);
  } else {
    const newCartProduct = createCartProduct(productDetails);
    cartProducts.appendChild(newCartProduct);
  }
  console.log(cartProducts);
}

function modifyCartProduct(existingCartProduct, productDetails) {
  const piecesElement = Number(
    existingCartProduct
      ? existingCartProduct.querySelector(".prod-pices").textContent
      : 0
  );
  existingCartProduct.querySelector(".prod-pices").textContent =
    piecesElement + 1;
}

function createCartProduct(productDetails) {
  const cartProduct = document.createElement("div");
  cartProduct.classList.add(
    "cart-product",
    "row",
    "bg-body-secondary",
    "p-2",
    "mx-4",
    "my-3"
  );
  cartProduct.setAttribute("data-product-id", productDetails.id);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img", "col-sm-2");

  const img = document.createElement("img");
  img.src = productDetails.imgSrc;
  img.alt = "Product Image";
  img.classList.add("img-thumbnail");

  imgDiv.appendChild(img);

  const cartProductData = document.createElement("div");
  cartProductData.classList.add("cart-product-data", "col-sm-6");

  const productNameDiv = document.createElement("div");
  productNameDiv.classList.add("cart-prod-name");
  productNameDiv.textContent = productDetails.name;

  const productAmountDiv = document.createElement("div");
  productAmountDiv.classList.add("cart-prod-amount");
  productAmountDiv.textContent = productDetails.amount;

  const productPices = document.createElement("div");
  productPices.classList.add("prod-pices");
  productPices.textContent = 1;

  cartProductData.appendChild(productNameDiv);
  cartProductData.appendChild(productAmountDiv);
  cartProductData.appendChild(productPices);

  cartProduct.appendChild(imgDiv);
  cartProduct.appendChild(cartProductData);

  return cartProduct;
}

function paymentDone() {
  cartItems.length = 0;
  const cartProducts = document.getElementById("cart-products");
  console.log("BEFORE WHILE");

  // Use a while loop to remove all child nodes
  while (cartProducts.hasChildNodes()) {
    cartProducts.removeChild(cartProducts.firstChild);
  }

  console.log("AFTER WHILE");
  console.log(cartItems);
  console.log(cartProducts);

  
    document.getElementById("cart-change").style.display = 'none';
    document.getElementById("cart-default").style.display = 'none';
    document.getElementById("successMsg").style.display = 'block';
    
    
    setTimeout(() => {
      document.getElementById("cart-change").style.display = 'none';
      document.getElementById("cart-default").style.display = 'block';
      document.getElementById("successMsg").style.display = 'none';
    
  }, 7000);
}
