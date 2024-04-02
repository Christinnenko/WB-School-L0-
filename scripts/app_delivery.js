//Рендер поля "Cпособ доставки"

import { showTooltip } from "./utils/tooltip.js";
import { userAddress } from "./app_popup_delivery.js";

export function renderAppDelivery() {
  let appDelivery = document.getElementById("appDelivery");

  let htmlDelivery = `
    <div class="cart-result">
    <h4>Способ доставки</h4>
    <a class="popup-link" data-popup="popup-delivery" href="#">Изменить</a>
  </div>
  <div class="cart-result-order__item">
    <div class="cart-result-order__item-info">
      <p class="cart-result-order__item-title-pick-up">Пункт выдачи</p>
      <div class="cart-result-order__item-info-adress-box">
      <span class="selected-address">${
        userAddress.delivery.pickupPoint[0].address
      }</span>
      <div class="cart-result-order__item-info-adress">
        <div>
          ${
            userAddress.delivery.pickupPoint[0].rate !== null
              ? '<img class="rate-icon" src="image/icon__star.svg" alt="рейтинг" />'
              : ""
          }
          ${
            userAddress.delivery.pickupPoint[0].rate !== null
              ? `<span class="select-address-rate">${userAddress.delivery.pickupPoint[0].rate}</span>`
              : ""
          }
        </div>
        <span class="select-address-work-hours">${
          userAddress.delivery.pickupPoint[0].workHours
        }</span>
      </div>
</div>
    </div>
    <div class="cart-result-order__item-info">
      <p class="cart-result-order__item-delivery-price">
        Стоимость доставки
      </p>
      <span>Бесплатно</span>
    </div>
    <div class="cart-result-order__item-info">
      <p class="cart-result-order__item-nearest-delivery">5—6 февраля</p>
      <div class="cart-result-order__img">
        <div class="cart-result-order__img-count">
          <a href="#"
            ><img
              class="cart-result-order__img-image"
              src="image/product__t-shirt.jpg"
              alt="Футболка мужская"
          /></a>
        </div>
        <div class="cart-result-order__img-count">
          <a href="#"
            ><img
              class="cart-result-order__img-image"
              src="image/product__phone-case.jpg"
              alt="Силиконовый чехол для телефона"
            /><span class="count count-buy">184</span></a
          >
        </div>
        <div class="cart-result-order__img-count">
          <a href="#"
            ><img
              class="cart-result-order__img-image"
              src="image/product__color-pencils.jpg"
              alt="Карандаши цветные"
            /><span class="count count-buy">2</span></a
          >
        </div>
      </div>
    </div>
    <div class="cart-result-order__item-info">
      <p class="cart-result-order__item-next-time-delivery">7—8 февраля</p>
      <div class="cart-result-order__item-img">
        <div class="cart-result-order__img">
          <div class="cart-result-order__img-count">
            <a href="#"
              ><img
                class="cart-result-order__img-image"
                src="image/product__phone-case.jpg"
                alt="Силиконовый чехол для телефона"
              /><span class="count count-buy">16</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="return return-info">
    <img
      src="image/icon__mark.svg"
      alt="Информация о возврате товара"
    />
    <p>
      Обратная доставка товаров на склад при отказе —
      <a href="#" class="return-info__tooltip">бесплатно</a>
    </p>
  </div>`;

  appDelivery.innerHTML = htmlDelivery;

  const returnInfo = document.querySelectorAll(".return-info__tooltip");
  returnInfo.forEach((info) => {
    info.addEventListener("mouseenter", () => {
      const tooltipContent = `
        <div class="return-info__tooltip-content">
          <p>Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно</p>
        </div>`;
      showTooltip(info, tooltipContent);
    });
  });
}
