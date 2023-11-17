export function renderAppForm() {
  document.addEventListener("DOMContentLoaded", function () {
    let appForm = document.getElementById("appForm");

    let htmlPersonalForm = `
    <div class="form-box__items">
      <input
        class="form-box__item"
        type="text"
        placeholder="Имя"
      />
      <input
        class="form-box__item"
        type="text"
        placeholder="Фамилия"
      />
    </div>
    <div class="form-box__items">
      <input
        class="form-box__item"
        type="email"
        placeholder="Почта"
      />
      <div class="form-box__phone-container">
        <label for="phone" class="form-box__label"
          >Телефон
          <input
            class="form-box__item"
            type="text"
            id="phone"
            placeholder="+7 988 123-45-67"
        /></label>
      </div>
      <div class="form-box__inn-container">
        <input
          class="form-box__item"
          id="inn"
          type="text"
          placeholder="ИНН"
        /><label for="inn" class="form-box__label-inn"
          >Для таможенного оформления</label
        >
      </div>
      </div>
    `;

    // Вставляем HTML-разметку в контейнер
    appForm.innerHTML = htmlPersonalForm;
  });
}
