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

// let anteojos = prompt('Trajiste anteojos?');

// if(anteojos.toLowerCase()=='si'){
//   console.log('Corré wachin');
// }else{
//   if(anteojos.toLowerCase()=='no'){
//     console.log('Comprá bro, no hay drama');
//   }else{
//     console.log('Solo respuestas de si y no admitidas');
//   }
// }

//EJERCICIO: Recibir un numero del usuario y responderle si es par o es impar

// let numero = prompt('Digite un numero');

// if(numero%2==0){
//   console.log('%cEs par','color:blue;font-size:40px;');
// }else{
//   console.log('%cEs impar','color:red;font-size:40px;');
// }

//* CONDICIONALES MULTIPLES

// let numero = Math.random()*10;

// if(numero < 2 ){
//   console.log('Es menor a 2');
// }else{
//   if(numero<4){
//     console.log('Esta entre 2 y 4');
//   }
//   else{
//     if(numero<6){
//       console.log('Esta entre 4 y 6');
//     }
//   }
// }

// if(numero<2){
//   console.log('Es menor a 2');
// } else if (numero<4){
//   console.log('Esta entre 2 y 4');
// }else if(numero<6){
//   console.log('Esta entre 4 y 6');
// }else{
//   console.log('Esta entre 6 y 10');
// }

// let edad = prompt('Decime tu edad');

// if(edad<18){
//   let tutor = prompt('Tenes tutor?').toLowerCase();
//   if(tutor=='si'){
//     console.log('Pasa pibe');
//   }else{
//     console.log('Tomatela');
//   }
// }else{
//   console.log('Pasa pibe');
// }

// if(edad>18){
//   console.log('Pasa pibe');
// }else if(prompt('Tenes tutor?').toLowerCase()==='si'){
//   console.log('Pasen');
// }else{
//   console.log('Vaya a la casa changuito');
// }

// let provincia = prompt('De que provincia sos?');

// if(provincia.toLowerCase()=='tucumán' || provincia.toLowerCase()=='tucuman'){
//   console.log('Que rico sanguche de milanesa');
// } else if (provincia == 'Córdoba'){
//   console.log('Que fernetazo hermano');
// } else if (provincia == 'Chaco'){
//   console.log('Rico chipa');
// }else{
//   console.log('No tenemos datos sobre tu locación');
// }

//* SWITCH

// let number = 9;

// switch(number){
//   case 10:
//     console.log('Tu numero es un 10');
//     break;
//   case 20:
//     console.log('Tu numero es un 20');
//     break;
//   case 30:
//     console.log('Tu numero es un 30');
//     break;
//   case 40:
//     console.log('Tu numero es un 40');
//     break;
//   default:
//     console.log('Tu numero no es ni 10, ni 20, ni 30, ni 40');
//     break;
// }
// let provincia = prompt("De que provincia sos?");

// switch(provincia.toLowerCase()){
//   case 'tucuman':
//   case 'tucumán':
//     console.log('Sanguchazo de milanesa');
//     break;
//   case 'cordoba':
//     console.log('Alfajorazo');
//     break;
//   default:
//     console.log('De que barrio sos? No te conoce nadie');
//     break;
// }

let edad = prompt('Decime tu edad');

switch(true){
  case edad>=0 && edad<10:
    console.log('Elegante, el abecedario ');
    break;
  case edad>=10 && edad<20:
    console.log('Tini, bar');
    break;
  case edad>=20 && edad<30:
    console.log('Los angeles azules, 17 años');
    break;
  case edad>=30 && edad<40:
    console.log('Rodrigo, 840');
    break;
  case edad>=40 && edad<50:
    console.log('Elvis, el rock de la carcel');
    break;
}














