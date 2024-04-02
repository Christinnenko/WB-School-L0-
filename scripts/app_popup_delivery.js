//Рендер попапа "Cпособ доставки"

import { closePopup } from "./open_popup.js";

export const userAddress = {
  delivery: {
    pickup: [
      {
        address: "г. Бишкек, микрорайон Джал, улица Исы, д. 22",
      },
      {
        address: "Бишкек, улица Жукеева-Пудовкина, 77/1",
      },
      {
        address: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
      },
    ],
    pickupPoint: [
      {
        address: "г. Бишкек, микрорайон Джал, улица Исы, д. 63/1",
        rate: 4.99,
        workHours: "Ежедневно с 8 до 20 ",
      },
      {
        address: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 22",
        rate: null,
        workHours: "Ежедневно с 10 до 22 ",
      },
      {
        address: "г. Бишкек, улица Табышалиева, д. 17",
        rate: 4.98,
        workHours: "Ежедневно с 9 до 21 ",
      },
    ],
  },
};

export function renderAppPopupDelivery() {
  let appPopupDelivery = document.getElementById("appPopupDelivery");

  let htmlPopupDelivery = `
  <div class="popup-delivery">
    <div class="popup-delivery__content">
      <div class="popup-delivery__header">
        <h2 class="popup-delivery__title">Способ доставки</h2>
        <a class="popup__close" href="#">
          <img class="popup__close-icon" src="image/icon__close.svg" alt="Закрыть окно способ доставки" />
        </a>
      </div>
      <div class="popup-delivery__choice">
        <button class="popup-delivery__choice-btn" id="pick-up-point">В пункт выдачи</button>
        <button class="popup-delivery__choice-btn active" id="courier">Курьером</button>
      </div>
      <h3 class="popup-delivery__list-title">Мои адреса</h3>
      <form class="popup-delivery__list-pick-up-point">
        ${userAddress.delivery.pickupPoint
          .map(
            (address) => `
            <div class="popup-delivery__list-container" data-address="${
              address.address
            }">
              <div class="popup-delivery__list">
                <label class="popup-delivery__list-address-container">
                  <input type="radio" name="question-payment-method" class="radio-btn__pickup-point"/>
                  <span class="radio-decor"></span>
                  <div class="popup-delivery__list-address">
                    <p class="delivery-address">${address.address}</p>
                    <div class="popup-delivery__list-rating">
                      <img src="image/icon__star.svg" alt="Рейтинг пункта выдачи" />
                      ${address.rate ? `<p>${address.rate}</p>` : ""}
                      <p class="popup-delivery__pick-up-point">Пункт выдачи</p>
                    </div>
                  </div>
              </div>
                <a href="#" class="delivery__btn-cart" data-address="${
                  address.address
                }">
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
              </label>`
          )
          .join("")}
      </form>
      <form class="popup-delivery__list-courier">
        ${userAddress.delivery.pickup
          .map(
            (address) => `
            <div class="popup-delivery__list-container" data-address="${address.address}">
              <div class="popup-delivery__list">
                <label class="popup-delivery__list-address-container">
                  <input type="radio" name="question-delivery-method" class="radio-btn__courier"/>
                  <span class="radio-decor"></span>
                  <div class="popup-delivery__list-address">
                    <p class="delivery-address">${address.address}</p>
                  </div>
                  </div>
                  <a href="#" class="delivery__btn-cart" data-address="${address.address}">
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
                </label>
            `
          )
          .join("")}
      </form>
    </div>
    <button class="popup__delivery-btn">Выбрать</button>
  </div>
  `;

  appPopupDelivery.innerHTML = htmlPopupDelivery;

  closePopup();

  //установка неактивного состояния кнопки выбрать по умолчанию
  const choiceAddressBtn = document.querySelector(".popup__delivery-btn");
  choiceAddressBtn.disabled = true;
  choiceAddressBtn.classList.add("disableBtn");

  //удаление адреса из списка
  const deleteAddressBtns = document.querySelectorAll(".delivery__btn-cart");
  deleteAddressBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const address = button.dataset.address;
      deleteAddress(address);
    });
  });

  //изменение содержимого попапа (вкладки)
  const pickUpPointButton = document.getElementById("pick-up-point");
  const courierButton = document.getElementById("courier");
  const deliveryPointAddresses = document.querySelector(
    ".popup-delivery__list-pick-up-point"
  );
  const deliveryCourierAddresses = document.querySelector(
    ".popup-delivery__list-courier"
  );
  handleDeliveryTabSwitch(
    pickUpPointButton,
    courierButton,
    deliveryPointAddresses,
    deliveryCourierAddresses
  );

  function handleDeliveryTabSwitch(
    pickUpPointButton,
    courierButton,
    deliveryPointAddresses,
    deliveryCourierAddresses
  ) {
    pickUpPointButton.addEventListener("click", () => {
      deliveryCourierAddresses.style.display = "none";
      deliveryPointAddresses.style.display = "flex";
      courierButton.classList.remove("active");
      pickUpPointButton.classList.add("active");
    });

    courierButton.addEventListener("click", () => {
      deliveryPointAddresses.style.display = "none";
      deliveryCourierAddresses.style.display = "flex";
      pickUpPointButton.classList.remove("active");
      courierButton.classList.add("active");
    });
  }

  // Функция для обновления выбранного адреса
  function updateSelectedAddress(selectedAddressElement) {
    if (!selectedAddressElement) return;

    const selectedAddress =
      selectedAddressElement.querySelector(".delivery-address").textContent;

    const address = userAddress.delivery.pickupPoint.find(
      (address) => address.address === selectedAddress
    );

    if (!address) return;

    const selectAddressText = document.querySelectorAll(".selected-address");
    const selectAddressRate = document.querySelector(".select-address-rate");
    const selectAddressWorkHours = document.querySelector(
      ".select-address-work-hours"
    );
    const rateIcon = document.querySelector(".rate-icon");

    selectAddressText.forEach((addressElement) => {
      addressElement.textContent = address.address;
    });

    if (address.rate === null && address.workHours) {
      selectAddressRate.textContent = "";
      selectAddressWorkHours.textContent = `${address.workHours}`;
      rateIcon.style.visibility = "hidden";
    } else if (address.rate && address.workHours) {
      rateIcon.style.visibility = "visible";
      selectAddressRate.textContent = `${address.rate}`;
      selectAddressWorkHours.textContent = `${address.workHours}`;
    }

    // Активируем кнопку выбрать
    const choiceAddressBtn = document.querySelector(".popup__delivery-btn");
    choiceAddressBtn.disabled = false;
    choiceAddressBtn.classList.remove("disableBtn");
  }

  // Добавляем обработчик события для радиокнопок курьера
  const courierRadioButtons = document.querySelectorAll(".radio-btn__courier");
  courierRadioButtons.forEach((courierRadioButton) => {
    courierRadioButton.addEventListener("change", () => {
      if (courierRadioButton.checked) {
        // Очищаем поля с рейтингом и часами работы
        const selectAddressRate = document.querySelector(
          ".select-address-rate"
        );
        const selectAddressWorkHours = document.querySelector(
          ".select-address-work-hours"
        );
        const rateIcon = document.querySelector(".rate-icon");

        selectAddressRate.textContent = "";
        selectAddressWorkHours.textContent = "";
        rateIcon.style.visibility = "hidden";

        const courierAddress = courierRadioButton
          .closest(".popup-delivery__list-container")
          .querySelector(".delivery-address").textContent;

        const selectAddressText =
          document.querySelectorAll(".selected-address");
        selectAddressText.forEach((addressElement) => {
          addressElement.textContent = courierAddress;
        });

        const choiceAddressBtn = document.querySelector(".popup__delivery-btn");
        choiceAddressBtn.disabled = false;
        choiceAddressBtn.classList.remove("disableBtn");
      }
    });
  });

  // реализация снятия отметки выбора адреса пункта выдачи при выборе адреса доставки курьером и наоборот
  // изменение текста в app_order_result и app_delivery
  const pickupRadioButtons = document.querySelectorAll(
    ".radio-btn__pickup-point"
  );
  const selectDeliveryText = document.querySelector(".select-delivery");

  courierRadioButtons.forEach((courierRadioButton) => {
    courierRadioButton.addEventListener("change", () => {
      if (courierRadioButton.checked) {
        const selectedAddressElement = courierRadioButton.closest(
          ".popup-delivery__list-container"
        );
        updateSelectedAddress(selectedAddressElement);
        selectDeliveryText.innerText = "Доставка курьером";
      }
    });
  });

  pickupRadioButtons.forEach((pickupRadioButton) => {
    pickupRadioButton.addEventListener("change", () => {
      if (pickupRadioButton.checked) {
        courierRadioButtons.forEach((courierRadioButton) => {
          courierRadioButton.checked = false;
        });
        const selectedAddressElement = pickupRadioButton.closest(
          ".popup-delivery__list-container"
        );
        updateSelectedAddress(selectedAddressElement);
        selectDeliveryText.innerText = "Доставка в пункт выдачи";
      }
    });
  });

  //закрытие попапа на кнопку "Выбрать"
  choiceAddressBtn.addEventListener("click", () => {
    const popupContainer = choiceAddressBtn.closest("[data-popup]");
    popupContainer.style.display = "none";
  });
}

//функция удаления адреса
export function deleteAddress(address) {
  const addressIndexPickupPoint = userAddress.delivery.pickupPoint.findIndex(
    (item) => item.address === address
  );
  const addressIndexPickup = userAddress.delivery.pickup.findIndex(
    (item) => item.address === address
  );

  if (addressIndexPickupPoint !== -1) {
    userAddress.delivery.pickupPoint.splice(addressIndexPickupPoint, 1);
    const addressElement = document.querySelector(
      `[data-address="${address}"]`
    );

    if (addressElement) {
      addressElement.remove();
    }
  } else if (addressIndexPickup !== -1) {
    userAddress.delivery.pickup.splice(addressIndexPickup, 1);
    const addressElement = document.querySelector(
      `[data-address="${address}"]`
    );

    if (addressElement) {
      addressElement.remove();
    }
  } else {
    console.error("Address not found");
  }
}
