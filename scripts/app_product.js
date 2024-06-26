//объект с товарами
//Рендер продуктов в наличии
import {
  hideProducts,
  activeChoiceAll,
  activeChoiceProduct,
} from "./choice_product.js";
import { showTooltip } from "./utils/tooltip.js";
import { deleteProduct, addFavProduct } from "./actions_product.js";
import {
  addQuantityEventListeners,
  calculateTotalQuantity,
} from "./utils/calculate.js";

export const userProducts = [
  {
    id: 1,
    name: "Футболка UZcotton мужская",
    image: "image/product__t-shirt.jpg",
    bigImage: "image/big_product__t-shirt.jpg",
    color: "белый",
    size: 56,
    warehouse: "Коледино WB",
    seller: "OOO Вайлдберриз",
    sellerInfo: {
      orgName: "OOO «Вайлдберриз»",
      orgBin: "ОГРН: 5166662345622",
      orgAddress:
        "129444, Москва, улица Ленина, 3, корпус 2, помещение 17, офис 8",
    },
    quantity: 1,
    remaining: 2,
    finalPrice: 522,
    oldPrice: 1051,
    isFavorites: false,
    personalDiscount: 15,
  },
  {
    id: 2,
    name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    image: "image/product__phone-case.jpg",
    bigImage: "image/big_product__phone-case.jpg",
    color: "прозрачный",
    size: null,
    warehouse: "Коледино WB",
    seller: "OOO Мегапрофстиль",
    sellerInfo: {
      orgName: "OOO «Мегапрофстиль»",
      orgBin: "ОГРН: 5167746237148",
      orgAddress:
        "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    },
    quantity: 1,
    remaining: 500,
    finalPrice: 10500,
    oldPrice: 11500,
    isFavorites: false,
    personalDiscount: 10,
  },
  {
    id: 3,
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    image: "image/product__color-pencils.jpg",
    bigImage: "image/big_product__colour-pencils.jpg",
    color: null,
    size: null,
    warehouse: "Коледино WB",
    seller: "OOO Вайлдберриз",
    sellerInfo: {
      orgName: "OOO «Вайлдберриз»",
      orgBin: "ОГРН: 5166662345622",
      orgAddress:
        "129444, Москва, улица Ленина, 3, корпус 2, помещение 17, офис 8",
    },
    quantity: 1,
    remaining: 2,
    finalPrice: 247,
    oldPrice: 475,
    isFavorites: false,
    personalDiscount: 10,
  },
];

export function renderAppProduct() {
  let appProduct = document.getElementById("appProduct");

  let htmlProducts = userProducts
    .map((userProduct) => {
      return `
      <div id="product${userProduct.id}" class="cart-product-container">
      <div class="cart-product">
        <div class="cart-product__left">
          <div class="checkbox-container">
            <input class="checkbox cart-product__checkbox" type="checkbox" id="select${
              userProduct.id
            }" />
            <label class="custom-checkbox" for="select${
              userProduct.id
            }"></label>
            <a href="#">
            <img class="cart-product__img"
              src="${userProduct.image}"
              srcset="${userProduct.bigImage} 1401w"
              sizes="(min-width: 1401px) 72px, 100vw"
              alt="${userProduct.name}"
            />
          </a>
          </div>
          <div class="cart-product__options">
          <div class="cart-product__price-mob">	
          <p data-final-price="${
            userProduct.finalPrice
          }" class="cart-product__final-price cart-product__added-total-sum" data-set="final-price">
            ${userProduct.finalPrice}<span> сом</span>
          </p>
          <p data-old-price="${
            userProduct.oldPrice
          }" class="cart-product__old-price" data-set="old-price">${
        userProduct.oldPrice
      } сом</p>
          </div>
            <p class="cart-product__name">${userProduct.name}</p>
            <div class="cart-product__option">
            ${
              userProduct.color
                ? `<p class="cart-product__color">Цвет: ${userProduct.color}</p>`
                : ""
            }
            ${
              userProduct.size
                ? `<p class="cart-product__size">Размер: ${userProduct.size}</p>`
                : ""
            }
          </div>
            <p class="cart-product__warehouse">${userProduct.warehouse}</p>
            <div class="cart-product__seller-box">
              <p class="cart-product__seller">${userProduct.seller}</p>
              <img src="image/icon__information.svg"
              alt="Информация о продавце" 
              class="seller-info__tooltip"/>
            </div>
          </div>
        </div>
        <div class="cart-product__right">
          <div class="cart-product-box">
            <div class="cart-product-box-quantity">
                <button class="quantity-btn minus-btn" type="button">-</button>
                  <input
              class="cart-product__quantity-count"
              type="number"
              value="${userProduct.quantity}"
              min="1"
              max="${userProduct.remaining}"
              readonly
              />
                  <button class="quantity-btn plus-btn" type="button">+</button>
            </div>
            ${
              userProduct.remaining > 2
                ? `<p class="cart-product__remaining"></p>`
                : `
              <p class="cart-product__remaining">Осталось ${userProduct.remaining} шт.</p>
            `
            }
            <div class="cart-product__actions">
              <a href="#" class="actions__btn-heart" data-id="${
                userProduct.id
              }">
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
              <a href="#" class="actions__btn-cart" data-id="${userProduct.id}">
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
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="cart-product__price">
            <p data-final-price="${
              userProduct.finalPrice
            }" class="cart-product__final-price">
            ${userProduct.finalPrice}<span> сом</span>
            </p>
            <p data-old-price="${
              userProduct.oldPrice
            }" class="cart-product__old-price old-price__tooltip">${
        userProduct.oldPrice
      } сом</p>
          </div>
        </div>
      </div>
    </div>
    `;
    })
    .join("");

  appProduct.innerHTML = htmlProducts;

  setFontSizeForPrices();
  addQuantityEventListeners();
  hideProducts("hideProduct", "appProduct");
  activeChoiceAll();
  activeChoiceProduct();

  //всплывающие подсказки
  const sellersInfo = document.querySelectorAll(".seller-info__tooltip");
  sellersInfo.forEach((sellerInfo, index) => {
    sellerInfo.addEventListener("mouseenter", () => {
      const tooltipContent = `
            <div class="seller-info__tooltip-content">
              <h2>${userProducts[index].sellerInfo.orgName}</h2>
              <div>${userProducts[index].sellerInfo.orgBin}</div>
              <div>${userProducts[index].sellerInfo.orgAddress}</div>
            </div>
          `;

      showTooltip(sellerInfo, tooltipContent);
    });
  });

  //расчет скидок для всплывающей подсказки
  const oldPricesInfo = document.querySelectorAll(".old-price__tooltip");

  oldPricesInfo.forEach((oldPriceInfo, index) => {
    oldPriceInfo?.addEventListener("mouseenter", () => {
      const container = oldPriceInfo.closest(".cart-product-container");

      if (!container) return;

      if (userProducts[index] && userProducts[index].oldPrice) {
        const oldPrice = userProducts[index].oldPrice;
        const finalPrice = userProducts[index].finalPrice;
        const personalPercentage = parseInt(
          userProducts[index].personalDiscount
        );
        const personalDiscount = Math.round(
          oldPrice * (personalPercentage / 100)
        );
        const sellerDiscount = Math.round(
          oldPrice - personalDiscount - finalPrice
        );
        const sellerPercentage = Math.round((sellerDiscount / oldPrice) * 100);

        const quantityProduct = container.querySelector(
          ".cart-product__quantity-count"
        );

        const tooltipContent = `
          <div class="old-price__tooltip__tooltip-content">
            ${
              sellerPercentage >= 0
                ? `<div class="discount-info">
                    <p class="discount-info__text">Cкидка ${sellerPercentage}%</p>
                    <p>${-sellerDiscount * quantityProduct.value} сом</p>
                  </div>`
                : ""
            }
            <div class="discount-info">
              <p class="discount-info__text">Cкидка покупателя ${personalPercentage}%</p>
              <p>${-personalDiscount * quantityProduct.value} сом</p>
            </div>
          </div>
        `;

        showTooltip(oldPriceInfo, tooltipContent);
      }
    });
  });

  //удаление из корзины
  const deleteButtons = document.querySelectorAll(".actions__btn-cart");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id;
      deleteProduct(productId);
    });
  });

  //добавление в избранное
  const favButtons = document.querySelectorAll(".actions__btn-heart");
  favButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id;
      addFavProduct(productId);
    });
  });
}

//функция установки размера шрифта цены(при цене более 999)
function setFontSizeForPrices() {
  const finalPriceElements = document.querySelectorAll(
    ".cart-product__final-price"
  );

  finalPriceElements.forEach((finalPriceElement) => {
    const currentFinalPrice = parseFloat(
      finalPriceElement.getAttribute("data-final-price")
    );

    if (currentFinalPrice > 999) {
      finalPriceElement.style.fontSize = "16px";
    } else {
      finalPriceElement.style.fontSize = "";
    }
  });
}

calculateTotalQuantity();
