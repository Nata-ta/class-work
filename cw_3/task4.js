// 4. Добавьте ["dog", 3] в конец переменной myArray и выведите в консоль.
// 			Выведите в консоль первый элемент в каждом вложенном массиве.

// 		// Setup
// 		var myArray = [["John", 23], ["cat", 2]];

// 		-----------------------------------------------------------------
var myArray = [["John", 23], ["cat", 2]];
myArray.push(['dog', 3]);
console.log(myArray);

console.log(myArray[0][0]);
console.log(myArray[1][0]);
console.log(myArray[2][0]);