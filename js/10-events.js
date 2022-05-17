//! Capturing vs Bubbling

let padre = document.querySelector('.padre');
let hijo = document.querySelector('.hijo');

padre.addEventListener('click',()=>console.log('Hola, soy el padre'), true)
hijo.addEventListener('click', ()=>console.log('Holis, soy el hijo'), true)

//? Robots peligrosos
let x= 0;
let y=0;
let robot = document.querySelector('.robot');
let corral = document.querySelector('.corral');
window.addEventListener('keydown',(event)=>{
  event.preventDefault();
  console.log(event.key);
  let robotCoor = robot.getBoundingClientRect();
  let corralCoor = corral.getBoundingClientRect();
  switch(event.key){
    case 'ArrowUp':
      if(robotCoor.top>corralCoor.top){
        y--;
      }
    break;
    case 'ArrowDown':
      if(robotCoor.bottom<corralCoor.bottom){
        y++;
      }
    break;
    case 'ArrowLeft':
      if(robotCoor.left> corralCoor.left){
        x--;
      }
    break;
    case 'ArrowRight':
      if(robotCoor.right<corralCoor.right){
        x++;
      }
    break;
  }
  robot.style.transform = `translate(${x*10}px,${y*10}px)`
})