(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};let t=document.querySelector("body");e.openModalBtn.addEventListener("click",l),e.closeModalBtn.addEventListener("click",l),document.addEventListener("click",r);function l(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?t.style.overflow="auto":(e.modal.style.display="block",t.style.overflow="hidden")}function r(o){o.target==e.modal&&(e.modal.classList.add("is-hidden"),t.style.overflow="auto")}window.onclick=function(o){o.target==e.modal&&(e.modal.classList.add("is-hidden"),t.style.overflow="auto")}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),r=(n=!0)=>{const c=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open");const i=n?"disableBodyScroll":"enableBodyScroll";bodyScrollLock[i](document.body)};t.addEventListener("click",r),l.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}),e.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{r(!1)})})})();const d=new Swiper(".myswiper",{slidesPerView:1,spaceBetween:10,loop:!0,keyboard:{enabled:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},pagination:{el:".hero_slider-counter",type:"custom",renderCustom:function(e,t,l){return"0"+t+" —— 0"+l}}});d.on("slideChange",function(){const e=d.realIndex+1,t=d.slides.length,l=document.querySelector(".hero_slider-counter");l.textContent="0"+e+" —— 0"+t});let s=()=>{let e=document.getElementById("progress");document.getElementById("progress-value");let t=document.documentElement.scrollTop,l=document.documentElement.scrollHeight-document.documentElement.clientHeight,r=Math.round(t*100/l);t>100?e.style.display="grid":e.style.display="none",e.addEventListener("click",()=>{document.documentElement.scrollTop=0}),e.style.background=`conic-gradient(#004D33 ${r}%, #d7d7d7 ${r}%)`};window.onscroll=s;window.onload=function(){s()};
