// 8.	Сумма в диапазоне

// 			Напишите 2 функции.
// 			Первая функция генерирует массив на N рандомных чисел в диапазоне от A до B и возвращает его 
// 			Т.е. принимает 3 параметра и А не может быть больше чем B
// 			Например: doSmth(8, 1, 10) -> [3, 2, 5, 4, 7, 1, 3, 10]

// 			Вторая функция принимает массив рандомных чисел, индекс С которого начинать подсчет и индекс ПО который считать
// 			Должна быть валидация индексов
// 				- Чтобы не было отрицательных чисел
// 				- Чтобы индекс не выходил за рамки допустимых индексов
// 				- Чтобы первый индекс был меньше или равен второму

// 			Пример вывода в консоль:
// 			Массив: [.....] сгенерированный от A до B
// 			Сумма чисел в диапазоне от индекса C по индекс D равна: 10

var newArr = getRandomArr(5, -3, 10);
console.log(`Массив: [${newArr}] сгенерированный от -3 до 10`);

function getRandomArr(n, a, b) {
    if (a < b) {
        const rand = () => Math.floor(Math.random() * (b - a) + a);
        const val = [];

        while (n-- > 0) {
            val.push(rand());
        }

        return val;
    } else {
        b = b + a;
        const rand = () => Math.floor(Math.random() * (b - a) + a);
        const val = [];

        while (n-- > 0) {
            val.push(rand());
        }

        return val;
    }
}

function calcSum(k, m, arr) {
    if (k >= 0 && m >= 0 && k < arr.length && m < arr.length && k <= m) {
        var mySum = arr.slice(k, m);
        var sum = 0;

        for (var i = 0; i < mySum.length; i++) {
            sum += mySum[i]
        }
    } else {
        console.log('Please, enter correct index');
    }

    return sum;
}

console.log(`Сумма чисел в диапазоне от индекса 2 по индекс 4 равна: ${calcSum(2, 4, newArr)}`);