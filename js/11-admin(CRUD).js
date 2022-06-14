class Product{
  constructor(id,name,price,image){
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
//! cRud
let products = JSON.parse(localStorage.getItem('products'));

products.forEach(product=>{
  let productRow = document.createElement('tr');
  productRow.innerHTML=`
  <th scope="row">${product.id}</th>
  <td>${product.name}</td>
  <td>${product.price}</td>
  <td><img class="table-product-image" src=${product.image}></td>
  <td>
  <button class="btn btn-secondary" onclick="deleteProduct(${product.id})">🚮</button>
  <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="fillValues(${product.id})">✍️</button>
  </td>
  `;
  document.querySelector('tbody').appendChild(productRow);
})

//! Crud

function addProduct (){
  // event.preventDefault()
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;

  let products = JSON.parse(localStorage.getItem('products'));

  const newProduct = new Product(products.length + 1,name, price, image);

  products.push(newProduct);

  localStorage.setItem('products',JSON.stringify(products));

  // window.location.reload()
}

//!cruD

const deleteProduct = (id) => {
  let products = JSON.parse(localStorage.getItem('products'));
  let productsUpdated = products.filter(product=>product.id !== id);
  localStorage.setItem('products',JSON.stringify(productsUpdated));
  //? Acá hacemos una actualizacion de la pagina porque no viene por defecto como si lo hace en los formularios
  window.location.reload();
}

//! crUd

const fillValues = function(id){
  //*IDENTIFICAMOS AL PRODUCTO A EDITAR
  let products = JSON.parse(localStorage.getItem('products'));
  let productToEdit = products.find(product => product.id == id);
  document.getElementById('name-edit').value = productToEdit.name;
  document.getElementById('price-edit').value = productToEdit.price;
  document.getElementById('image-edit').value = productToEdit.image;
  document.getElementById('edit-form').setAttribute('onsubmit',`editProduct(${id})`);
}

const editProduct = (id) =>{
  let name = document.getElementById('name-edit').value;
  let price = document.getElementById('price-edit').value;
  let image = document.getElementById('image-edit').value;
  let products = JSON.parse(localStorage.getItem('products'));
  let productsUpdated = products.filter(product=>product.id !== id);
  let productUpdated = new Product(id,name, price, image);
  productsUpdated.push(productUpdated);
  localStorage.setItem('products',JSON.stringify(productsUpdated));
}