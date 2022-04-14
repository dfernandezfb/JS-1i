"Soy un string";
'También soy un string';
'1?2*´¨[][:[ASD⬅️'
//* Escapando al string
console.log("'Leo Messi' dijo: \"La comisión 1i es la mejor\"")

//* CONCATENACIÓN DE STRINGS
console.log('HOLA ' + 'MANOLA');

console.log(15 + '15');

console.log('15'+ 15 + 15);

console.log(15 + 15 + '15');

// JS LEE DE ARRIBA A ABAJO Y DE IZQ A DER

//* TEMPLATE LITERALS

let ganador = 'Pau';
let convencion;
let proyecto = 'Avances en JS';
let premio = 'USD 10000'

console.log('El ganador fue ' + ganador); //CONCATENACION

console.log('El ganador fue ' + ganador + ' por su proyecto ' + proyecto + ' y ganó ' + premio); //CONCATENACION
//! USAR COMILLA INVERTIDA PARA TODO EL STRING Y LAS VARIABLES CON UN SIGNO PESOS ANTES Y ENCERRADAS ENTRE LLAVES
console.log(`El ganador fue ${ganador} por su proyecto ${proyecto} y ganó ${premio}`);

//* METODOS DE STRINGS

//toUpperCase --> Pasa todo a mayusculas

console.log('Hola, soy DIEGOTE'.toUpperCase().toLowerCase()); 
console.log(ganador.toUpperCase()); 

//toLowerCase --> Pasa todo a minusculas

console.log('Hola, esta va en minuscula'.toLowerCase());
console.log(premio.toLowerCase());

//length--> ver cantidad de caracteres

console.log('Hola, aca va a haber 23'.length);
console.log(ganador.length);

//charAt --> ver posicion de un caracter

console.log('Diego Fernández'.charAt(6)); //La posición comienza en cero.
console.log(ganador.charAt(2));

//substr --> Obtenes una porcion del string

console.log('0Hola4, soy Diego'.substring(0,4));

// trim --> elimina espacios iniciales y finales

console.log('              Diego Fernández          '.trim());

//includes --> Verifica si un string se encuentra dentro de otro string

console.log('Estoy buscando a Nemo'.includes('Nemo'));

console.log('Estoy buscando a Doris'.includes('Nemo'));

//EJERCICIO: Recibir el apellido del usuario y mostrar por consola la ultima letra

// let apellido = prompt('Dame tu apellido');

// console.log(apellido.charAt(apellido.length-1));
// ULTIMA POSICION = length-1
// 0F1E2R3N4A5N6D7E8Z9

//EJERCICIO 2: Recibir el nombre del usuario y mostrar por consola el nombre con la primera letra en mayuscula

let nombre = prompt('Dame tu nombre');
let firstLetter = nombre.substr(0,1).toUpperCase();
let resto = nombre.substr(1,nombre.length-1);
console.log(firstLetter+resto);
console.log(`${firstLetter}${resto}`);