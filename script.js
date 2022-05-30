// 1 Напишите функцию, которая может преобразовывать строку в число - 10 баллов
const strToNumber = (str) => {
  str = Number(str);
  return str;
};

console.log(strToNumber("10"));

// 2.Напишите функцию, которая проверяет число четное или не четное: если четное возвращает true иначе false - 10 баллов

const isEvenNum = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEvenNum(10));
console.log(isEvenNum(3));

// 3.Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать **`true`** или **`false` -** 10 баллов

const hasElement = (elem, array) => {
  let result = array.includes(elem);
  return result;
};
let arr = ["Elaman", "Tansu", "Asan"];
console.log(hasElement("Tansu", arr));
console.log(hasElement("Shirin", arr));
