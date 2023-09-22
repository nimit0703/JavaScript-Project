// product-script.js
document.addEventListener("DOMContentLoaded", function () {
    // Parse the query string to get the product data
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productDataString = urlParams.get("productData");

    if (productDataString) {
        // Parse the product data object
        const productData = JSON.parse((productDataString));
        document.getElementById('product-name').innerHTML = productData.name;
        document.getElementById('product-desc').innerHTML = productData.desc;
        document.getElementById('product-image').src = productData.img;
        document.getElementById('product-price').innerHTML = productData.price;

        // Update the product page with the data
        console.log(productData);
    }
});
