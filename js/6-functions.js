//! ACA SE PRODUJO HOISTING
hello1();

//! ACA NO SE PUEDE LLAMAR PORQUE NO HAY HOISTING 
// hello2();
// hello3();

function hello1() {
  console.log('Hola manola');
}

const hello2 = function(){
  console.log('Hola tarola');
}

const hello3 = () => {
  console.log('Hola carola');
}

hello1();
hello2();
hello3();