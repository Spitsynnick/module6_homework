function outer(a) {
  return function inner(b) {
    return a + b;
  }
};

const result = outer(1);
console.log(result(2));