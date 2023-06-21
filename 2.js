// функция принимает любое число в диапазоне [1, 1000] и определяет, является ли оно простым или составным
function isNumberPrime(number) { 
  if (number > 1000 ) {
    return("Данные неверны. Введите число не более 1000");

  } else if (number <= 1 || !Number.isInteger(number)) {
    return("Число должно быть целым и больше 1");
    
  } else {
    for (let i = 2; i < number; i++) { 
      if (number % i === 0) {
        return `${number} - составное число`; // составное число делится без остатка на другие числа, кроме 1 и самого себя
      } else {
        return `${number} - простое число`; // простое число делится без остатка только на 1 и самого себя
      }
    }
  } 
};

console.log(isNumberPrime(1)); // "Число должно быть целым и больше 1"
console.log(isNumberPrime(7.5)); // "Число должно быть целым и больше 1"
console.log(isNumberPrime(10)); // "10 - составное число"
console.log(isNumberPrime(19)); // "19 - простое число"
console.log(isNumberPrime(1001)); // "Данные неверны. Введите число не более 1000"




