import { closePopup } from "./openPopup.js";

export function renderAppPopupPay() {
  let appPopupPay = document.getElementById("appPopupPay");

  let htmlPopupPay = `
  <div class="popup-pay">
  <div class="popup-pay__content">
    <div class="popup-pay__header">
      <h2 class="popup-pay__title">Способ оплаты</h2>
      <a class="popup__close" href="#"
        ><img
          src="image/icon__close.svg"
          alt="Закрыть окно способ оплаты"
      /></a>
    </div>
    <form class="popup-pay__list">
      <label>
        <input type="radio" name="question-payment-method" value="mir" />
        <img src="image/icon__MIR-card.svg" alt="Оплатить картой Мир" />
        <p>1234 56•• •••• 1234</p>
      </label>
      <br />
      <label>
        <input type="radio" name="question-payment-method" value="visa" />
        <img src="image/icon__VISA-card.svg" alt="Оплатить картой Виза" />
        <p>1234 56•• •••• 1234</p>
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="question-payment-method"
          value="mastercard"
        />
        <img
          src="image/icon__MASTERCARD-card.svg"
          alt="Оплатить картой Мастеркард"
        />
        <p>1234 56•• •••• 1234</p>
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="question-payment-method"
          value="maestro"
        />
        <img
          src="image/icon__MAESTRO-card.svg"
          alt="Оплатить картой Маестро"
        />
        <p>1234 56•• •••• 1234</p>
      </label>
    </form>
  </div>
  <button class="popup__button">Выбрать</button>
</div>
  `;

  // Вставляем HTML-разметку в контейнер
  appPopupPay.innerHTML = htmlPopupPay;

  closePopup();
}
