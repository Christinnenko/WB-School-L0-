//расчеты сумм и количества товаров
import {
  activateOrderButton,
  deactivateOrderButton,
} from "../app_order_result.js";
import { userProducts } from "../app_product.js";
import { wordEndingChanger } from "./сhange_word_ending.js";

//Расчет и обновление итоговой суммы заказа(выбранные товары со скидкой)
export function calculateTotalSumOrder(checkboxPayNow) {
  const selectCheckboxProducts = document.querySelectorAll(
    ".cart-product__checkbox"
  );
  const totalSumElement = document.querySelector(".cart-result__total-sum");
  const orderButton = document.getElementById("orderButton");
  const textPayNow = document.querySelector(".text-pay-now");
  let totalSum = 0;

  selectCheckboxProducts.forEach((checkbox) => {
    if (checkbox.checked) {
      const container = checkbox.closest(".cart-product-container");
      if (container) {
        const quantityProduct = container.querySelector(
          ".cart-product__quantity-count"
        );
        const finalProductPrice = container.querySelector(
          ".cart-product__added-total-sum"
        );
        if (finalProductPrice && finalProductPrice.dataset.finalPrice) {
          totalSum +=
            finalProductPrice.dataset.finalPrice * quantityProduct.value;
        }
      }
    }
  });

  if (totalSum > 0) {
    activateOrderButton();
  }

  if (totalSum === 0) {
    deactivateOrderButton();
  }

  totalSumElement.innerHTML = `${totalSum} <span>сом</span>`;

  if (checkboxPayNow && checkboxPayNow.checked) {
    orderButton.textContent = `Оплатить ${totalSum} сом`;
    textPayNow.style.display = "none";
  } else {
    orderButton.textContent = "Заказать";
    textPayNow.style.display = "block";
  }

  return totalSum;
}

//Расчет и обновление итоговой суммы заказа(выбранные товары без скидки)
export function calculateTotalSumWithoutDiscount() {
  const selectCheckboxProducts = document.querySelectorAll(
    ".cart-product__checkbox"
  );
  const totalSumWithoutDiscountContainer = document.querySelector(
    ".cart-order__total-sum-without-discount"
  );

  let totalSumWithoutDiscount = 0;

  selectCheckboxProducts.forEach((checkbox) => {
    if (checkbox.checked) {
      const container = checkbox.closest(".cart-product-container");
      if (container) {
        const quantityProduct = container.querySelector(
          ".cart-product__quantity-count"
        );
        const oldProductPrice = container.querySelector(
          ".cart-product__old-price"
        );
        if (oldProductPrice && oldProductPrice.dataset.oldPrice) {
          totalSumWithoutDiscount +=
            oldProductPrice.dataset.oldPrice * quantityProduct.value;
        }
      }
    }
  });

  totalSumWithoutDiscountContainer.innerHTML = `${totalSumWithoutDiscount} <span>сом</span>`;

  return totalSumWithoutDiscount;
}

//итоговая сумма товаров в корзине
export function calculateTotalSumCart() {
  const quantityProducts = document.querySelectorAll(
    ".cart-product__quantity-count"
  );
  const finalProductPrices = document.querySelectorAll(
    ".cart-product__added-total-sum"
  );

  let totalSumCart = 0;

  // Перебираем все товары в корзине
  for (let i = 0; i < finalProductPrices.length; i++) {
    const finalProductPrice = finalProductPrices[i];
    const quantityProduct = quantityProducts[i];

    // Проверяем, что finalProductPrice содержит dataset.finalPrice и quantityProduct содержит значение
    if (
      finalProductPrice &&
      finalProductPrice.dataset.finalPrice &&
      quantityProduct &&
      quantityProduct.value
    ) {
      totalSumCart +=
        finalProductPrice.dataset.finalPrice * quantityProduct.value;
    }
  }

  return totalSumCart;
}

