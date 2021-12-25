// 1.  Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Вернуть усеченную строку с ... окончанием.

// function truncateString(str, num) {
//     // your code here

//     return str;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// ###########

function truncateString(str, num) {

    if (str.length > num) {
        return str.split("").splice(0, num).join("").concat("...");
        // array.length = num;
        // console.log(array);
    }
    // var string = array.join("");
    // string += "...";
    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Test", 8));