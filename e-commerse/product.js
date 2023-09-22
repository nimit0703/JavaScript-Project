
let productDataRaw;
document.addEventListener("DOMContentLoaded", function () {
    // Parse the query string to get the product data
    const queryString = window.location.search;
    var productDataRaw = queryString;
    const urlParams = new URLSearchParams(queryString);
    const productDataString = urlParams.get("productData");

    if (productDataString) {
        // Parse the product data object
        const productData = JSON.parse(decodeURIComponent(productDataString));
        document.getElementById('product-name').innerHTML = productData.name;
        document.getElementById('product-desc').innerHTML = productData.desc;
        document.getElementById('product-image').src = productData.img;
        document.getElementById('product-price').innerHTML = productData.price;

        // Update the product page with the data
        console.log(productData);
    }
});

class Product {
    constructor(productName, ProductPrice, imgSrc) {
        this.name = productName;
        this.price = ProductPrice;
        this.img = imgSrc;
    }
}

function addToCart(){
    console.log("addto cart called")
    const prodName=  document.getElementById('product-name').innerHTML;
    const prodPrice=  document.getElementById('product-price').innerHTML;
    const prodImg=  document.getElementById('product-image').src;
    const productData = new Product(prodName,prodPrice,prodImg)
    const queryString = `?productData=${encodeURIComponent(JSON.stringify(productData))}`;

    console.log(queryString);

    window.location.href = `cart.html${queryString}`;

}



