let alumno = {
  name: 'Gonzalo',
  age: 20,
  location: 'Cordoba',
  hobbies:['Escabiar', 'Dormir', 'Trabajar'],
  pet:[
    {
      name:'Blue',
      type:'dog'
    },
    {
      name:'Chiqui',
      type:'dog'
    }
  ],
  children:null,

  saludar: function(){
    console.log('Hola soy Gonzalo');
  }
}
//* Leer una propiedad del objeto
console.log(alumno.name);
console.log(alumno['age']);

alumno.age = 22;

console.log(alumno);

alumno.saludar(); //! Para ejecutar algún método tenemos que poner los parentesis!!!

console.log(alumno.pet[0].name); //Accedemos al nombre de la primera mascota
console.log(alumno.pet[1].name); //Accedemos al nombre de la segunda mascota

delete alumno.children;

console.log(alumno);

//? EJERCICIO

let person = {
  nombre: 'Gabriel',
  edad: 26,
  dni: '3213513',
  domicilio: 'laprida 587',
  hijos:0,
  profesion:'programado de git',
  saludar: function(){
    console.log('Hola, soy'+this.nombre);
  },
  listar: function(){
    // console.log(`Los datos de la persona son: \n
    // nombre: ${this.nombre}\n
    // edad:${this.edad}\n
    // dni:${this.dni}`);
    for(let key in this){
      console.log(key+'='+this[key]);
    }
  }
}

//* CREANDO OBJETOS CON LA FUNCION CONSTRUCTORA

function Team (name, colors, people){
  this.name = name;
  this.colors = colors;
  this.people = people;
}

let sanMartin = new Team('San Martín de Tucumán',['red','white'],1000000);

let atletico = new Team('Atletico Tucumán', ['blue','white'],15);

console.log(sanMartin);
console.log(atletico);

//* CREANDO OBJETOS CON CLASES

class Country{
  constructor(name, people){
    this.name = name;
    this.people = people;
  }
}

let argentina = new Country ('Argentina',40000000);

console.log(argentina);

let brasil = new Object();

brasil.name = 'Brasil';
brasil.people = 100000000;

console.log(brasil);