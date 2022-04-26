let days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

// console.log(days[0]);
// console.log(days[1]);
// console.log(days[2]);
// console.log(days[3]);
// console.log(days[4]);
// console.log(days[5]);
// console.log(days[6]);

//! DRY DONT REPEAT YOURSELF

for(let i=0;i<7;i++){
  console.log(days[i]);
}

days.push('Feriadus');

console.log(days);

console.log(days.pop());

console.log(days);

days.unshift('Feriadus');

console.log(days);

days.shift();

console.log(days);

console.log(days.indexOf('Miercoles'));

// days.reverse();

console.log(days);

let newDays = ['Feriadus', 'Sabaduki'];

let newWeek = days.concat(newDays);

console.log(newWeek);

console.log(newWeek.includes('Feriadus'));
console.log(newWeek.includes('Octopus'));

console.log('Los dias de la semana son:\n-', newWeek.join('\n- '));
console.log(newWeek.sort());

let diasFalopa = newWeek.splice(7,2);
console.log(newWeek);
console.log(diasFalopa);

let testWeek = newWeek.slice(-2);
console.log(newWeek);
console.log(testWeek);
