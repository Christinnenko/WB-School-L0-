//функции открытия и закрытия попапов

import { renderAppPopupDelivery } from "./app_popup_delivery.js";
import { renderAppPopupPay } from "./app_popup_pay.js";

export function openPopup() {
  const popupLinks = document.querySelectorAll(".popup-link");

  popupLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const popupType = link.getAttribute("data-popup");
      renderPopup(popupType);
    });
  });
}

function renderPopup(popupType) {
  if (popupType === "popup-pay") {
    renderAppPopupPay();
    let showPopupPay = document.querySelector(".popup-pay__container");
    showPopupPay.style.display = "block";
  } else if (popupType === "popup-delivery") {
    renderAppPopupDelivery();
    let showPopupDelivery = document.querySelector(
      ".popup-delivery__container"
    );
    showPopupDelivery.style.display = "block";
  }
}

export function closePopup() {
  const closePopups = document.querySelectorAll(".popup__close-icon");

  closePopups.forEach(function (closePopup) {
    closePopup.addEventListener("click", function (event) {
      event.preventDefault();

      const popupContainer = closePopup.closest("[data-popup]");
      popupContainer.style.display = "none";
    });
  });
}
