//ESTRUCTURAS CONDICIONALES

//SIMPLE
// let edad= Number(prompt('Cual es tu edad?'))
// if(edad>18){
//   console.log('Entraste a ver los goles Messi');
// }

// //DOBLES
// if(edad>18){
//   console.log('Entraste a ver los goles Messi');
// }
// else{
//   console.log('Andá a ver los goles de Icardi');
// }

//EJERCICIO: SOLO RESPUESTAS DE SI Y NO EN EL CEMENTERIO INDIO

let anteojos = prompt('Trajiste anteojos?');

if(anteojos.toLowerCase()=='si'){
  console.log('Corré wachin');
}else{
  if(anteojos.toLowerCase()=='no'){
    console.log('Comprá bro, no hay drama');
  }else{
    console.log('Solo respuestas de si y no admitidas');
  }
}

