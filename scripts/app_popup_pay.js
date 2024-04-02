//Рендер попапа "Cпособ оплаты"

import { closePopup } from "./open_popup.js";

export const userCards = {
  cards: [
    {
      cardNumber: "1234 56•• •••• 1234",
      cardDate: "01/30",
      cardImg: "image/icon__MIR-card.svg",
    },
    {
      cardNumber: "1234 56•• •••• 1235",
      cardDate: "17/25",
      cardImg: "image/icon__VISA-card.svg",
    },
    {
      cardNumber: "1234 56•• •••• 1236",
      cardDate: "22/29",
      cardImg: "image/icon__MASTERCARD-card.svg",
    },
    {
      cardNumber: "1234 56•• •••• 1237",
      cardDate: "09/28",
      cardImg: "image/icon__MAESTRO-card.svg",
    },
  ],
};

export function renderAppPopupPay() {
  let appPopupPay = document.getElementById("appPopupPay");

  let htmlPopupPay = `
  <div class="popup-pay">
  <div class="popup-pay__content">
    <div class="popup-pay__header">
      <h2 class="popup-pay__title">Способ оплаты</h2>
      <a class="popup__close" href="#"
        ><img class="popup__close-icon"
          src="image/icon__close.svg"
          alt="Закрыть окно способ оплаты"
      /></a>
    </div>
    <form class="popup-pay__list" data-type="card">
    ${userCards.cards
      .map(
        (card) => `
      <label>
      <input class="popup-pay__input" type="radio" name="question-payment-method" data-type="card"/>
      <span class="radio-decor"></span>
        <img class="card-img" src="${card.cardImg}" alt="Выбор карты" />
        <p class="card-number">${card.cardNumber}</p>
      </label>
      `
      )
      .join("")}
    </form>
  </div>
  <button class="popup__card-btn">Выбрать</button>
</div>
  `;

  appPopupPay.innerHTML = htmlPopupPay;

  closePopup();

  //установка неактивного состояния кнопки выбрать по умолчанию
  const choiceCardBtn = document.querySelector(".popup__card-btn");
  choiceCardBtn.disabled = true;
  choiceCardBtn.classList.add("disableBtn");

  //активация кнопки выбора карты при выборе карты
  //изменение содержимого в app_order_result
  const cardRadioButtons = document.querySelectorAll(
    'input[name="question-payment-method"][data-type="card"]'
  );
  const pickupRadioButtons = document.querySelectorAll(
    'input[name="question-payment-method"][data-type="pickupPoint"]'
  );
  const courierRadioButtons = document.querySelectorAll(
    'input[name="question-payment-method"][data-type="courier"]'
  );

  const selectCardImg = document.querySelectorAll(".select-cart-img");
  const selectCardNumber = document.querySelectorAll(".select-cart-number");
  const selectCardDate = document.querySelectorAll(".select-cart-date");

  cardRadioButtons.forEach((cardRadioButton, index) => {
    cardRadioButton.addEventListener("change", () => {
      if (cardRadioButton.checked) {
        pickupRadioButtons.forEach((pickupRadioButton) => {
          pickupRadioButton.checked = false;
        });
        courierRadioButtons.forEach((courierRadioButton) => {
          courierRadioButton.checked = false;
        });

        const cardData = userCards.cards[index];

        selectCardImg.forEach((imgElement) => {
          imgElement.src = cardData.cardImg;
        });

        selectCardNumber.forEach((numberElement) => {
          numberElement.textContent = cardData.cardNumber;
        });

        selectCardDate.forEach((dateElement) => {
          dateElement.textContent = cardData.cardDate;
        });

        choiceCardBtn.disabled = false;
        choiceCardBtn.classList.remove("disableBtn");
      }
    });
  });

  //закрытие попапа на кнопку "Выбрать"
  choiceCardBtn.addEventListener("click", () => {
    const popupContainer = choiceCardBtn.closest("[data-popup]");
    popupContainer.style.display = "none";
  });
}
