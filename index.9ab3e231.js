var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".nav-mob__link"),c=document.querySelector(".btn__open-modal"),a=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};n.forEach((e=>e.addEventListener("click",a))),c.addEventListener("click",a),t.addEventListener("click",a),o.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="reviews-slider"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-pagination");new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:20,pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'<li class="'+t+'"></li>'}},on:{transitionStart:function(){let t=this.previousIndex,o=e.getElementsByClassName("swiper-slide")[t];o&&setTimeout((function(){o.classList.remove("is-play")}),1e3)},transitionEnd:function(){let t=this.activeIndex;e.getElementsByClassName("swiper-slide")[t].classList.add("is-play")}}})}))}),!1);
//# sourceMappingURL=index.9ab3e231.js.map