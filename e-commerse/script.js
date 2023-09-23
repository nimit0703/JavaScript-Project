// Get references to the pages
const homePage = document.getElementById("home-section");
const productPage = document.getElementById("product-section");
const cartPage = document.getElementById("cart-section");

// Function to show a specific page and hide others
function showPage(pageToShow) {
    const pages = [homePage, productPage, cartPage];
    pages.forEach((page) => {
        page.style.display = page === pageToShow ? "block" : "none";
    });
}


// Add event listeners to navigation links
const homeLink = document.getElementById("home-link");
const productLink = document.getElementById("product-link");
const cartLink = document.getElementById("cart-link");

homeLink.addEventListener("click", () => showPage(homePage));
productLink.addEventListener("click", () => showPage(productPage));
cartLink.addEventListener("click", () => showPage(cartPage));
