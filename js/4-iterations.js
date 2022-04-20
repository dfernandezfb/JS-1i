//* WHILE
// let numero = 1;
// while(numero<15){
//   console.log('Todavía no salí');
//   numero++;
// }
// console.log('Salí');

// let numero = prompt('Dame un numero');

// while(numero!=0){
//   numero--;
//   console.log(numero);
// }

// let contador = 1;

// while(contador<numero){
//   console.log(contador);
//   contador++;
// }

let response = prompt('¿Por qué la luna es mayor que el sol?');
let contador = 1;
let surrender = false;

while(response != 'Porque sale de noche' && surrender===false){
  response = prompt('Intenta otra vez');
  if(contador===3){
    alert('Pensa en batman');
  }
  if(contador===5){
    alert('Porque sale de noche');
    surrender=true;
  }
  contador++;
}
alert('Usted si que es chistoso');