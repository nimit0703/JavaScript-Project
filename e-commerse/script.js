// Get references to the pages
const homePage = document.getElementById("home-section");
const productPage = document.getElementById("product-section");
const cartPage = document.getElementById("cart-section");

// Function to show a specific page and hide others
function showPage(pageToShow) {
  pageToShow = document.getElementById(pageToShow);
  const pages = [homePage, productPage, cartPage];
  pages.forEach((page) => {
    page.style.display = page == pageToShow ? "block" : "none";
  });
}

// Add event listeners to navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  showPage("home-section");
});

document.querySelectorAll(".view-product").forEach(function (button) {
  button.addEventListener("click", function (event) {
    const productCard = event.target.closest(".card");

    // Retrieve data from the clicked card
    const productId = productCard.getAttribute("data-product-id");
    const productName =
      productCard.getElementsByClassName("prod-name")[0].innerHTML;
    const productDesc =
      productCard.getElementsByClassName("prod-desc")[0].innerHTML;
    const productImg = productCard.getElementsByClassName("prod-img")[0].src;

    console.log(productName);
    let productSelected = new Product(productId,productName,productDesc,productImg
    );
    setProductPagePara(productSelected);
  });
});
class Product {
  constructor(productId, productName, productDesc, productImg) {
    this.id = productId;
    this.name = productName;
    this.desc = productDesc;
    this.imgSrc = productImg;
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


  const addToCartButton = productSection.querySelector(".btn.btn-warning");

  addToCartButton.addEventListener('click',function(){
    cartItems.push(productDetails);
    addToCardDOM();
  })
}


const cartItems = [];