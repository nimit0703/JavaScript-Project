// Get references to the pages
const homePage = document.getElementById("home-page");
const productPage = document.getElementById("product-page");
const cartPage = document.getElementById("cart-page");

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






class Product {
    constructor(productName, ProductDesc, ProductPrice, imgSrc) {
        this.name = productName;
        this.desc = ProductDesc;
        this.price = ProductPrice;
        this.img = imgSrc;
    }
}



document.querySelectorAll(".view-product").forEach(function(button){
    button.addEventListener('click',function(event){
        let productSelected = event.target.closest('.my-card');
        
        let imgSrc = productSelected.querySelector('img').src;
        let productName = productSelected.getElementsByClassName('product-name')[0].innerHTML;
        let ProductDesc = productSelected.getElementsByClassName('product-des')[0].innerHTML;
        let ProductPrice = productSelected.getElementsByClassName('product-price')[0].innerHTML;
        let productData = new Product(productName, ProductDesc, ProductPrice, imgSrc);
        console.log(productData);
        const queryString = `?productData=${encodeURIComponent(JSON.stringify(productData))}`;
        // console.log(queryString);
        console.log(`product.html${queryString}`);

        window.location.href = `product.html${queryString}`;

    })
})
document.getElementsByClassName
console.log(typeof(document.querySelectorAll('.view-product').forEach))
