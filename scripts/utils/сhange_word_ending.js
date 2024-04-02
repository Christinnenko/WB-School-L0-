// Модуль для изменения окончания слов
export const wordEndingChanger = (function () {
  function getEnding(number, endings) {
    number = Math.abs(number);

    number %= 100;
    if (number >= 11 && number <= 19) {
      return endings[2];
    }

    // Определяем последнюю цифру числа
    const lastDigit = number % 10;

    switch (lastDigit) {
      case 1:
        return endings[0];
      case 2:
      case 3:
      case 4:
        return endings[1];
      default:
        return endings[2];
    }
  }

  function changeEnding(number, wordForms) {
    const ending = getEnding(number, wordForms);
    return `${number} ${ending}`;
  }

  return {
    changeEnding: changeEnding,
  };
})();
