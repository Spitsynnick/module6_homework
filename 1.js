//  функция выводит в консоль количество чётных и нечётных элементов в массиве; нулевой элемент выводится отдельно
function getArrayItems() { 
  let array1 = [1, 2, 3, 4, 5, 6, "string", undefined]; 
  let odd = 0; 
  let even = 0; 

  for (let i = 1; i < array1.length; i++) { 
    if (i % 2 != 0) {
      odd++;    
    } else {
      even++;
    }
  };
  
  console.log("Количество нечетных элементов: " + odd + ". Количество четных элементов: " 
            + even + ". Нулевой элемент массива: " + array1[0] + ".");
}

getArrayItems();
