let isModalOpen = false;

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", onBackdropClick)

   

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("backdrop--hidden");
    isModalOpen = !isModalOpen;
  }

  window.addEventListener('keyup', onKeyUp);

  function onKeyUp(e) {
    e.preventDefault();

    if(isModalOpen) {
      if (e.code === 'Escape') {
        toggleModal();
      }
    }

  }

  function onBackdropClick(e) {
    if (e.target.classList.contains('backdrop')) {
      toggleModal();
    }
  }

})();



