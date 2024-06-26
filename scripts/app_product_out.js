//Рендер продуктов не в наличии
import { hideProducts } from "./choice_product.js";

export function renderAppProductOut() {
  let appProductOut = document.getElementById("appProductOut");

  let htmlProductOut = `<div class="cart__header" id="userProduct">
    <h3 class="cart__header-title">Отсутствуют · 3 товара</h3>
    <img id="hideProductOut" src="image/icon__arrow.svg" alt="Свернуть/развернуть" />
  </div>
  <div id="product-conteiner" class="cart-product-container">
    <div class="cart-product out-of-stock">
      <div class="cart-product__left">
        <div class="checkbox-container">
          <input
            class="checkbox out-stock"
            type="checkbox"
            id="select4"
          />
          <label
            class="custom-checkbox out-stock"
            for="select4"
          ></label>
          <a href="#"
            ><img class="out-stock__img"
            src="image/product__t-shirt.jpg"
            srcset="image/big_product__t-shirt.jpg 1401w"
            sizes="(min-width: 1401px) 72px, 100vw"
            alt="Футболка UZcotton мужская"
          /></a>
        </div>
        <div class="cart-product__options out-of-stock">
          <div class="cart-product__price-mob out-stock">
            <p class="cart-product__final-price">
              522<span> сом</span>
            </p>
            <p class="cart-product__old-price">1051 сом</p>
          </div>
          <p class="cart-product__name product__name">Футболка UZcotton мужская</p>
          <div class="cart-product__option">
            <p class="cart-product__color color__name">Цвет: белый</p>
            <p class="cart-product__size">Размер: 56</p>
          </div>
          <p class="cart-product__warehouse out-stock">Коледино WB</p>
          <div class="cart-product__seller-box out-stock">
            <p class="cart-product__seller">OOO Мегапрофстиль</p>
            <img
              src="image/icon__information.svg"
              alt="Информация о продавце"
            />
          </div>
        </div>
      </div>
      <div class="cart-product__right">
        <div class="cart-product-box">
          <input
            class="cart-product__quantity-count out-stock"
            type="number"
            value="1"
            min="1"
          />
          <div class="cart-product__actions">
            <a href="#" class="actions__btn-heart">
              <svg class="cart-product__icon-heart"
               xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
               viewBox="0 0 20 20"
               fill="currentColor"
              >
                <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"/>
              </svg>
            </a>
            <a href="#" class="actions__btn-cart">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                  /></svg>
                </a>
          </div>
        </div>
        <div class="cart-product__price out-stock">
          <p class="cart-product__final-price-small out-stock">
            2 100 047<span> сом</span>
          </p>
          <p class="cart-product__old-price out-stock">2 300 047 сом</p>
        </div>
      </div>
    </div>
    <div class="cart-product out-of-stock">
      <div class="cart-product__left">
        <div class="checkbox-container">
          <input
            class="checkbox out-of-stock"
            type="checkbox"
            id="select5"
          />
          <label
            class="custom-checkbox out-stock"
            for="select5"
          ></label>
          <a href="#"
            ><img class="out-stock__img"
            src="image/product__phone-case.jpg"
            srcset="image/big_product__phone-case.jpg 1401w"
            sizes="(min-width: 1401px) 72px, 100vw"
            alt="Силиконовый чехол картхолдер (отверстия) для карт"
          /></a>
        </div>
        <div class="cart-product__options out-of-stock">
          <div class="cart-product__price-mob out-stock">
            <p class="cart-product__final-price-small out-stock">
              2 100 047<span> сом</span>
            </p>
            <p class="cart-product__old-price out-stock">2 300 047 сом</p>
          </div>
          <p class="cart-product__name product__name">
            Силиконовый чехол картхолдер (отверстия) для карт,
            прозрачный кейс бампер на Apple iPhone XR, MobiSafe
          </p>
          <div class="cart-product__option">
            <p class="cart-product__color color__name">Цвет: прозрачный</p>
          </div>
          <p class="cart-product__warehouse out-stock">Коледино WB</p>
          <div class="cart-product__seller-box out-stock">
            <p class="cart-product__seller">OOO Мегапрофстиль</p>
            <img
              src="image/icon__information.svg"
              alt="Информация о продавце"
            />
          </div>
        </div>
      </div>
      <div class="cart-product__right">
        <div class="cart-product-box">
          <input
            class="cart-product__quantity-count out-stock"
            type="number"
            value="1"
            min="1"
          />
          <div class="cart-product__actions">
            <a href="#" class="actions__btn-heart">
              <svg class="cart-product__icon-heart"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"/>
                </svg>
            </a>
            <a href="#" class="actions__btn-cart"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                  /></svg>
            </a>
          </div>
        </div>
        <div class="cart-product__price out-stock">
          <p class="cart-product__final-price-small out-stock">
            2 100 047<span> сом</span>
          </p>
          <p class="cart-product__old-price out-stock">2 300 047 сом</p>
        </div>
      </div>
    </div>
    <div class="cart-product out-of-stock">
      <div class="cart-product__left">
        <div class="checkbox-container">
          <input class="checkbox" type="checkbox" id="select6" />
          <label
            class="custom-checkbox out-stock"
            for="select6"
          ></label>
          <a href="#"
            ><img class="out-stock__img"
            src="image/product__color-pencils.jpg"
            srcset="image/big_product__colour-pencils.jpg 1401w"
            alt="Карандаши цветные Faber-Castell"
          /></a>
        </div>
        <div class="cart-product__options out-of-stock">
          <div class="cart-product__price-mob out-stock">
            <p class="cart-product__final-price out-stock">
              494<span> сом</span>
            </p>
            <p class="cart-product__old-price out-stock">950 сом</p>
          </div>
          <p class="cart-product__name product__name">
            Карандаши цветные Faber-Castell "Замок", набор 24 цвета,
            заточенные, шестигранные, Faber-Castell
          </p>
          <div class="cart-product__option"></div>
          <p class="cart-product__warehouse out-stock">Коледино WB</p>
          <div class="cart-product__seller-box out-stock">
            <p class="cart-product__seller">OOO Вайлдберриз</p>
            <img
              src="image/icon__information.svg"
              alt="Информация о продавце"
            />
          </div>
        </div>
      </div>
      <div class="cart-product__right">
        <div class="cart-product-box">
          <input
            class="cart-product__quantity-count out-stock"
            type="number"
            value="1"
            min="1"
          />
          <p class="cart-product__remaining out-stock">
            Осталось 2 шт.
          </p>
          <div class="cart-product__actions">
            <a href="#" class="actions__btn-heart">
            <svg class="cart-product__icon-heart"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"
                /></svg
            ></a>
            <a href="#" class="actions__btn-cart"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                  /></svg>
              </a>
          </div>
        </div>
        <div class="cart-product__price out-stock">
          <p class="cart-product__final-price out-stock">
            494<span> сом</span>
          </p>
          <p class="cart-product__old-price out-stock">950 сом</p>
        </div>
      </div>
    </div>
  </div>
    `;

  appProductOut.innerHTML = htmlProductOut;

  hideProducts("hideProductOut", "product-conteiner");
}
