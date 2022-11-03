function outer(a) { // функция принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел
  return function inner(b) {
    return a + b;
  }
};

const result = outer(1);
console.log(result(2));