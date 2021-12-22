// 4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
//         Ваш ответ должен быть числом.
//         "The quick brown fox jumped over the lazy dog" => 6

// 		########

var text = "The quick brown fox jumped over the lazy dog";

function getTheBiggestString(string) {
    var arrayFromString = string.split(" ");
    console.log(arrayFromString);
    var max = 0;

    for (var i = 0; i < arrayFromString.length; i++) {
        console.log(arrayFromString[i].length);

        if (max < arrayFromString[i].length) {
            max = arrayFromString[i].length;
        }
    }
    console.log("#########");
    console.log(max);
}

