// функция принимает два числа, и каждую секунду выводит в консоль, начиная от первого и заканчивая вторым
function printNumbers(num1, num2) { 
    let currentNumber = num1;

    let intervalId = setInterval(function() {
        console.log(currentNumber);
        currentNumber++;
        if (currentNumber > num2) {
            clearInterval(intervalId);
        };
    }, 1000);
};


printNumbers(5, 15);
