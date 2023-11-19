import { renderAppPopupPay } from "./appPopupPay.js";

export function openPopupPay() {
  const popupLinks = document.querySelectorAll(".popup-link");

  popupLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      renderAppPopupPay();
      let showPopupPay = document.querySelector(".popup-pay__container");
      showPopupPay.style.display = "block";
    });
  });
}

export function closePopupPay() {
  const closePopups = document.querySelectorAll(".popup-pay__close");

  closePopups.forEach(function (closePopup) {
    closePopup.addEventListener("click", function (event) {
      event.preventDefault();
      let showPopupPay = document.querySelector(".popup-pay__container");
      showPopupPay.style.display = "none";
    });
  });
}
