//*JSON

let objetito = {
  tamaño: 'pequeño',
  edad:1
}
console.log(objetito);

let objetitoQueVaAUnBackend = JSON.stringify(objetito);

console.log(objetitoQueVaAUnBackend);

let objetitoQueVuelveDeUnBackend = JSON.parse(objetitoQueVaAUnBackend)

console.log(objetitoQueVuelveDeUnBackend);

//* WEB STORAGE

//?Se aplica para los dos tipos.

localStorage.setItem('nombreUsuario','Diego');
localStorage.setItem('nombreUsuario2','Nahuel');
localStorage.setItem('nombreUsuario3','Angel');

console.log(localStorage.getItem('nombreUsuario'));

console.log(localStorage.length);

localStorage.removeItem('nombreUsuario');

localStorage.clear();

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

let productsFromLS = JSON.parse(localStorage.getItem('products'));

//WEB STORAGE

// key : value

lo