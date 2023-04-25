(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  let body = document.querySelector('body');
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  document.addEventListener("click", closeModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if (!refs.modal.classList.contains('is-hidden')) {
      refs.modal.style.display = "block";
      body.style.overflow = 'hidden'; // додати стиль overflow: hidden; до body
    } else {
      body.style.overflow = 'auto'; // видалити стиль overflow: hidden; з body
    }
  }
  function closeModal(event) {
    if (event.target == refs.modal) {
      refs.modal.classList.add('is-hidden');
      body.style.overflow = 'auto'; // видалити стиль overflow: hidden; з body
    }
  }
  window.onclick = function(event) {
    if (event.target == refs.modal) {
      refs.modal.classList.add('is-hidden');
      body.style.overflow = 'auto'; // видалити стиль overflow: hidden; з body
    }
  };
})();