// 3.	Заменить все элементы

// 			Напишите функцию replaceAll, которая принимает первым параметром массив элементов, вторым параметром - элемент, который нужно заменить и третьим - 
// 			элемент, который должен заменить второй элемент.
// 			Пример:
// 			 replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

// 		###########

function replaceAll(array, oldItem, newItem) {
    // var indexOfOldItem = array.indexOf(oldItem);
    // array.splice(indexOfOldItem, 1, newItem);

    // console.log(array);

    array.splice(array.indexOf(oldItem), 1, newItem);
    console.log(array);
}

replaceAll([1, 2, 2], 1, 2);