//Рендер формы для заполнения пользователем

import { validateForm } from "./validationForm.js";

export function renderAppForm() {
  let appForm = document.getElementById("appForm");

  let htmlPersonalForm = `
    <div class="form-box__items">
      <div class="form-box__item-container">
        <input
          class="form-box__item"
          type="text"
          placeholder="Имя"
          id="firstName"
        />
        <label for="firstName" class="form-box__label" id="firstNameLabel"></label>
      </div>
      <div class="form-box__item-container">
        <input
          class="form-box__item"
          type="text"
          placeholder="Фамилия"
          id="lastName"
        />
        <label for="lastName" class="form-box__label" id="lastNameLabel"></label>
      </div>
    </div>
    <div class="form-box__items">
      <div class="form-box__item-container">
        <input
          class="form-box__item"
          type="email"
          placeholder="Электронная почта"
          id="email"
        />
        <label for="email" class="form-box__label" id="emailLabel"></label>
      </div>
      <div class="form-box__phone-container">
        <label for="phone" class="form-box__label"
          >Телефон
          <input
            class="form-box__item"
            type="tel"
            id="phone"
            placeholder="+7 988 123 45 67"
          />
        </label>
        <label for="phone" class="form-box__label" id="phoneLabel"></label>
      </div>
      <div class="form-box__inn-container">
        <input
          class="form-box__item"
          id="inn"
          type="text"
          placeholder="ИНН"
        />
        <label for="inn" class="form-box__label" id="innLabel"></label>
        <label for="inn" class="form-box__label-inn"
          >Для таможенного оформления</label
        >
      </div>
    </div>
  `;

  appForm.innerHTML = htmlPersonalForm;

  validateForm();
}
