// 4.  Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// ###########

var obj = {};

function isEmpty(obj) {
    return !Object.keys(obj).length;
}
console.log(isEmpty(obj));