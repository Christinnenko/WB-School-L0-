export function renderAppPay() {
  document.addEventListener("DOMContentLoaded", function () {
    let appPay = document.getElementById("appPay");

    let htmlPay = `
    <div class="cart-result">
    <h4>Способ оплаты</h4>
    <a href="#">Изменить</a>
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

    // Вставляем HTML-разметку в контейнер
    appPay.innerHTML = htmlPay;
  });
}
