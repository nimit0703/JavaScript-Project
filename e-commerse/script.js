// Get references to the pages
const homePage = document.getElementById("home-section");
const productPage = document.getElementById("product-section");
const cartPage = document.getElementById("cart-section");

// Function to show a specific page and hide others
function showPage(pageToShow) {
  // console.log(pageToShow)
  pageToShow = document.getElementById(pageToShow);
  const pages = [homePage, productPage, cartPage];
  pages.forEach((page) => {
    page.style.display = page == pageToShow ? "block" : "none";
  });
}

// Add event listeners to navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  document.getElementById("cart-change").style.display = 'none';
  document.getElementById("cart-default").style.display = 'block';
  showPage("home-section");
});

document.querySelectorAll(".view-product").forEach(function (button) {
  button.addEventListener("click", function (event) {
    const productCard = event.target.closest(".card");

    const productId = productCard.getAttribute("data-product-id");
    const productName =
      productCard.getElementsByClassName("prod-name")[0].innerHTML;
    const productDesc =
      productCard.getElementsByClassName("prod-desc")[0].innerHTML;
    const productAmount =
      productCard.getElementsByClassName("prod-amount")[0].innerHTML;
    const productImg = productCard.getElementsByClassName("prod-img")[0].src;

    console.log(productName);
    let productSelected = new Product(productId,productName,productDesc,productAmount,productImg
    );
    setProductPagePara(productSelected);
  });
});
class Product {
  constructor(productId, productName, productDesc,amount, productImg) {
    this.id = productId;
    this.name = productName;
    this.desc = productDesc;
    this.imgSrc = productImg;
    this.amount = amount;
  }
}

function setProductPagePara(productDetails) {
//   console.log(productDetails);
  const productSection = document.getElementById("product-section");
  const img = productSection.querySelector("img");
  img.src = productDetails.imgSrc;
  const name = productSection.querySelector("#product-name"); // Use querySelector with #
  name.innerHTML = productDetails.name;
  const desc = productSection.querySelector("#product-desc"); // Use querySelector with #
  desc.innerHTML = productDetails.desc;
  const amount = productSection.querySelector("#product-amount"); // Use querySelector with #
  amount.innerHTML = productDetails.amount;


  const addToCartButton = productSection.querySelector(".btn.btn-warning");

  addToCartButton.addEventListener('click',function(){
    cartItems.push(productDetails);
    addToCartDOM(productDetails);
    refreshBill();
    document.getElementById("cart-change").style.display = 'block';
    document.getElementById("cart-default").style.display = 'none';
  
  })
}
function refreshBill(){
  const amount = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + parseFloat(currentItem.amount);
  }, 0);
  
  const tax = amount * 0.25;
  const dCharge = (amount+tax) >= 5000 ? 0:150;
  const totalAmount  = amount+ tax + dCharge;
  console.log(amount,tax,dCharge, totalAmount);

  document.getElementById("amount").innerHTML = amount;
  document.getElementById("tax").innerHTML = tax;
  document.getElementById("d-charge").innerHTML = dCharge;
  document.getElementById("total-amount").innerHTML = totalAmount;
}

function addToCartDOM(productDetails){
  const cartProducts = document.getElementById('cart-products');
  const newCartProduct = createCartProduct(productDetails);
  cartProducts.appendChild(newCartProduct);
  console.log(cartProducts);
}

function createCartProduct(productDetails) {
  const cartProduct = document.createElement("div");
  cartProduct.classList.add("cart-product", "row", "bg-body-secondary", "p-2", "mx-4", "my-3");
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

  cartProductData.appendChild(productNameDiv);
  cartProductData.appendChild(productAmountDiv);

  cartProduct.appendChild(imgDiv);
  cartProduct.appendChild(cartProductData);

  return cartProduct;
}

function paymentDone(){
  cartItems.length = 0;
  document.getElementById('cart-products').innerHTML = '';
  document.getElementById("cart-change").style.display = 'none';
  document.getElementById("cart-default").style.display = 'block';
}
const cartItems = [];

