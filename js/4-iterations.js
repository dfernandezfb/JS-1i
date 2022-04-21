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

// let response = prompt('¿Por qué la luna es mayor que el sol?');
// let contador = 1;
// let surrender = false;

// while(response != 'Porque sale de noche' && surrender===false){
//   response = prompt('Intenta otra vez');
//   if(contador===3){
//     alert('Pensa en batman');
//   }
//   if(contador===5){
//     alert('Porque sale de noche');
//     surrender=true;
//   }
//   contador++;
// }
// alert('Usted si que es chistoso');

//* FOR

// let contador = 1;

// while(contador<numero){
//   console.log(contador);
//   contador++;
// }


// for(let contador=0; contador<15 ; contador++){
//   console.log(contador); 
// }

//?EJERCICIO DE TABLAS
// let number = prompt('Que tabla queres saber?');

// // 5x1=5
// // 5x2=10
// // 5x3=15
// // 5x4

// for(let i=0 ; i<=9 ; i++){
//   console.log(`${number}x${i}=${number*i}`);
// }

// //? PROMPT DE EXCALIBUR
// let name='';
// let isKing= false;
// while(name.toLowerCase()!=='arturo' || isKing===false){
//   name=prompt('Como te llamas?');
//   if(name.toLowerCase()==='arturo'){
//     isKing= confirm('Sos rey?');
//     if(isKing===false){
//       alert('No sos rey zapato, seguí participando');
//     }
//   }else{
//     alert('No te llamas Arturo, seguí participando');
//   }
// }
// alert('Sacaste el prompt Rey Arturo');

//? INTELIGENCIA ARTIFICIAL EN UN HOSPITAL, DOLENCIA: DOLOR ABDOMINAL

let isWoman = confirm('Es usted mujer?');

if(isWoman){
  isPregnant = confirm('Esta embarazada?')
  if(isPregnant){
    alert('A ecografia')
  }else{
    alert('A rayos X')
  }
}else{
  alert('A rayos X')
}