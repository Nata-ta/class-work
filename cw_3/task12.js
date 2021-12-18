// 12*. Запросите у пользователя число и проверьте есть ли оно в массиве
// 			Если есть, то сколько раз встречается

// 		

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 1];
var yourNum = prompt('Please, enter your number');
var numOfNum = 0;
myFunc();

function myFunc() {
    for (var i = 0; i < myArray.length; i++) {

        if (myArray[i] == yourNum) {
            numOfNum++;
        }
    }
    return numOfNum;
}

console.log('There are ' + numOfNum + ' your numbers in my array.');