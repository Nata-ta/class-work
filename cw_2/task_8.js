// 8. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
//             «Включительно» означает, что значение переменной age может быть равно 14 или 90.
//             Значение вводит пользователь

var numFromUser = +prompt('please, enter the number');

if (numFromUser >= 14 && numFromUser <= 90) {
    alert('all is good, number is between 14 and 90');
}