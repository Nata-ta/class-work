// 10. Сумма введённых чисел

// 		Создайте массив
// 		Через цикл запрашивайте у пользователя цифры
// 		Заканчивайте запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// 		Подсчитайте и верните сумму элементов массива.
// 		P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// 		-------------------------------------------------------------------

var myArray = [];

while (true) {
    var userInput = prompt('Please, enter your number');

    if (isNaN(userInput) || userInput == "" || userInput == null) {
        break;
    }

    myArray.push(userInput);
}

var summ = 0;

for (var i = 0; i < myArray.length; i++) {
    summ += Number(myArray[i]);
}

console.log(summ);