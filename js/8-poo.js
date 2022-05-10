// class Movie{ //* LA CLASE ES EL MOLDE DE UN OBJETO
//   constructor(title,category,year,description){ //* EL CONSTRUCTOR ES EL QUE ARMA UNA INSTANCIA DE LA CLASE
//     this.title=title;
//     this.category=category;
//     this.year=year;
//     this.description=description
//   }

//   showMovie(){
//     console.log(`La pelicula se llama ${this.title}, entra en las categorías de ${this.category.join(', ')}, se estrenó el año ${this.year} y la sinopsis es la siguiente: ${this.description}`);
//   }
// }

// let movies2 = [
//   new Movie('El Padrino',['suspenso','accion'],1995,'Un chico que se vuelve mafioso'), //* ESTE ES UN OBJETO INSTANCIADO
//   new Movie('Los power ranger',['infantil'],2000,'aknsdlkansd'),
//   new Movie('El secreto de sus ojos',['suspenso'],2015,'amlñsmdañlsmd')
// ]
// // console.log(movies2);

// class Person{
//   constructor(name, age, country){
//     this.name = name;
//     this.age=age;
//     this.country=country
//   }
//   greetings(){
//     console.log(`Hola, mi nombre es ${this.name}`);
//   }
// }


// let angel = new Person('Angel',35,'Uruguay');
// let galileo = new Person('Galileo',22,'Argentina');
// let gonza = new Person('Gonzalo',24, 'Argentina');

// class Mentor extends Person{
//   constructor(name, age, country, group, course){
//     super(name, age, country)
//     this.group= group;
//     this.course = course;
//   }
// }

// let diego = new Mentor ('Diego', 26, 'Argentina', '1i', 'Fullstack');
// let pau = new Mentor('Paula', 33, 'Argentina', '1i', 'Fullstack');

// //!DRY

// //? SETTERS Y GETTERS

// class SuperHero{
//   constructor(name, company){
//     this.name=name;
//     this.company=company;
//   }
  
//   get getName(){
//     return this.name
//   }
//   set setPower(power){
//     this.power = power;
//   }
// }

// let ironman = new SuperHero('Ironman','Marvel');


//? EJERCICIO: Cuenta bancaria

// class Account{
//   constructor(name){
//     this.name = name;
//     this.id= Math.floor(Math.random()*100000000);
//     this.balance=0;
//   }
//   addMoney(value){
//     if(value<=0){
//       alert('Valor ingresado no válido')
//     }else{
//       this.balance=this.balance+value;
//     }
//   }
  
//   getMoney(value){
//     if(value<=0){
//       alert('Valor ingresado no válido')
//     }else if(this.balance<value){
//       alert(`Saldo insuficiente. Tu saldo es de ${this.balance}`)
//     }else{
//       this.balance=this.balance-value;
//       alert(`Sacaste ${value}. Te quedan disponibles ${this.balance}`)
//     }
//   }

//   showInfo(){
//     Swal.fire(`La cuenta ${this.id} a nombre de ${this.name} tiene un saldo disponible de ${this.balance}`)
//   }
// }

// let diegoAccount = new Account('Diego');
// console.log(diegoAccount);


// let string = new String('Hola soy un string')   //'hola soy un string'

// console.log(string);

// new Array()
// new Object()
// new Boolean()

//? EJERCICIO: LISTA DE LIBROS

class ListaLibros {
  constructor(dueño){
    this.dueño = dueño;
    this.libros = [];
    this.librosYaLeidos = [];
    this.librosNoLeidos = [];
    this.libroActual = null;
    this.ultimoLibro = null;
    this.siguienteLibro = null;
  }
  añadirLibros(libro){
    this.libros.push(libro);
    if(this.leido){
      this.librosYaLeidos.push(libro);
    }else{
      this.librosNoLeidos.push(libro);
    }
  }
  empezarLibro(nombreLibro){
    let libroQueCoincida=this.libros.find(libro=>libro.titulo===nombreLibro)
    if(libroQueCoincida){
      this.libroActual = libroQueCoincida;
    }else{
      alert('No tenes este libro en tu lista')
    }
  }

  finalizarLibro(){
    this.ultimoLibro = this.libroActual;
    this.librosYaLeidos.push(this.ultimoLibro);
    // const posicion = this.librosNoLeidos.indexOf(this.libroActual);
    // this.librosNoLeidos.splice(posicion,1);
    this.librosNoLeidos = this.librosNoLeidos.filter(libro=>libro.titulo!==this.libroActual.titulo);
    this.libroActual = null;
  }
}
class Libro{
  constructor(titulo, autor, genero, leido){
    this.titulo = titulo;
    this.autor=autor;
    this.genero=genero;
    this.leido=leido;
  }

}

const listaDiego = new ListaLibros('Diego');

let elPrincipito = new Libro('El principito','Anthony', 'Fantasía',false);
let harryPotter1 = new Libro ('Harry Potter y la piedra filosofal','JK Rowling','Fantasía',false);
let laMuerteVisitaAlDentista = new Libro ('La muerte visita al dentista','Suspenso','Agatha Christie',false);
let padreRicoPadrePobre = new Libro('Padre rico, padre pobre','Kiyosaki','Finanzas',false);

listaDiego.añadirLibros(elPrincipito);
listaDiego.añadirLibros(harryPotter1);
listaDiego.añadirLibros(laMuerteVisitaAlDentista);
listaDiego.añadirLibros(padreRicoPadrePobre);

listaDiego.empezarLibro('Harry Potter y la piedra filosofal')