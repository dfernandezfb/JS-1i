//! ACA SE PRODUJO HOISTING
hello1();

//! ACA NO SE PUEDE LLAMAR PORQUE NO HAY HOISTING 
// hello2();
// hello3();

function hello1() {
  console.log('Hola manola');
}

const hello2 = function(){
  console.log('Hola tarola');
}

const hello3 = () => {
  console.log('Hola carola');
}
//! La arrow function te permite que si tenes un solo argumento no hace falta que pongas parentesis, y ademas si vas a hacer un simple retorno la flecha funciona como un return
const todoAMayuscula = (palabra)=>{
  return palabra.toUpperCase();
}
//*   ===
 const todoAMayusc = palabra => palabra.toUpperCase()

hello1();
hello2();
hello3();

function suma (fulano,mengano, nombre){
  const resultado = fulano+mengano;
  console.log(`Los numeros sumados son ${fulano} y ${mengano} y los creo ${nombre}`);
  return resultado
}

console.log(suma(5,7,'Diego'));
console.log(suma(12,3,'Diego'));
console.log(suma(2,123,'Diego'));
console.log(suma(22,2,'Diego'));
console.log(suma(5,33,'Diego'));
console.log(suma(5,5,'Diego'));

const database = ['Nahuel', 'Angel', 'Pilar', 'Gonzalo', 'Galileo', 'Rocio'];
const ageDatabase = [25,35,20,25,22,25];

const deleteUser = () =>{
  const user = prompt('Que usuario queres borrar?');
  if(!database.includes(user)){
    alert('El usuario no existe');
  }else{
    const position = database.indexOf(user);
    database.splice(position,1);
    alert('Usuario eliminado');
  }
}

const updateUser = function (){
  const user = prompt('Que usuario queres actualizar?');
  const userUpdated = prompt('Como va a ser el nuevo nombre?')
  if(!database.includes(user)){
    alert('El usuario no existe');
  }else{
    const position = database.indexOf(user);
    database.splice(position,1,userUpdated);
    alert('La base de usuarios ha sido actualizada');
  }
}

//* CALLBACKS : Función que se pasas como argumento de otra función

const hi = nombre => alert('Hola '+ nombre);
const bye = nombre => alert('Chau '+ nombre);
function newUser (saludo){
  const nombre = prompt('Como es el nombre?');
  saludo(nombre) /*hi(nombre)*/
}

// newUser(hi);
// newUser(bye);
//* FILTER & FIND
// const mayores25 = ageDatabase.filter(age=>age>=25);
// const mayorA30 = ageDatabase.find(age=>age>=25);
// console.log(ageDatabase);
// console.log(mayores25);
// console.log(mayorA30);
//* FOREACH & MAP
// ageDatabase.forEach(age=>console.log(age+20));
// ageDatabase.forEach(age=>console.log('mostrando con el forEach', age));
// const en20años= ageDatabase.map(age=>age+20);
// console.log(ageDatabase);
// console.log(en20años);

//? EJERCICIO: Calculadora

// const calculator = ()=>{
//   let num1;
//   let num2;
//   let op;
//   while(isNaN(num1)||isNaN(num2)){
//     num1 = Number(prompt('Dame el primer numero'));
//     num2 = Number(prompt('Dame el segundo numero'));
//     op = prompt('Dame la operación');
//     if(isNaN(num1)||isNaN(num2)){
//       alert('Numeros no válidos');
//     }
//   }

//   switch(op){
//     case 'suma':
//       alert(num1+num2);
//       break;
//     case 'resta':
//       alert(num1-num2);
//       break;
//     case 'producto':
//       alert(num1*num2);
//       break;
//     case 'division':
//       alert(num1/num2);
//       break;
//     default:
//       alert('Operación no válida');
//   }
// }
// const calculator = (num1,num2, op)=>{
//     if(isNaN(num1)||isNaN(num2)){
//       return 'Numeros no válidos';
//     }

//   switch(op){
//     case 'suma':
//       return num1+num2;
//     case 'resta':
//       return num1-num2;
//     case 'producto':
//       return num1*num2;
//     case 'division':
//       return num1/num2;
//     default:
//       return 'Operación no válida';
//   }
// }

// let outcome = calculator(15,'asd','suma');

// console.log(outcome);

// //? EJERCICIO: Carrito de compras

let carrito = [];

const addProduct = () =>{
  let product = prompt('Que producto desea agregar?');
  carrito.push(product);
}

const getProducts = () =>{
  alert(`Su carrito esta compuesto por:\n- ${carrito.join('\n- ')}`)
}

const getProduct = () =>{
  const product = prompt('Que producto desea saber si esta en su carrito?');
  if(carrito.includes(product)===true){
    alert('El producto se encuentra en su carrito');
  }else{
    alert('El producto no se encuentra en su carrito');
  }
}
// 'agua',
// 'aceite'
const searchProducts = () => {
  const search = prompt('Que producto desea buscar?');
  let results = carrito.filter(product=>product.includes(search));
  alert(results)
}

const removeProduct = function(){
  const productToRemove =prompt('Que producto deseas eliminar?');
  // const position = carrito.indexOf(product);
  // carrito.splice(position,1);
  carrito = carrito.filter(product=>product!=productToRemove);
}


// [agua, pan, milanesas, mirinda]
// [pan, milanesas, mirinda]
// function removeProduct (){

// }

// const options = ['piedra', 'papel', 'tijeras'];

// function playerMove(){
//   let move = prompt('Piedra, papel o tijeras').toLowerCase().trim();
//   return move;
// }

// function botMove(){
//   const random = Math.round(Math.random()*2) //--> obtenemos un numero random de 0 a 2
//   return options[random]
// }
// // options[0] --> piedra
// // options[1] --> papel
// // options[2] --> tijeras

// function definition (player) {
//   // let player = playerMove();
//   let bot = botMove();
//   switch(true){
//     case player==bot:
//       alert(`Bot jugó ${bot}. Empate`);
//     break;
//     case player=='piedra' && bot=='papel':
//       alert(`Bot jugó ${bot}.`+' Gana bot');
//     break;
//     case player=='piedra' && bot=='tijeras':
//       alert(`Bot jugó ${bot}.`+' Gana player');
//     break;
//     case player=='papel' && bot=='piedra':
//       alert(`Bot jugó ${bot}.`+' Gana player');
//     break;
//     case player=='papel' && bot=='tijeras':
//       alert(`Bot jugó ${bot}.`+' Gana bot');
//     break;
//     case player=='tijeras' && bot=='piedra':
//       alert(`Bot jugó ${bot}.`+' Gana bot');
//     break;
//     case player=='tijeras' && bot=='papel':
//       alert(`Bot jugó ${bot}.`+' Gana player');
//     break;
//   }
// }