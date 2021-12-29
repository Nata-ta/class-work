// 1.	Часы
// 			Напишите функцию, которая принимает на вход количeство часов, минут и секунд, и преобразует полученное время в миллисекунды.

// 			Пример:
// 			past(0, 1, 1) == 61000

// 		###########

var clock = function (hour, minut, sec) {
    var hoursInSec = hour * 60 * 60;
    var minutsInSec = minut * 60;
    return (hoursInSec + minutsInSec + sec) * 1000;
}

