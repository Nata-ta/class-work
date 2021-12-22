// 3. Напишите функцию которая бы переворачивала предоставленную строку
//         Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
//         Ваш результат должен быть строкой.
//         "something"

// 		"test" => "tset"

//         ########

function reverseString(test) {
    // var newArr = test.split("");
    // var reversedNewArr = newArr.reverse();
    // return reversedNewArr.join("");

    return test.split("").reverse().join("");
}

console.log(reverseString("something"));