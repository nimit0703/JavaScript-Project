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


document.querySelectorAll('.view-product').forEach(function (button){
    button.addEventListener('click',function(event){
        const productCard = event.target.closest(".card");

        // Retrieve data from the clicked card
        const productId = productCard.getAttribute("data-product-id");
        const productName = productCard.getElementsByClassName('prod-name').textContent;
        const productDesc = productCard.getElementsByClassName('prod-desc').textContent;
        const productImg = productCard.getElementsByClassName('prod-img').src;

        console.log()
    })
});

document.getElementsByClassName