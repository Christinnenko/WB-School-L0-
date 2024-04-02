//удаление товара и добавление в избранное

//функция удаления товара
import { userProducts } from "./app_product.js";
import {
  calculateTotalDiscountOrder,
  calculateTotalQuantity,
  calculateTotalQuantityOrder,
  calculateTotalSumOrder,
  calculateTotalSumWithoutDiscount,
} from "./utils/calculate.js";

export function deleteProduct(productId) {
  const productIndex = userProducts.findIndex(
    (product) => product.id === parseInt(productId)
  );

  // Проверяем, найден ли товар с заданным ID в корзине
  if (productIndex !== -1) {
    // Удаляем товар из массива товаров в корзине у пользователя
    userProducts.splice(productIndex, 1);

    // Удаляем соответствующий элемент из DOM
    const productElement = document.getElementById(`product${productId}`);
    if (productElement) {
      productElement.remove();
    }

    // Обновляем количество товаров в счетчике на значке корзины
    const countElements = document.querySelectorAll(".cart-count");
    let totalQuantity = calculateTotalQuantity();

    if (totalQuantity === 0) {
      countElements.forEach((element) => {
        element.style.display = "none";
      });
    } else {
      countElements.forEach((element) => {
        element.textContent = totalQuantity;
        element.style.display = "inline-block";
      });
    }
    const checkboxPayNow = document.getElementById("select-pay-now");
    calculateTotalSumOrder(checkboxPayNow);
    calculateTotalQuantityOrder();
    calculateTotalSumWithoutDiscount();
    calculateTotalDiscountOrder();
  } else {
    console.error("Product not found");
  }
}

//функция добавления товара в избранное
export function addFavProduct(productId) {
  const productIndex = userProducts.findIndex(
    (product) => product.id === parseInt(productId)
  );

  // Проверяем, найден ли товар с заданным ID в массиве
  if (productIndex !== -1) {
    // Получаем ссылку на объект товара по его индексу
    const product = userProducts[productIndex];

    product.isFavorites = !product.isFavorites;

    // Получаем кнопку по data-id
    const button = document.querySelector(
      `.actions__btn-heart[data-id="${productId}"]`
    );

    // Проверяем, добавлен ли товар в избранное, и меняем цвет кнопки
    if (product.isFavorites) {
      button.style.color = "var(--color-system-magenta)";
    } else {
      button.style.color = "initial";
    }

    console.log(userProducts[productIndex]);
  } else {
    console.error("Product not found");
  }
}
