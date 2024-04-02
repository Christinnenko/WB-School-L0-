// Функция для создания и отображения всплывающей подсказки
export function showTooltip(element, tooltipContent) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  document.body.appendChild(tooltip);

  tooltip.innerHTML = tooltipContent;

  // Позиционирование подсказки относительно элемента
  const elementRect = element.getBoundingClientRect();
  tooltip.style.top = `${elementRect.top + window.scrollY + 30}px`;
  tooltip.style.left = `${elementRect.left + window.scrollX - 135}px`;

  tooltip.style.display = "block";

  // Скрытие подсказки
  element.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
}
