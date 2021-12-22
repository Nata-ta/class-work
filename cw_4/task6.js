// 6.	Напишите функцию, которая сгенерирует массив рандомных чисел (кол-во элементов в массиве вводит пользователь) от -10 до 10
// 			Определите наименьшее и наибольшее число в массиве.
// 			Массив, минимальное и максимальное число - вывести в консоль.

// 		########

var yourNum = +prompt('Please, enter your number');

function getRandomArr(count, min, max) {
    const rand = () => Math.floor(Math.random() * (max - min) + min);
    const val = [];

    while (count-- > 0) {
        val.push(rand());
    }

    return val;
}

var newArray = getRandomArr(yourNum, -10, 10);
console.log(newArray);

var biggest = 0;
var smallest = 0;

for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] > biggest) {
        biggest = newArray[i];
    } else if (newArray[i] < smallest) {
        smallest = newArray[i];
    }
}

console.log(biggest);
console.log(smallest);