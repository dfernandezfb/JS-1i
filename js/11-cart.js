let cartFromLS = JSON.parse(localStorage.getItem('cart'));
let cart;
if(!cartFromLS){
  cart=[];
}else{
  cart=cartFromLS;
}

cart.forEach(product=>{
  let productCard = document.createElement('div');
  productCard.classList.add('card','mb-3');
  productCard.style.maxWidth= '540px;'
  productCard.innerHTML = `
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${product.image} class="img-fluid rounded-start customize-image" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">Precio : $${product.price}</p>
      </div>
    </div>
  </div>
  `
  let productsContainer = document.getElementById('cart-container');
  productsContainer.appendChild(productCard)
})

