class Movie{ //* LA CLASE ES EL MOLDE DE UN OBJETO
  constructor(title,category,year,description){ //* EL CONSTRUCTOR ES EL QUE ARMA UNA INSTANCIA DE LA CLASE
    this.title=title;
    this.category=category;
    this.year=year;
    this.description=description
  }

  showMovie(){
    console.log(`La pelicula se llama ${this.title}, entra en las categorías de ${this.category.join(', ')}, se estrenó el año ${this.year} y la sinopsis es la siguiente: ${this.description}`);
  }
}

let movies2 = [
  new Movie('El Padrino',['suspenso','accion'],1995,'Un chico que se vuelve mafioso'), //* ESTE ES UN OBJETO INSTANCIADO
  new Movie('Los power ranger',['infantil'],2000,'aknsdlkansd'),
  new Movie('El secreto de sus ojos',['suspenso'],2015,'amlñsmdañlsmd')
]
// console.log(movies2);

class Person{
  constructor(name, age, country){
    this.name = name;
    this.age=age;
    this.country=country
  }
  greetings(){
    console.log(`Hola, mi nombre es ${this.name}`);
  }
}

let angel = new Person('Angel',35,'Uruguay');
let galileo = new Person('Galileo',22,'Argentina');
let gonza = new Person('Gonzalo',24, 'Argentina');

class Mentor extends Person{
  constructor(name, age, country, group, course){
    super(name, age, country)
    this.group= group;
    this.course = course;
  }
}

let diego = new Mentor ('Diego', 26, 'Argentina', '1i', 'Fullstack');
let pau = new Mentor('Paula', 33, 'Argentina', '1i', 'Fullstack');

//!DRY

//? SETTERS Y GETTERS

class SuperHero{
  constructor(name, company){
    this.name=name;
    this.company=company;
  }
  
  get getName(){
    return this.name
  }
  set setPower(power){
    this.power = power;
  }
}

let ironman = new SuperHero('Ironman','Marvel');


//? EJERCICIO: Cuenta bancaria

class Account{
  constructor(name){
    this.name = name;
    this.id= Math.floor(Math.random()*100000000);
    this.balance=0;
  }
  addMoney(value){
    if(value<=0){
      alert('Valor ingresado no válido')
    }else{
      this.balance=this.balance+value;
    }
  }
  
  getMoney(value){
    if(value<=0){
      alert('Valor ingresado no válido')
    }else if(this.balance<value){
      alert(`Saldo insuficiente. Tu saldo es de ${this.balance}`)
    }else{
      this.balance=this.balance-value;
      alert(`Sacaste ${value}. Te quedan disponibles ${this.balance}`)
    }
  }

  showInfo(){
    Swal.fire(`La cuenta ${this.id} a nombre de ${this.name} tiene un saldo disponible de ${this.balance}`)
  }
}

let diegoAccount = new Account('Diego');
console.log(diegoAccount);


let string = new String('Hola soy un string')   //'hola soy un string'

console.log(string);

new Array()
new Object()
new Boolean()