//Рендер поля "Cпособ оплаты"

import { userCards } from "./app_popup_pay.js";
import { openPopup } from "./open_popup.js";

export function renderAppPay() {
  let appPay = document.getElementById("appPay");

  let htmlPay = `
    <div class="cart-result">
    <h4>Способ оплаты</h4>
    <a class="popup-link" data-popup="popup-pay" href="#">Изменить</a>
  </div>
  <div class="cart-order-result-container">
    <div class="cart-order-result-card">
      <img class="card-img select-cart-img" src="${userCards.cards[0].cardImg}" alt="выбранная карта" />
      <p class="card-number select-cart-number">${userCards.cards[0].cardNumber}</p>
      <p class="card-date select-cart-date">${userCards.cards[0].cardDate}</p>
    </div>
    <div class="cart-order-result-card-pay">
      <p class="pay-now">Спишем оплату с карты при получении</p>
    </div>
  </div>
      `;

  appPay.innerHTML = htmlPay;

  openPopup();
}
