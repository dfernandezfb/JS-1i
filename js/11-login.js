//* SIMULAMOS UNA BASE DE DATOS
class User{
  constructor(id, name, email, password){
    this.name = name;
    this.id = id;
    this.email = email;
    this.password = password; 
  }
}

const users = [
  new User(1, 'Diego Fernández', 'diego@gmail.com', '12345678'),
  new User(2, 'Paula Moyano', 'paula@gmail.com', '87654321'),
  new User(3, 'Lionel Scaloni', 'scaloneta@gmail.com.ar', 'LeoSiempreTitular'),
  new User(4, 'Lionel Messi','elultimo10@gmail.com','antoteamo')
]

// function login () {

// }

// const login = function(){

// }

const login = (event)=>{
  //! PREVENIMOS EL COMPORTAMIENTO POR DEFECTO DEL EVENTO SUBMIT
  event.preventDefault();
  //! TOMAMOS DEL DOM LOS VALORES QUE ESCRIBIÓ EL USUARIO
  let email = document.querySelector('#email').value;
  let pass = document.querySelector('#pass').value;
  let emailOk= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  let passOk= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass);
  if(emailOk && passOk){
    //! COMPARAMOS EMAILS PARA VER SI ALGUNO COINCIDE
    let userFound = users.find(user=>user.email===email);
    //! SI COINCIDIÓ UN MAIL COMPARAMOS LAS CONTRASEÑAS
  if(userFound && userFound.password === pass){
      //! SI TODO COINCIDE, LO REDIRECCIONAMOS ADENTRO
      window.location.assign(window.location.origin + '/ecommerce/ecommerce.html')
  }else{
    errorAlert('Credenciales incorrectas')
  }
}else{
  errorAlert('Escribí bien menso')
}
}

function errorAlert (texto){
  let errorMessage = document.createElement('div');
    errorMessage.innerText = texto;
    errorMessage.classList.add('alert','alert-danger');
    let loginForm = document.getElementById('login-form');
    loginForm.appendChild(errorMessage);
    setTimeout(()=>{
      errorMessage.remove()
    },3000)
}