//Рендер поля итоговой информации о заказе

import { openPopup } from "./openPopup.js";

export function renderAppOrderResult() {
  let appOrderResult = document.getElementById("appOrderResult");

  let totalSum = calculateTotalSum();

  let htmlOrderResult = `
    <div>
    <div class="cart-result">
      <p>Итого</p>
      <p>${totalSum}<span> сом</span></p>
    </div>
    <div class="cart-order-container">
      <div class="cart-order__info">
        <p>203 товара</p>
        <p>2 302 048 сом</p>
      </div>
      <div class="cart-order__info">
        <p>Скидка</p>
        <p>-200 985 сом</p>
      </div>
      <div class="cart-order__info">
        <p>Доставка</p>
        <p>Бесплатно</p>
      </div>
    </div>
  </div>
  <div class="cart-order__delivery">
    <div class="cart-order__delivery-info">
      <div class="cart-order__delivery-header">
        <h4>Доставка в пункт выдачи</h4>
        <a class="popup-link" data-popup="popup-delivery" href="#"
          ><img
            src="image/icon__pencil.svg"
            alt="Изменить адрес пункта выдачи"
        /></a>
      </div>
      <div class="cart-order__delivery-address">
        <p>Бишкек, улица Ахматбека Суюмбаева, 12/1</p>
        <a href="#"><span>5–8 фев</span></a>
      </div>
    </div>
    <div class="return">
      <img
        src="image/icon__mark.svg"
        alt="Информация о возврате товара"
      />
      <p>
        Обратная доставка товаров
        <span>на склад при отказе — <a href="#">бесплатно</a></span>
      </p>
    </div>
  </div>
  <div class="cart-order__payment">
    <div class="cart-order__payment-header">
      <h4>Оплата картой</h4>
      <a class="popup-link" data-popup="popup-pay" href="#"
        ><img src="image/icon__pencil.svg" alt="Сменить платежную карту"
      /></a>
    </div>
    <div class="cart-order__payment-card-info">
      <img src="image/icon__MIR-card.svg" alt="карта МИР" />
      <p>1234 12•• •••• 1234</p>
    </div>
    <div class="cart-order__card-pay-now">
      <input class="checkbox-pay" type="checkbox" id="select-pay-now" />
      <label
        class="custom-checkbox custom-checkbox-pay"
        for="select-pay-now"
        >Списать оплату сразу</label
      >
      <p>Спишем оплату с карты при получении</p>
    </div>
  </div>
  <div class="cart-order__do-order">
    <button id="orderButton">Заказать</button>
    <div class="oferta-access">
      <img
        src="image/icon__mark-agree.svg"
        alt="согласен с правилами пользования торговой площадкой и возврата"
      />
      <p>
        Соглашаюсь
        <a href="#">с правилами пользования торговой площадкой</a>
        и <a href="#">возврата</a>
      </p>
    </div>
  </div>
      `;

  appOrderResult.innerHTML = htmlOrderResult;
  updateTotalSum(totalSum);
  openPopup();
  calculateTotalSum();
}

export function calculateTotalSum() {
  const finalSumElements = document.querySelectorAll(
    ".cart-product__final-price"
  );

  let totalSum = 0;

  finalSumElements.forEach((finalSumElement) => {
    const currentFinalSum = parseFloat(
      finalSumElement.getAttribute("data-final-price")
    );

    if (!isNaN(currentFinalSum)) {
      totalSum += currentFinalSum;
    }
  });

  return totalSum;
}

export function updateTotalSum(totalSum) {
  const totalSumElement = document.querySelector(".cart-result p:last-child");
  if (totalSumElement) {
    totalSumElement.innerHTML = `${totalSum} <span>сом</span>`;
  }
}
