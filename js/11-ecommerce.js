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

localStorage.setItem('products',JSON.stringify(products));

let favsFromLS = JSON.parse(localStorage.getItem('favs'));
// if(!favsFromLS){
//! es otra forma de preguntar si hay algo guardado en la variable favsFromLS
// }
let favs;
if(favsFromLS===null){
  favs=[];
}else{
  favs = favsFromLS;
}


console.log(products);

favs.forEach(fav=>{
  //! STEP 1: CREAR EL ELEMENTO
  let favCard = document.createElement('div');
  //! STEP 2: DECIRLE AL ELEMENTO QUE LLEVA ADENTRO
  favCard.classList.add('card','my-3');
  favCard.id = 'fav'+fav.id;
  favCard.innerHTML=`
  <div class="card-body">
    <h5 class="card-title">${fav.name}</h5>
    <p class="card-text">Precio: $${fav.price}</p>
    <button class="btn btn-dark" onclick="removeFav(event)">❌</button>
  </div>
  `
  //! STEP 3: LLAMEMOS AL PADRE
  let favsContainer = document.querySelector('.favs-container');
  //! STEP 4: ADOPTEMOS AL HIJO
  favsContainer.appendChild(favCard)
})

products.forEach(product =>{
  //! STEP 1: CREAR EL ELEMENTO
  let productCard = document.createElement('a');
  productCard.href= window.location.origin + '/ecommerce/detailPage.html#'+ product.id;
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
    <button class="btn btn-dark" onclick="addProductToCart(event)">🛒</button>
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
let cart;
const addProductToCart = (event) =>{
  //! STEP 1: IDENTIFICAR EL PRODUCTO DONDE SE HIZO CLICK
  let productId = event.target.parentElement.parentElement.id;
  let product = products.find(product=>product.id==productId);

  //! STEP 2: AGREGAR EL PRODUCTO A LS
  //* Traer si es que hay algo de LS
  let cartFromLS = JSON.parse(localStorage.getItem('cart'));
  //* Chequear si no está vacío
  if(cartFromLS===null){
    cart=[];
  }else{
    cart=cartFromLS
  }
  //* Editar el array
  cart.push(product);
  //* Enviamos a local storage
  localStorage.setItem('cart', JSON.stringify(cart))
}
const removeFav = (event)=>{
  //! STEP 1: IDENTIFICAR EL ID
  const idProduct = event.target.parentElement.parentElement.id;
  //! STEP 2: TRAER EL ELEMENTO Y BORRARLO
  const productToRemove = document.getElementById(idProduct);
  productToRemove.remove();
  //! STEP 3: BORRARLO DE LS
    //* Traer si es que hay algo de LS
    let favsFromLS = JSON.parse(localStorage.getItem('favs'));
    console.log(favsFromLS);
    //* Editar el array
    let favsUpdated = favsFromLS.filter(fav=>fav.id!=idProduct.slice(3));
    console.log(favsFromLS);
    console.log(favsUpdated);
    //* Enviamos a local storage
    localStorage.setItem('favs', JSON.stringify(favsUpdated))

}

// fav1
//    1
// fav5000 
//    5000

const logout = () =>{
  let usersLS = JSON.parse(localStorage.getItem('users'));
  let userActive = usersLS.find(user=>user.id == localStorage.getItem('user'));
  userActive.favs = favs;
  usersLS.filter(user=>user.id!= localStorage.getItem('user'));
  usersLS.push(userActive);
  localStorage.setItem('users',JSON.stringify(usersLS))
  localStorage.removeItem('favs');
  localStorage.removeItem('cart');
  localStorage.removeItem('user');
  window.location.assign(window.location.origin + '/ecommerce/login.html')
}


// IDENTIFICAMOS SI EL USUARIO ES ADMIN O NO
let userId = localStorage.getItem('user');
console.log(userId);
let users = JSON.parse(localStorage.getItem('users'));
console.log(users);
let userActive = users.find(user=>user.id==userId);
console.log(userActive);
if(userActive.admin){
  let adminButton = document.createElement('li');
  adminButton.classList.add('nav-item');
  adminButton.innerHTML=`
  <a class="nav-link" href="http://127.0.0.1:5500/ecommerce/admin.html">Administración</a>
  `;
  document.getElementById('options-header').appendChild(adminButton)
}