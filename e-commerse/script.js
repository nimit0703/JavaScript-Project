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
        const queryString = `?productData=${(JSON.stringify(productData))}`;
        console.log(queryString);
        window.location.href = `product.html${queryString}`;

    })
})
document.getElementsByClassName
console.log(typeof(document.querySelectorAll('.view-product').forEach))
