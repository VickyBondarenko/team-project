let e=document.querySelectorAll(".menu-btn__icon-wrap"),o=document.querySelector(".menu"),t=document.querySelector(".header"),n=document.querySelectorAll(".menu__button-link");function a(){1==o.dataset.menuClosed?(o.style="height: 100vh",o.className="menu",o.dataset.menuClosed=0,e[0].className="menu-btn__icon-wrap visually-hidden",e[1].className="menu-btn__icon-wrap",t.className="header fixed"):(o.className="menu is-hidden",o.dataset.menuClosed=1,e[1].className="menu-btn__icon-wrap visually-hidden",e[0].className="menu-btn__icon-wrap",t.className="header",setTimeout((()=>{o.style="height: 1px"}),255))}document.querySelectorAll(".menu-btn").forEach((e=>{e.addEventListener("click",a)})),n.forEach((e=>{e.addEventListener("click",a),console.log(e)}));new Swiper(".myS",{autoplay:{delay:2e3},loop:!0}),new Swiper(".mySlider",{pagination:{el:".swiper-pagination",clickable:!0},loop:!0});(()=>{const e={openModalBtn:document.querySelector("[data-product-modal-open]"),closeModalBtn:document.querySelector("[data-product-modal-close]"),modal:document.querySelector("[data-product-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-ingredients-modal-open]"),closeModalBtn:document.querySelector("[data-ingredients-modal-close]"),modal:document.querySelector("[data-ingredients-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-read-more-modal-open]"),closeModalBtn:document.querySelector("[data-read-more-modal-close]"),modal:document.querySelector("[data-read-more-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-location-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-franchise-modal-open]"),closeModalBtn:document.querySelector("[data-franchise-modal-close]"),modal:document.querySelector("[data-franchise-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.4f11adec.js.map