//функция установки цены в зависимости от количества выбранных товаров
export function addQuantityEventListeners() {
  const quantityInputs = document.querySelectorAll(
    ".cart-product__quantity-count"
  );

  quantityInputs.forEach((quantityInput) => {
    const productElement = quantityInput.closest(".cart-product");
    const finalPriceElements = productElement.querySelectorAll(
      ".cart-product__final-price"
    );
    const oldPriceElements = productElement.querySelectorAll(
      ".cart-product__old-price"
    );

    const minusButton = productElement.querySelector(".minus-btn");
    const plusButton = productElement.querySelector(".plus-btn");

    // Обработчик клика на кнопку "-"
    if (minusButton && quantityInput) {
      minusButton.addEventListener("click", () => {
        plusButton.classList.remove("plus-btn-disabled");
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
          updatePrices();
          const checkboxPayNow = document.getElementById("select-pay-now");
          calculateTotalSumOrder(checkboxPayNow);
          calculateTotalQuantityOrder();
          calculateTotalSumWithoutDiscount();
          calculateTotalDiscountOrder();
        }
      });
    }

    // Обработчик клика на кнопку "+"
    if (plusButton && quantityInput) {
      plusButton.addEventListener("click", () => {
        const currentValue = parseInt(quantityInput.value);
        const maxQuantity = parseInt(quantityInput.max);
        if (currentValue < maxQuantity) {
          // Проверяем, что текущее значение меньше максимального
          quantityInput.value = currentValue + 1;
          updatePrices();
          const checkboxPayNow = document.getElementById("select-pay-now");
          calculateTotalSumOrder(checkboxPayNow);
          calculateTotalQuantityOrder();
          calculateTotalSumWithoutDiscount();
          calculateTotalDiscountOrder();

          // Удаляем класс, если он был добавлен ранее
          plusButton.classList.remove("plus-btn-disabled");

          // Проверяем, нужно ли добавить класс заново
          if (parseInt(quantityInput.value) === maxQuantity) {
            plusButton.classList.add("plus-btn-disabled");
          }
        }
      });
    }

    quantityInput.addEventListener("input", () => {
      updatePrices();
      const checkboxPayNow = document.getElementById("select-pay-now");
      calculateTotalSumOrder(checkboxPayNow);
    });

    function updatePrices() {
      finalPriceElements.forEach((finalPriceElement) => {
        const currentFinalPrice = parseFloat(
          finalPriceElement.getAttribute("data-final-price")
        );
        const userEnteredQuantity = quantityInput.value;
        const newFinalPrice = currentFinalPrice * userEnteredQuantity;
        finalPriceElement.innerHTML = `${newFinalPrice} сом`;

        if (newFinalPrice > 999) {
          finalPriceElement.style.fontSize = "16px";
        } else {
          finalPriceElement.style.fontSize = "";
        }
      });

      oldPriceElements.forEach((oldPriceElement) => {
        const currentOldPrice = parseFloat(
          oldPriceElement.getAttribute("data-old-price")
        );
        const userEnteredQuantity = quantityInput.value;
        const newOldPrice = currentOldPrice * userEnteredQuantity;
        oldPriceElement.innerHTML = `${newOldPrice} сом`;
      });
    }
  });
}

//Расчет количества товаров в корзине
export function calculateTotalQuantity() {
  let totalQuantity = 0;

  userProducts.forEach((product) => {
    const productElement = document.getElementById(`product${product.id}`);
    if (productElement) {
      const quantityInput = productElement.querySelector(
        ".cart-product__quantity-count"
      );
      if (quantityInput) {
        totalQuantity += product.quantity * parseInt(quantityInput.value);
      }
    }
  });

  return totalQuantity;
}

//Расчет и обновление количества выбранных товаров в заказе
export function calculateTotalQuantityOrder() {
  const selectCheckboxProducts = document.querySelectorAll(
    ".cart-product__checkbox"
  );
  const totalQuantityProductOrder = document.querySelector(
    ".cart-order__quantity"
  );

  let totalQuantityOrder = 0;

  selectCheckboxProducts.forEach((checkbox) => {
    if (checkbox.checked) {
      const container = checkbox.closest(".cart-product-container");
      if (container) {
        const quantityProduct = container.querySelector(
          ".cart-product__quantity-count"
        );
        const productId = parseInt(checkbox.id.replace("select", ""));
        const product = userProducts.find(
          (product) => product.id === productId
        );
        if (product && quantityProduct && quantityProduct.value) {
          totalQuantityOrder +=
            parseInt(product.quantity) * parseInt(quantityProduct.value); // Ensure quantityProduct.value is parsed as an integer
        }
      }
    }
  });

  const productForms = ["товар", "товара", "товаров"];

  const productEnding = wordEndingChanger.changeEnding(
    totalQuantityOrder,
    productForms
  );

  totalQuantityProductOrder.innerHTML = `${productEnding}`;
  return totalQuantityOrder;
}

//Расчет и обновление суммы скидки выбранного товара в заказе
export function calculateTotalDiscountOrder() {
  const totalSumElement = parseFloat(
    document.querySelector(".cart-result__total-sum").textContent
  );
  const totalSumWithoutDiscount = parseFloat(
    document.querySelector(".cart-order__total-sum-without-discount")
      .textContent
  );
  const totalDiscountOrder = document.querySelector(
    ".cart-order__total-discount"
  );

  const totalDiscount = totalSumWithoutDiscount - totalSumElement;
  totalDiscountOrder.innerHTML = `${totalDiscount} <span>сом</span>`;

  return totalDiscount;
}
