function isNumberPrime(number) {
  if (number > 1000 ) {
    return("Данные неверны. Введите число не более 1000");
  } else if (number <= 1 || !Number.isInteger(number)) {
    return("Число должно быть целым и больше 1");
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return `${number} - составное число`;
      } else {
        return `${number} - простое число`;
      }
    }
  } 
};

console.log(isNumberPrime(1));
console.log(isNumberPrime(7.5));
console.log(isNumberPrime(10));
console.log(isNumberPrime(19));
console.log(isNumberPrime(1001));




