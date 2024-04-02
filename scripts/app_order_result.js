//Рендер поля итоговой информации о заказе
import { openPopup } from "./open_popup.js";
import {
  calculateTotalDiscountOrder,
  calculateTotalQuantityOrder,
  calculateTotalSumOrder,
  calculateTotalSumWithoutDiscount,
} from "./utils/calculate.js";
import { showTooltip } from "./utils/tooltip.js";
import { userAddress } from "./app_popup_delivery.js";
import { userCards } from "./app_popup_pay.js";

export function renderAppOrderResult() {
  let appOrderResult = document.getElementById("appOrderResult");

  let htmlOrderResult = `
    <div>
    <div class="cart-result">
      <p>Итого</p>
      <p class="cart-result__total-sum">0<span> сом</span></p>
    </div>
    <div class="cart-order-container">
      <div class="cart-order__info">
        <p class="cart-order__quantity">0</p>
        <p class="cart-order__total-sum-without-discount">0</p>
      </div>
      <div class="cart-order__info">
        <p>Скидка</p>
        <p class="cart-order__total-discount">0</p>
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
        <h4 class="select-delivery">Доставка курьером</h4>
        <a class="popup-link" data-popup="popup-delivery" href="#"
          ><img
            src="image/icon__pencil.svg"
            alt="Изменить адрес доставки"
        /></a>
      </div>
      <div class="cart-order__delivery-address">
        <p class="selected-address">${userAddress.delivery.pickupPoint[0].address}</p>
        <span class="cart-order__delivery-date">5–8 фев</span>
      </div>
    </div>
    <div class="return">
      <img
        src="image/icon__mark.svg"
        alt="Информация о возврате товара"
      />
      <p class="return-info__return">
        Обратная доставка товаров
        <span>на склад при отказе — <a href="#" class="return-info__tooltip">бесплатно</a></span>
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
      <img class="card-img select-cart-img" src="${userCards.cards[0].cardImg}" alt="выбранная карта" />
      <p class="card-number select-cart-number">${userCards.cards[0].cardNumber}</p>
    </div>
    <div class="cart-order__card-pay-now">
      <input class="checkbox-pay" type="checkbox" id="select-pay-now" />
      <label
        class="custom-checkbox custom-checkbox-pay"
        for="select-pay-now"
        >Списать оплату сразу</label
      >
      <p class="text-pay-now">Спишем оплату с карты при получении</p>
    </div>
  </div>
  <div class="cart-order__do-order">
    <button class="cart-order__btn" id="orderButton">Заказать</button>
    <div class="oferta-access">
      <img
        src="image/icon__mark-agree.svg"
        alt="согласен с правилами пользования торговой площадкой и возврата"
      />
      <p class="oferta-access__text">
        Соглашаюсь
        <a href="#">с правилами пользования торговой площадкой</a>
        и <a href="#">возврата</a>
      </p>
    </div>
  </div>
      `;

  appOrderResult.innerHTML = htmlOrderResult;

  openPopup();
  calculateTotalQuantityOrder();
  calculateTotalSumWithoutDiscount();
  calculateTotalDiscountOrder();

  deactivateOrderButton();

  //изменение итоговой суммы на кнопке Заказать при нажатом чекбоксе
  const checkboxPayNow = document.getElementById("select-pay-now");
  const payNowText = document.querySelector(".pay-now");

  calculateTotalSumOrder(checkboxPayNow);
  payNowText.innerText = "";

  checkboxPayNow.addEventListener("change", function () {
    if (checkboxPayNow.checked) {
      calculateTotalSumOrder(checkboxPayNow);
      payNowText.innerText = "";
    } else {
      calculateTotalSumOrder(checkboxPayNow);
      payNowText.innerText = "Спишем оплату с карты при получении";
    }
  });

  //всплывающая подсказка
  const returnsInfo = document.querySelectorAll(".return-info__tooltip");
  returnsInfo.forEach((returnInfo) => {
    returnInfo.addEventListener("mouseenter", () => {
      const tooltipContent = `
        <div class="return-info__tooltip-content">
          <p>Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно</p>
        </div>`;
      showTooltip(returnInfo, tooltipContent);
    });
  });
}

//активация кнопки Заказать
export function activateOrderButton() {
  const choiceOrderBtn = document.getElementById("orderButton");
  choiceOrderBtn.disabled = false;
  choiceOrderBtn.classList.remove("disableBtn");
}

// //деактивация кнопки Заказать
export function deactivateOrderButton() {
  const choiceOrderBtn = document.getElementById("orderButton");
  choiceOrderBtn.disabled = true;
  choiceOrderBtn.classList.add("disableBtn");
}
