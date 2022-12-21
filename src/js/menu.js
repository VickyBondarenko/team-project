const refs = {
  menuBtn: document.querySelector('.menu-btn'),
  menuBtnOpen: document.getElementById('close-icon'),
  menuBtnClose: document.getElementById('open-icon'),
  menuDiv: document.querySelector('.menu')
}
console.log(refs.menuBtnOpen);
refs.menuBtn.addEventListener('click', () =>{
  if (refs.menuDiv.dataset.menuVisible == 0){
    refs.menuBtn.dataset.menuVisible=1;
    refs.menuBtnOpen.className.animVal = 'menu-btn'
    refs.menuBtnClose.className.animVal = 'menu-btn visible-hidden'
    refs.menuDiv.className = 'menu'
    console.log('open');
  }else{
    refs.menuBtn.dataset.menuVisible=0;
    refs.menuBtnOpen.className.animVal = 'menu-btn visible-hidden'
    refs.menuBtnClose.className.animVal = 'menu-btn'
    refs.menuDiv.className = 'menu closed'
    console.log('close');
  }
  console.log(refs.menuBtnClose.className);
})