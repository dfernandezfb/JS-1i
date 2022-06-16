// export default crearNavbar = ()=>{
//   let nuevoElemento = document.createElement('header');
//   nuevoElemento.innerHTML = `
//   <nav>
//   sooy un nav
//   </nav>
//   `
//   document.getElementById('navbar-container').appendChild(nuevoElemento)
// }
export function crearDinamicamente (elemento, text, padre){
  let nuevoElemento = document.createElement(elemento);
  nuevoElemento.innerText = text
  padre.appendChild(nuevoElemento)
}

export function sumar (numero1, numero2){
  return numero1 + numero2
}
