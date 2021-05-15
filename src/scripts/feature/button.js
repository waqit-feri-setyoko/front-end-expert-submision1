//Menu
const button = () =>{
const menu = document.querySelector('.menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', event =>{ 
drawer.classList.toggle('open');
event.stopPropagation();
});

main.addEventListener('click', ()=> drawer.classList.remove('open'));

hero.addEventListener('click',() => drawer.classList.remove('open'));
};

export default button;