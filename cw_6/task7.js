// 7.	Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// 			Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
    let totalAmount = users.reduce(function (sum, item) {
        return sum + item.age;
    }, 0);
    return totalAmount / users.length;
}
alert(getAverageAge(arr));
