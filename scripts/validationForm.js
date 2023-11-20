//валидация формы для заполнения пользователем

export function validateForm() {
  // Поля формы
  const fields = ["firstName", "lastName", "email", "phone", "inn"];

  // Шаблоны валидации для каждого поля
  const validationPatterns = {
    firstName: /^[а-яА-Я]+$/, // только русские буквы
    lastName: /^[а-яА-Я]+$/, // только русские буквы
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    phone: /^\+\d{1,3} \d{3} \d{3} \d{2} \d{2}$/,
    inn: /^\d{14}$/, // 14 цифр
  };

  // Сообщения об ошибках
  const errorMessages = {
    firstName: "Укажите имя (только русские буквы)",
    lastName: "Введите фамилию (только русские буквы)",
    email: "Проверьте адрес электронной почты",
    phone: "Формат: +9 999 999 99 99",
    inn: "Проверьте ИНН",
  };

  // Сообщения для пустых полей
  const emptyFieldMessages = {
    firstName: "Укажите имя",
    lastName: "Введите фамилию",
    email: "Укажите электронную почту",
    phone: "Укажите номер телефона",
    inn: "Укажите ИНН",
  };

  // Флаги для отслеживания действий пользователя
  let wasFieldClicked = false;
  let wasSubmitClicked = false;

  // Обработчики событий для каждого поля
  fields.forEach((field) => {
    const inputField = document.getElementById(field);
    const label = document.getElementById(`${field}Label`);
    let isFieldBlurred = false;

    inputField.addEventListener("click", function () {
      // Отмечаем, что поле было кликнуто
      wasFieldClicked = true;
    });

    inputField.addEventListener("blur", function () {
      isFieldBlurred = true;

      if (
        (wasFieldClicked || wasSubmitClicked) &&
        this.value.trim() !== "" &&
        !validationPatterns[field].test(this.value)
      ) {
        // Если поле было кликнуто или была нажата кнопка "Оформить заказ" и данные не соответствуют шаблону валидации, считаем его ошибочным
        this.classList.add("error");
        label.classList.add("error");
        label.textContent = errorMessages[field];

        // Прокручиваем страницу к ошибочному полю
        this.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    inputField.addEventListener("input", function () {
      if (
        isFieldBlurred &&
        this.value.trim() !== "" &&
        !validationPatterns[field].test(this.value)
      ) {
        // Пользователь начал вводить в поле не валидные данные после того, как покинул его
        this.classList.add("error");
        label.classList.add("error");
        label.textContent = errorMessages[field];
      } else if (
        this.value.trim() !== "" &&
        validationPatterns[field].test(this.value)
      ) {
        // Пользователь начал вводить в поле валидные данные, убираем ошибку
        this.classList.remove("error");
        label.classList.remove("error");
        label.textContent = "";
      }
    });

    inputField.addEventListener("focus", function () {
      // Пользователь начал вводить в поле, убираем выделение ошибки и скрываем лейбл
      this.classList.remove("error");
      label.classList.remove("error");
      label.textContent = "";
    });
  });

  // Обработчик события для кнопки "Оформить заказ"
  const submitBtn = document.getElementById("orderButton");
  submitBtn.addEventListener("click", function (event) {
    wasSubmitClicked = true;

    let hasError = false;

    fields.forEach((field) => {
      const inputField = document.getElementById(field);
      const label = document.getElementById(`${field}Label`);

      if (
        inputField.value.trim() === "" &&
        (wasFieldClicked || wasSubmitClicked)
      ) {
        // Если поле пустое и было кликнуто или нажата кнопка "Оформить заказ", выделяем его как ошибочное
        inputField.classList.add("error");
        label.classList.add("error");
        label.textContent = emptyFieldMessages[field];
        hasError = true;

        // Прокручиваем страницу к ошибочному полю
        inputField.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (
        inputField.value.trim() !== "" &&
        !validationPatterns[field].test(inputField.value)
      ) {
        // Если данные в поле не соответствуют шаблону валидации, выделяем его как ошибочное
        inputField.classList.add("error");
        label.classList.add("error");
        label.textContent = errorMessages[field];
        hasError = true;

        // Прокручиваем страницу к ошибочному полю
        inputField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    // Если есть ошибки, останавливаем отправку формы
    if (hasError) {
      event.preventDefault();
    }
  });
}
