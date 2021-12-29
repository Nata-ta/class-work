// 8.	Напишите функцию, которая принимает строку и удаляет в ней все дублирующиеся слова, оставляя тем самым только уникальные

// 			Пример:

// 			Input:
// 			'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// 			Output:
// 			'alpha beta gamma delta'

function deletDouble(string) {
    var newArr = string.split(' ');
    var result = [];

    for (var item of newArr) {

        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result.join(' ');
};

console.log(deletDouble('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));