// 5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от -10 до 10
// 			Выведите массив в консоль
// 			Посчитайте сумму позитивных чисел из массива и выведите ее в консоль

// 		########

function getRandomArr(count, min, max) {
    const rand = () => Math.floor(Math.random() * (max - min) + min);
    const val = [];

    while (count-- > 0) {
        val.push(rand());
    }

    return val;
}

var newArray = getRandomArr(10, -10, 10);
console.log(newArray);

var result = 0

for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] > 0) {
        result += newArray[i];
    }
}

console.log(result);