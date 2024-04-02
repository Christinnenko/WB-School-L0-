//выбор товара/всех товаров

import {
  calculateTotalDiscountOrder,
  calculateTotalQuantity,
  calculateTotalQuantityOrder,
  calculateTotalSumCart,
  calculateTotalSumOrder,
  calculateTotalSumWithoutDiscount,
} from "./utils/calculate.js";
import { wordEndingChanger } from "./utils/сhange_word_ending.js";

// Функция для скрытия/показа товаров
export function hideProducts(buttonId, containerId) {
  let isShowProducts = false;
  const hideButton = document.getElementById(buttonId);
  const productContainer = document.getElementById(containerId);
  const borderElements = document.querySelectorAll(".cart__header");

  if (!hideButton || !productContainer) {
    return;
  }

  hideButton.addEventListener("click", () => {
    isShowProducts = !isShowProducts;

    productContainer.style.display = isShowProducts ? "none" : "block";
    borderElements.forEach((borderElement) => {
      borderElement.style.borderBottom = isShowProducts
        ? "none"
        : "1px solid rgba(0, 0, 0, 0.1)";
    });

    hideButton.src = isShowProducts
      ? "image/icon__arrow_return_over.svg"
      : "image/icon__arrow.svg";

    //замена текста при скрытии списка товаров в корзине
    if (buttonId === "hideProduct") {
      const showProductsInfo = document.querySelector(".cart__header-select");
      let totalSumCart = calculateTotalSumCart();
      let totalQuantity = calculateTotalQuantity();
      const productForms = ["товар", "товара", "товаров"];

      const productEnding = wordEndingChanger.changeEnding(
        totalQuantity,
        productForms
      );

      showProductsInfo.innerHTML = isShowProducts
        ? `<h3>${productEnding} · ${totalSumCart} сом</h3>`
        : `<input class="checkbox" type="checkbox" id="selectAll" />
          <label class="custom-checkbox" for="selectAll">Выбрать все</label>`;
      activeChoiceAll();
    }
  });
}

// Функция для установки активного состояния чекбоксов при выборе "Выбрать все"
export function activeChoiceAll() {
  const selectAllCheckbox = document.getElementById("selectAll");
  const productCheckboxes = document.querySelectorAll(".checkbox");

  // Обработчик изменения состояния чекбокса "Выбрать все"
  selectAllCheckbox?.addEventListener("change", () => {
    productCheckboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
    const checkboxPayNow = document.getElementById("select-pay-now");
    calculateTotalSumOrder(checkboxPayNow);
    calculateTotalSumWithoutDiscount();
    calculateTotalDiscountOrder();
    calculateTotalQuantityOrder();
  });

  // Обработчик изменения состояния каждого чекбокса продукта
  productCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (!checkbox.checked) {
        selectAllCheckbox.checked = false;
      }
      const checkboxPayNow = document.getElementById("select-pay-now");
      calculateTotalSumOrder(checkboxPayNow);
      calculateTotalSumWithoutDiscount();
      calculateTotalDiscountOrder();
    });
  });
}

//функция выбора товара
export function activeChoiceProduct() {
  const selectCheckboxProducts = document.querySelectorAll(
    ".cart-product__checkbox"
  );

  selectCheckboxProducts.forEach((selectCheckboxProduct) => {
    selectCheckboxProduct.addEventListener("change", () => {
      const checkboxPayNow = document.getElementById("select-pay-now");
      calculateTotalSumOrder(checkboxPayNow);
      calculateTotalQuantityOrder();
      calculateTotalSumWithoutDiscount();
      calculateTotalDiscountOrder();
    });
  });
}
