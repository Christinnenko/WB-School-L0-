//Рендер поля "Cпособ оплаты"

import { openPopup } from "./openPopup.js";

export function renderAppPay() {
  let appPay = document.getElementById("appPay");

  let htmlPay = `
    <div class="cart-result">
    <h4>Способ оплаты</h4>
    <a class="popup-link" data-popup="popup-pay" href="#">Изменить</a>
  </div>
  <div class="cart-order-result-container">
    <div class="cart-order-result-card">
      <img src="image/icon__MIR-card.svg" alt="карта МИР" />
      <p>1234 56•• •••• 1234</p>
      <p>01/30</p>
    </div>
    <div class="cart-order-result-card-pay">
      <p>Спишем оплату с карты при получении</p>
    </div>
  </div>
      `;

  appPay.innerHTML = htmlPay;

  openPopup();
}
