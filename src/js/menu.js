let closed = 'menu is-hidden', opened = 'menu'
let btnIcon = document.querySelectorAll('.menu-btn__icon-wrap')
let mobileMenu = document.querySelector('.menu');

let openBtn = document.querySelectorAll('.menu-btn')

openBtn.forEach((a) =>{a.addEventListener('click', openCloseMenu)})

function openCloseMenu() {
  if (mobileMenu.dataset.menuClosed == 1) {
    mobileMenu.style = 'height: 100vh'
    mobileMenu.className = opened;
    mobileMenu.dataset.menuClosed = 0;
    btnIcon[0].className = 'menu-btn__icon-wrap visually-hidden'
    btnIcon[1].className = 'menu-btn__icon-wrap'
  } else {
    mobileMenu.className = closed;
    mobileMenu.dataset.menuClosed = 1;
    btnIcon[1].className = 'menu-btn__icon-wrap visually-hidden'
    btnIcon[0].className = 'menu-btn__icon-wrap'
    setTimeout(() => {mobileMenu.style = 'height: 1px'},255)
  }
}