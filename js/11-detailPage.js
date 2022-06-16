//!  Traemos el hash y el id con la propiedad location.hash, y despues le cortamos el hash con el slice porque no nos sirve. Nos queda como resultado el id del producto
let idProduct = window.location.hash.slice(1); 
//! Traigo los productos de LS
let products = JSON.parse(localStorage.getItem('products'));
//! Con el id, lo busco
let product = products.find(product=>product.id == idProduct);
//! Novela de creacion de elemento, decirle que lleva adentro y llamar al padre para que lo adopte
let detail = document.createElement('div');
detail.innerHTML = `
<img class="detail-image" src=${product.image}>
<h1 class="text-center">${product.name}</h1>
<p class="h3 text-center text-secondary">${product.price}</p>
`
document.getElementById('detail-container').appendChild(detail);

//TODO hermosear el html

import crearNavbar from './13-useful-functions.js'

crearNavbar();