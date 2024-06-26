import { form } from "../../data/form.js";

const inputContainer = document.querySelector(".input-container");

const renderForm = () => {
    const markup = form.map(({label, type, name, icon, autofocus, autocomplete})=> {
        return `<div class="form__field">
          <label for="name" class="form__label">${label}</label>
          <input class="form__input" type=${type} name="user-${name}" id=${name} autofocus=${autofocus} ${!autocomplete ? "autocomplete='off'" : ""} />
          <svg class="form__icon">
            <use href=${icon}></use>
          </svg>
        </div>`
    }).join('');

    inputContainer.innerHTML = markup;
}

renderForm();