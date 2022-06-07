//* SIMULAMOS UNA BASE DE DATOS
class User{
  constructor(id, name, email, password){
    this.name = name;
    this.id = id;
    this.email = email;
    this.password = password; 
  }
}



let users;

const usersFromLS = JSON.parse(localStorage.getItem('users'));

if(usersFromLS){
  users = usersFromLS
}else{
  users = [
    new User(1, 'Diego Fernández', 'diego@gmail.com', '12345678'),
    new User(2, 'Paula Moyano', 'paula@gmail.com', '87654321'),
    new User(3, 'Lionel Scaloni', 'scaloneta@gmail.com.ar', 'LeoSiempreTitular'),
    new User(4, 'Lionel Messi','elultimo10@gmail.com','antoteamo')
  ];
  localStorage.setItem('users',JSON.stringify(users));
}



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
  // let passOk= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass);
  if(emailOk /*&& passOk*/){
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

//! REGISTRO

const register = (event) =>{
  event.preventDefault();
  let fullName = document.querySelector('#register-fullname').value;
  let email = document.querySelector('#register-email').value;
  // let age = document.getElementById('register-age').value;
  let pass= document.getElementById('register-pass').value;
  let pass2= document.getElementById('register-pass2').value;

  let fullNameOk = /^([a-zA-Z]){4,35}$/.test(fullName); //true
  let emailOk= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email); //true
  // let ageOk = age>=16 && age<150; //true
  let passOk= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass); //true
  let pass2Ok= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass2); //true
  let equalPass = pass === pass2; //true

  if(fullNameOk && emailOk /*&& ageOk*/ && pass2Ok && passOk && equalPass){
    //! STEP 1: Traer de LS
    let usersLS = JSON.parse(localStorage.getItem('users'));
    //! STEP 2: Agrego el nuevo usuario al array de usuarios
    if(usersLS.find(user=>user.email==email)){
      console.log('hackeeeeeeeeeeer');
    }else{
      usersLS.push(new User(usersLS.length+1,fullName,email,pass));
    }
    //! STEP 3: Envio de vuelta a LS
    localStorage.setItem('users',JSON.stringify(usersLS))
  }else{
    console.log('todo mal');
  }

} 
