export function renderAppDelivery() {
  document.addEventListener("DOMContentLoaded", function () {
    let appDelivery = document.getElementById("appDelivery");

    let htmlDelivery = `
    <div class="cart-result">
    <h4>Способ доставки</h4>
    <a href="#">Изменить</a>
  </div>
  <div class="cart-result-order__item">
    <div class="cart-result-order__item-info">
      <p class="cart-result-order__item-title1">Пункт выдачи</p>
      <div class="cart-result-order__item-info-adress-box">
        <span>Бишкек, улица Ахматбека Суюмбаева, 12/1</span>
        <div class="cart-result-order__item-info-adress">
          <div>
            <img src="image/icon__star.svg" alt="рейтинг" />
            <span>4.99</span>
          </div>
          <span>Ежедневно с 10 до 21</span>
        </div>
      </div>
    </div>
    <div class="cart-result-order__item-info">
      <p class="cart-result-order__item-title2">
        Стоимость доставки
      </p>
      <span>Бесплатно</span>
    </div>
    <div class="cart-result-order__item-info">
      <p class="cart-result-order__item-title3">5—6 февраля</p>
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
              src="image/product__colour-pencils.jpg"
              alt="Карандаши цветные"
            /><span class="count count-buy">2</span></a
          >
        </div>
      </div>
    </div>
    <div class="cart-result-order__item-info">
      <p class="cart-result-order__item-title4">7—8 февраля</p>
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
      <a href="#">бесплатно</a>
    </p>
  </div>`;

    // Вставляем HTML-разметку в контейнер
    appDelivery.innerHTML = htmlDelivery;
  });
}
