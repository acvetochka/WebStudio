const footer = document.querySelector('.page-footer');

const renderFooter = () => {
    const markup = `<div class="page-footer__container container">
      <!-- Контактні дані -->
      <div class="address">
        <a href="./index.html" class="logo logo--footer"> <span class="logo--accent">Web</span>Studio</a>
        <address>
          <ul class="address__list"></ul>
        </address>
      </div>
      <!-- Приєднуйтесь -->
      <div class="join">
        <p class="join__text">Приєднуйтесь</p>
        <ul class="icons"></ul>
      </div>
      <!-- Підпишіться на розсилку -->
      <div class="subscription">
        <p class="subscription__text">Підпишіться на розсилку</p>
        <form class="subscription__form">
          <input class="subscription__input" name="user-email" type="email" placeholder="Email" />
          <button class="subscription__button" type="submit">
            Підписатися
            <svg class="subscription__icon">
              <use href="./images/icons.svg#icon-send"></use>
            </svg>
          </button>
        </form>
      </div>
    </div>`

    footer.innerHTML = markup;
}

renderFooter();