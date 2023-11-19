// Общая функция для скрытия/показа продукта
export function hideProduct(buttonId, productId, containerId) {
  let isShowProduct = false;
  const hideButton = document.getElementById(buttonId);
  const product = document.getElementById(productId);
  const productContainer = document.getElementById(containerId);

  hideButton.onclick = () => {
    isShowProduct = !isShowProduct;
    product.style.display = isShowProduct ? "none" : "block";
    productContainer.style.borderBottom = isShowProduct
      ? "none"
      : "1px solid var(--rulers-rulers, rgba(0, 0, 0, 0.1))";

    hideButton.src = isShowProduct
      ? "image/icon__arrow_return_over.svg"
      : "image/icon__arrow.svg";
  };
}
