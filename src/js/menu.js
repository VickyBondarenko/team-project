// const refs = {
//   menuBtn: document.querySelector('.menu-btn'),
//   menuBtnOpen: document.getElementById('close-icon'),
//   menuBtnClose: document.getElementById('open-icon'),
//   menuDiv: document.querySelector('.menu')
// }
// console.log(refs.menuBtnOpen);
// refs.menuBtn.addEventListener('click', () =>{
//   if (refs.menuDiv.dataset.menuVisible == 0){
//     refs.menuBtn.dataset.menuVisible=1;
//     refs.menuBtnOpen.className.animVal = 'menu-btn'
//     refs.menuBtnClose.className.animVal = 'menu-btn visually-hidden'
//     refs.menuDiv.className = 'menu'
//     console.log('open');
//   }else{
//     refs.menuBtn.dataset.menuVisible=0;
//     refs.menuBtnOpen.className.animVal = 'menu-btn visually-hidden'
//     refs.menuBtnClose.className.animVal = 'menu-btn'
//     refs.menuDiv.className = 'menu closed'
//     console.log('close');
//   }
//   console.log(refs.menuBtnClose.className);
// })

let closed = 'menu is-hidden', opened = 'menu'
let btnIcon = document.querySelectorAll('.menu-btn__icon-container')
let mobileMenu = document.querySelector('.menu');

let openBtn = document.querySelectorAll('.menu-btn')

openBtn.forEach((a) =>{a.addEventListener('click', openCloseMenu)})

function openCloseMenu() {
  if (mobileMenu.dataset.menuClosed == 1) {
    mobileMenu.style = 'height: 100vh'
    mobileMenu.className = opened;
    mobileMenu.dataset.menuClosed = 0;
    btnIcon[0].className = 'menu-btn__icon visually-hidden'
    btnIcon[1].className = 'menu-btn__icon'
  } else {
    mobileMenu.className = closed;
    mobileMenu.dataset.menuClosed = 1;
    btnIcon[1].className = 'menu-btn__icon visually-hidden'
    btnIcon[0].className = 'menu-btn__icon'
    setTimeout(() => {mobileMenu.style = 'height: 1px'},255)
  }
}