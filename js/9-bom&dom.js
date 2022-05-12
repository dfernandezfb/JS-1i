// //! BOM - Funciones del tiempo

// //* setInterval
// // window.setInterval //? Son del BOM pero no hace falta poner el window al principio
// function helloWorld (){
//   console.log('Hi everybody');
// }
// let intervalId = setInterval(/*funcion callback*/helloWorld,/*numero de tiempo expresado en milisegundos*/2000);
// //! 1000ms = 1s
// //! Funcion callback --> Funcion que se pasa como argumento de otra función
// //* setTimeout
// const byeWorld = ()=>console.log('Bye bye');

// setTimeout(byeWorld,10000);

// setTimeout(()=>clearInterval(intervalId),10000);


// //? CUENTA REGRESIVA
// let countdown = 10;
// console.log('El cohete será lanzado en'+countdown);

// let idInterval = setInterval(()=>{
//   console.log(countdown);
//   countdown--
// },1000)

// //* 1000ms --> 1s

// setTimeout(()=>{
//   clearInterval(idInterval);
//   console.log('Despegue');
// },10000)


//! DOM
// document.body.innerHTML='<h2>Hola comisión 1i</h2>'
//Traer por ID
let linkInfobae = document.getElementById('link-a-infobae');
linkInfobae.innerText = 'IR A INFOBAE'
console.log(linkInfobae.classList)
linkInfobae.classList.add('test','test123')
console.log(linkInfobae.classList)
// linkInfobae.style.backgroundColor='red'
console.log(linkInfobae);

//Traer por clase
let classElements = document.getElementsByClassName('test-class');
console.log(classElements);

//Traer por etiqueta
let tagElements = document.getElementsByTagName('a');
console.log(tagElements);

//Traer por nombre
let nameElements = document.getElementsByName('name');
console.log(nameElements);

//Traer elementos por selectores de CSS
//! el querySelector trae el primer elemento que se encuentra
console.log(document.querySelector('#link-a-infobae'))

console.log(document.querySelector('.test-class'));

console.log(document.querySelectorAll('.test-class'));

function changeColor(){
  let elementClass = document.getElementById('link-a-infobae').classList;
  if(elementClass.contains('light')){
    elementClass.add('dark');
    elementClass.remove('light');
  }else{
    elementClass.add('light');
    elementClass.remove('dark');
  }
}

function crearElemento(){
  let elementoACrear = document.createElement('h5');
  elementoACrear.innerText = 'Este h5 ha sido creado dinamicamente con JS';
  let padreDelElemento = document.querySelector('.test-class');
  padreDelElemento.appendChild(elementoACrear);
}

const publish = (event) =>{
  event.preventDefault();
  let commentText = document.querySelector('#comment-text').value;
  let commentSection = document.querySelector('#comment-section');
  let newComment = document.createElement('div');
  newComment.classList.add('text-light');
  let id = Math.floor(Math.random()*100);
  newComment.id= id;
  newComment.innerHTML = `
    ${commentText} <button class='ms-3' onclick='deleteComment(${id})'> Borrar comentario</button>
  `;
  commentSection.appendChild(newComment)
  document.getElementById('comment-form').reset()
}

const deleteComment = function(id){
  let commentSection = document.querySelector('#comment-section');
  let childToRemove = document.getElementById(id)
  commentSection.removeChild(childToRemove)
}