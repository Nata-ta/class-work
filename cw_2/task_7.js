// 7. Напишите код, который будет спрашивать логин с помощью prompt.

// 			Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// 			Пароль проверять так:
// 			Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// 			Иначе – «Неверный пароль»,
// 			При отмене – «Отменено».

// 			Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

var userName = prompt('please enter username');
var pass;

if (userName === 'Админ') {
    pass = prompt('please enter passward');

    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName === '' || userName === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}