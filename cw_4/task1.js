// 1. Напишите функцию, которая принимает массив в качестве аргумента. 
// Используя slice(), извлеките информацию из массива аргументов и верните новый массив, содержащий элементы «warm» и «sunny».

// ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']

// ########

var myArray = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];

function createNew(arr) {
    return arr.slice(2, -2);
}

console.log(createNew(myArray));