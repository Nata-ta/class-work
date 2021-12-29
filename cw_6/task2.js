// 2. Каждое число в квадрат

// 			Напишите функцию, которая принимает число и возводит каждую цифру этого числа в квадрат.

// 			Пример:
// 			squareDigits(9119) //811181 так как 9^2 равно 81 и 1^2 равно 1.

// 		###########

var squareDigits = function (num) {

    // var array = num.toString().split('');
    // var newArr = array.map((item) => item * item);
    // var newString = newArr.join('');

    // console.log(newString);

    console.log(num.toString().split('').map((item) => item * item).join(''));
}

squareDigits(9119);