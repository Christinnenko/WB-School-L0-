import { closePopup } from "./openPopup.js";

export function renderAppPopupDelivery() {
  let appPopupDelivery = document.getElementById("appPopupDelivery");

  let htmlPopupDelivery = `
  <div class="popup-delivery">
  <div class="popup-delivery__content">
    <div class="popup-delivery__header">
      <h2 class="popup-delivery__title">Способ доставки</h2>
      <a class="popup__close" href="#"
        ><img
          src="image/icon__close.svg"
          alt="Закрыть окно способ доставки"
      /></a>
    </div>
    <div class="popup-delivery__choice">
      <button class="popup-delivery__choice-not-active" id="pick-up-point">В пункт выдачи</button>
      <button class="popup-delivery__choice-active" id="courier">Курьером</button>
    </div>
    <h3 class="popup-delivery__list-title">Мои адреса</h3>
    <form class="popup-delivery__list-pick-up-point">
      <label>
        <input type="radio" name="question-payment-method" value="mir" />
        <div class="popup-delivery__list-adress">
          <p>г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1</p>
          <div class="popup-delivery__list-rating">
            <img src="image/icon__star.svg" alt="Рейтинг пункта выдачи" />
            <p>Пункт выдачи</p>
          </div>
        </div>
        <img src="image/icon__cart.svg" alt="Удалить" />
      </label>
      <label>
        <input type="radio" name="question-payment-method" value="mir" />
        <div class="popup-delivery__list-adress">
          <p>г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1</p>
          <div class="popup-delivery__list-rating">
            <img src="image/icon__star.svg" alt="Рейтинг пункта выдачи" />
            <p>4.99</p>
            <p>Пункт выдачи</p>
          </div>
        </div>
        <img src="image/icon__cart.svg" alt="Удалить" />
      </label>
      <label>
        <input type="radio" name="question-payment-method" value="mir" />
        <div class="popup-delivery__list-adress">
          <p>г. Бишкек, улица Табышалиева, д. 57</p>
          <div class="popup-delivery__list-rating">
            <img src="image/icon__star.svg" alt="Рейтинг пункта выдачи" />
            <p>4.99</p>
            <p>Пункт выдачи</p>
          </div>
        </div>
        <img src="image/icon__cart.svg" alt="Удалить" />
      </label>
    </form>
    <form class="popup-delivery__list-courier">
      <label>
        <input type="radio" name="question-payment-method" value="mir" />
        <div class="popup-delivery__list-adress">
          <p>Бишкек, улица Табышалиева, 57</p>
        </div>
        <img src="image/icon__cart.svg" alt="Удалить" />
      </label>
      <label>
        <input type="radio" name="question-payment-method" value="mir" />
        <div class="popup-delivery__list-adress">
          <p>Бишкек, улица Жукеева-Пудовкина, 77/1</p>
        </div>
        <img src="image/icon__cart.svg" alt="Удалить" />
      </label>
      <label>
        <input type="radio" name="question-payment-method" value="mir" />
        <div class="popup-delivery__list-adress">
          <p>Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1</p>
        </div>
        <img src="image/icon__cart.svg" alt="Удалить" />
      </label>
    </form>
  </div>
  <button class="popup__button">Выбрать</button>
</div>
  `;

  appPopupDelivery.innerHTML = htmlPopupDelivery;

  closePopup();

  const pickUpPointButton = document.getElementById("pick-up-point");
  const courierButton = document.getElementById("courier");
  const deliveryPointAddresses = document.querySelector(
    ".popup-delivery__list-pick-up-point"
  );
  const deliveryCourierAddresses = document.querySelector(
    ".popup-delivery__list-courier"
  );

  pickUpPointButton.addEventListener("click", () => {
    deliveryCourierAddresses.style.display = "none";
    deliveryPointAddresses.style.display = "flex";
    courierButton.style.border = "2px solid rgba(203, 17, 171, 0.15)";
    pickUpPointButton.style.border =
      "2px solid var(--light-system-magenta, #cb11ab)";
  });

  courierButton.addEventListener("click", () => {
    deliveryPointAddresses.style.display = "none";
    deliveryCourierAddresses.style.display = "flex";
    pickUpPointButton.style.border = "2px solid rgba(203, 17, 171, 0.15)";
    courierButton.style.border =
      "2px solid var(--light-system-magenta, #cb11ab)";
  });
}
