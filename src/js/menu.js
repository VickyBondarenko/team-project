const refs = {
  menuBtn: document.querySelector('.menu-btn'),
  menuBtnIconOpen: document.querySelector('.menu-btn__icon.opened-icon'),
  menuBtnIconClose: document.querySelector('.menu-btn__icon.closed-icon'),
  menuDiv: document.querySelector('.menu')
}
console.log(refs.menuBtnIconOpen);
refs.menuBtn.addEventListener('click', () =>{
  if (refs.menuBtn.dataset.menuVisible == 0){
    refs.menuBtn.dataset.menuVisible=1;
    refs.menuBtnIconOpen.className = 'menu-btn__icon opened-icon'
    refs.menuBtnIconClose.className = 'menu-btn__icon closed-icon visible-hidden'
    refs.menuDiv.className = 'menu'
  }else{
    refs.menuBtn.dataset.menuVisible=0;
    refs.menuBtnIconOpen.className = 'menu-btn__icon opened visible-hidden'
    refs.menuBtnIconClose.className = 'menu-btn__icon closed'
    refs.menuDiv.className = 'menu closed'
  }
  console.log(refs.menuBtnIcon[0].className)
})