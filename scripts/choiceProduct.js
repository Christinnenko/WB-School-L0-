// Функция для скрытия/показа продуктов

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
        : "1px solid var(--rulers-rulers, rgba(0, 0, 0, 0.1))";
    });

    hideButton.src = isShowProducts
      ? "image/icon__arrow_return_over.svg"
      : "image/icon__arrow.svg";
  });
}

// Функция для установки активного состояния чекбоксов при выборе "Выбрать все"
export function activeChoiceAll() {
  const selectAllCheckbox = document.getElementById("selectAll");

  selectAllCheckbox.addEventListener("change", () => {
    const productCheckboxes = document.querySelectorAll(".checkbox");

    productCheckboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });
}
