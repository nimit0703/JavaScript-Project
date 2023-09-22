const cart =[];

function display(){
    let products = document.getElementById('prod-items');
    console.log(products,cart);
    cart.forEach(function(product){
        const productItemDiv = document.createElement('div');
        productItemDiv.className ='prod-item';


        const imgDiv = document.createElement('div');
        imgDiv.className = 'img';
        const img = document.createElement('img');
        img.src = product.img;
        imgDiv.appendChild(img);
        productItemDiv.appendChild(imgDiv);
        // console.log(productItemDiv)
        
        const dataDiv = document.createElement('div');
        dataDiv.className= 'data';
        const nameDiv = document.createElement('div');
        nameDiv.className= 'name';
        nameDiv.innerHTML=product.name;
        const amountDiv = document.createElement('div');
        amountDiv.className= 'amount';
        amountDiv.innerHTML='Amount :';
        const amountSpan = document.createElement('span');
        amountSpan.className='amount';
        amountSpan.innerHTML = product.price;
        amountDiv.appendChild(amountSpan);
        
        dataDiv.appendChild(nameDiv);
        dataDiv.appendChild(amountDiv);
        productItemDiv.appendChild(dataDiv);
        console.log(productItemDiv)
        document.getElementById('prod-items').appendChild(productItemDiv);



    })

}



document.addEventListener("DOMContentLoaded", function () {
    // Parse the query string to get the product data
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productDataString = urlParams.get("productData");

    if (productDataString) {
        const productData = JSON.parse(decodeURIComponent(productDataString));

        console.log(productData);
        cart.push(productData);
        display();
    }
});