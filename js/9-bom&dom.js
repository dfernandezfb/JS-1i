//! BOM - Funciones del tiempo

//* setInterval
// window.setInterval //? Son del BOM pero no hace falta poner el window al principio
function helloWorld (){
  console.log('Hi everybody');
}
let intervalId = setInterval(/*funcion callback*/helloWorld,/*numero de tiempo expresado en milisegundos*/2000);
//! 1000ms = 1s
//! Funcion callback --> Funcion que se pasa como argumento de otra función
//* setTimeout
const byeWorld = ()=>console.log('Bye bye');

setTimeout(byeWorld,10000);

setTimeout(()=>clearInterval(intervalId),10000);
