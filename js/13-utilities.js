//? El destructuring es una caracteristica nueva de ES6 que nos permite desempacar un arreglo o un objeto directamente y de manera múltiple para extraerlos en variables o constantes.
//* DESESTRUCTURACIÓN DE OBJETOS (OBJECT DESTRUCTURING)
let persona = {
  name : 'Diego',
  age:26,
  country: 'Argentina'
}

// let name = persona.name;
// let age = persona.age;
// let country = persona.country;

// let {name, age, country} = persona;
// let {age} = persona;
// console.log(name);
// console.log(age);
// console.log(country);

// let {name: nombre, age: edad, country: pais} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(pais);

let {age, country, name} = persona;
console.log(age);
console.log(name);

// item={
//   property1:'hola',
//   property2:'chau'
// }

// array.forEach(({property1,property2})=>{
//   console.log(property1);
//   console.log(property2);
// })

function getSong (id){
  return {name:'november rain', artist: 'guns n roses'}
}

const {artist} = getSong();



//* DESESTRUCTURACIÓN DE ARREGLOS (ARRAY DESTRUCTURING)

const rgb = [150, 100, 255];

let [red, green, blue] = rgb;

console.log(red);
console.log(green);
console.log(blue);
//?ACA SI IMPORTA EL ORDEN
let [azul, verde, rojo] = rgb;

console.log(red);
console.log(green);
console.log(blue);
//? SE DEJA VACÍO CUANDO NO SE QUIERE DESESTRUCTURAR UN ELEMENTO INTERMEDIO Y SI EL ULTIMO POR EJEMPLO
let [rosso, ,blu] = rgb;
console.log(rosso);
console.log(blu);

const useState = ['Diego', function(newState){console.log(newState);}];

const [state,setState] = useState;
console.log(state);
setState('Pau')

//* SPREAD OPERATOR
//? El spread operator es también una incorporación de ES6 que nos permite trabajar de mejor manera con arrays y objetos. Su simbolo es... x.x

const numeros = [5,6];
const del1al10 = [1,2,3,4,...numeros,7,8,9,10];
console.log(del1al10);
const copiadel1al10 = [...del1al10];
console.log(copiadel1al10);
[...del1al10,11]

let dog = {
  name:'fiona',
  age:2,
  gender:'male',
  breed:'callejero aleman'
}
//?HICIMOS UNA COPIA Y LE AGREGAMOS OTRA PROPIEDAD NUEVA
let dogWithOwner={
  ...dog,
  owner:'Gonza'
}

console.log(dogWithOwner);



//* IMPORTACIÓN Y EXPORTACIÓN (IMPORT Y EXPORT)
//? Podemos exportar funciones, objetos o datos para que puedan ser utilizadas en otras partes de mi aplicación. 
//? Existen dos tipos de exports: por defecto (puede haber solo una en un script) o nombrada(puede haber multiples en un script)
//? La diferencia entre el export por defecto y el nombrado es que a la hora de importarlo al por defecto se lo puede importar sin llaves
import {crearDinamicamente, sumar} from './13-useful-functions.js'
import {NAME as nombre,DB_DIRECTION} from './13-constants.js'
// import crearNavbar from './13-useful-functions.js'
crearDinamicamente('div','hola',document.getElementById('comment-section'));
crearDinamicamente('div','chau',document.getElementById('comment-section'));
console.log(sumar(1,2))
console.log(nombre, DB_DIRECTION)

//? NORMALMENTE LOS IMPORTS VAN EN LA PARTE INICIAL DEL JS

//* REPASO DE FUNCIONES (FUNCTIONS)

// function saludo(){
//   console.log('Hola Mundo')
// }

// const saludar = function (){
//   console.log('Hola mundo de nuevo');
// }

// const saludazo = () => {
//   console.log('Hola mundo una vez mas');
// }

// saludo();
// saludar();
// saludazo();


//* OPERADOR TERNARIO
let x = 10;
x>5? 'si es mayor que 5':'es menor que 5';

//* TRY - CATCH
//? NOS PERMITE HACER ALGUNA ACCIÓN CONTRA CUALQUIER ERROR QUE PUEDA SUCEDER
// console.log(y);
try {
  console.log('hola');
  console.log(y);
} catch (error) {
  console.log('Ocurrio un error');
}
console.log('ocurrió un error y la pagina me sigue funcionando');