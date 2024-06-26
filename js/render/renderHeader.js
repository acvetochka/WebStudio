const header = document.querySelector('.header');

const renderHeader = () => {
    const markup = `<div class="header__container container">
      <a href="./index.html" class="logo"><span class="logo--accent">Web</span>Studio</a>
      <button type="button" class="menu-toggle js-open-menu" aria-expanded="false">
        <svg class="menu-toggle__icon" width="40" height="40" aria-label="Кнопка відкриття мобільного меню">
          <use class="menu-button__open" href="./images/icons.svg#icon-menu"></use>
        </svg>
      </button>
      <nav>
        <ul class="nav"></ul>
      </nav>
      <ul class="contacts-head"></ul>
    </div>
    <!-- Mobile menu -->
    <div class="menu-container js-menu-container" id="mobile-menu">
      <button class="menu-toggle js-close-menu">
        <svg class="menu-toggle__icon" width="40" height="40" aria-label="Кнопка закриття мобільного меню">
          <use class="menu-button__cross" href="./images/icons.svg#icon-close_menu"></use>
        </svg>
      </button>
      <ul class="mobile-menu"></ul>
      <ul class="contacts-menu"></ul>
      <ul class="social-menu"></ul>
    </div>`

    header.innerHTML = markup;
}

renderHeader();