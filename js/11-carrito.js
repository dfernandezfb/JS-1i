class Product{
  constructor(id,name,price,image){
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

let products = [
  new Product(1,'Alfajor de maicena',50,'https://images.unsplash.com/photo-1604953781841-004f1848ed3d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687'),
  new Product(2,'Alfajor de fruta', 45, 'https://images.unsplash.com/photo-1648821994613-6fdbad6657ba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'),
  new Product(3,'Alfajor de chocolate', 80,'https://images.unsplash.com/photo-1624761527858-7d6792e57202?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'),
  new Product(4,'Alfajor de membrillo',50,'https://images.unsplash.com/photo-1604953782017-769558d1a0cc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687'),
  new Product(5, 'Brownie de chocolate', 50, 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687')
]

let favs = [];

console.log(products);

products.forEach(product =>{
  //! STEP 1: CREAR EL ELEMENTO
  let productCard = document.createElement('div');
  //! STEP 2: DECIRLE AL ELEMENTO QUE LLEVA ADENTRO
  //? productCard.id hace referencia al id del div que estamos creando, y product.id hace referencia al id de cada producto que se encuentra en el array
  productCard.id=product.id;
  productCard.classList.add('card','my-3');
  productCard.style.width = '18rem';
  productCard.innerHTML=`
  <img src=${product.image} class="card-img-top customize-image" alt=${product.name}>
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">Precio: $${product.price}</p>
    <button class="btn btn-dark">🛒</button>
    <button class="btn btn-dark" onclick="addFav(event)">⭐</button>
  </div>
  `
  //! STEP 3: LLAMEMOS AL PADRE
  let productsContainer = document.getElementById('products-container');
  //! STEP 4: ADOPTEMOS AL HIJO
  productsContainer.appendChild(productCard)
})
//? Lo que se crea por cada item del array de productos
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
//!OTRA FORMA DE OBTENER EL ID
// const addFav = (id)=>{
//   uso el id
// }

const addFav = (event)=>{
  //! STEP 1: IDENTIFICAR EL PRODUCTO DONDE SE HIZO CLICK
  let productId = event.target.parentElement.parentElement.id;
  let product = products.find(product=>product.id==productId);
  //! STEP 2: NOVELA PADRE E HIJO
  let productCard = document.createElement('div');
  productCard.classList.add('card','my-3');
  productCard.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">Precio: $${product.price}</p>
    <button class="btn btn-dark">❌</button>
  </div>
  `
  let favsContainer = document.querySelector('.favs-container');
  favsContainer.appendChild(productCard)
  favs.push(product);
  localStorage.setItem('favs',JSON.stringify(favs));
}