// Get references to the pages
const homePage = document.getElementById("home-section");
const productPage = document.getElementById("product-section");
const cartPage = document.getElementById("cart-section");

// Function to show a specific page and hide others
function showPage(pageToShow) {
    pageToShow = document.getElementById(pageToShow);
    const pages = [homePage, productPage, cartPage];
    pages.forEach((page) => {
        page.style.display = (page == pageToShow ? "block" : "none");
    });
}


// Add event listeners to navigation links
document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    showPage('home-section');
});