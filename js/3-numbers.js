//! NUMBERS /vamos a utilizar el objeto Math

//* REDONDEO Y TRUNCAMIENTO
// 35.73
// 36 <-- redondeo
// 35 <-- truncamiento

let numberOne = 35.73;

console.log( 'numero redondeado', Math.round(numberOne));

console.log( 'numero redondeado', Math.floor(numberOne));

//* ENCONTRAR MAXIMOS Y MINIMOS

let max = Math.max(1,7,84,91,51,35);
let min = Math.min(1,7,84,91,51,35);
console.log(max);
console.log(min);

//* POTENCIAS Y RAICES

console.log('3 al cuadrado = ', Math.pow(3,2));
console.log('3 al cubo = ', Math.pow(3,3));

console.log('la raiz cuadrada de 9 es = ', Math.sqrt(9));
console.log('la raiz cubica de 27 es = ', Math.cbrt(27));

//* OBTENER NUMERO ALEATORIO

let random = Math.random();
console.log(random);

//? Obtengamos un numero aleatorio del 0 al 9

let random2 = Math.round((Math.random())*10);
console.log(random2);
// (0-1)*10--> 0 - 10

//* PARSEO DE CADENAS

let string = '15.25asd';
console.log(string);

console.log(Number(string));
console.log(parseInt(string));
console.log(parseFloat(string));

//* LIMITAR CANTIDAD DE DECIMALES
//0.1513515313511351 $
let number3 = Number(Math.random().toFixed(2));

console.log(number3);