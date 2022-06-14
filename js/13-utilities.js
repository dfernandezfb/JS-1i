//? El destructuring es una caracteristica nueva de ES6 que nos permite desempacar un arreglo o un objeto directamente y de manera múltiple para extraerlos en variables o constantes.
//* DESESTRUCTURACIÓN DE OBJETOS (OBJECT DESTRUCTURING)

//* DESESTRUCTURACIÓN DE ARREGLOS (ARRAY DESTRUCTURING)

//* SPREAD OPERATOR
//? El spread operator es también una incorporación de ES6 que nos permite trabajar de mejor manera con arrays y objetos. Su simbolo es... x.x


//* IMPORTACIÓN Y EXPORTACIÓN (IMPORT Y EXPORT)
//? Podemos exportar funciones, objetos o datos para que puedan ser utilizadas en otras partes de mi aplicación. 
//? Existen dos tipos de exports: por defecto (puede haber solo una en un script) o nombrada(puede haber multiples en un script)
import { agregarProducto, constante } from "./07 - funciones.js";
// import pepito from "./11 - eventos"
// console.log(constante);
// console.log(pepito);

//* REPASO DE FUNCIONES (FUNCTIONS)

function saludo(){
  console.log('Hola Mundo')
}

const saludar = function (){
  console.log('Hola mundo de nuevo');
}

const saludazo = () => {
  console.log('Hola mundo una vez mas');
}

saludo();
saludar();
saludazo();


//* OPERADOR TERNARIO

//* TRY - CATCH
