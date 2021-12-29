// 4.	Напишите функцию, которая будет обрабатывать url, удаляя в нем всё после знака #

// 			Примеры:

// 			removeUrlAnchor('www.codewars.com#about')
// 			// returns 'www.codewars.com'

// 			// returns 'www.codewars.com?page=1' 
// 			removeUrlAnchor('www.codewars.com?page=1')

function removeUrlAnchor(string) {
    var newArr = string.split('');
    var index = newArr.indexOf('#');
    if (index === -1) {
        // console.log(string);
        return string;
    }

    var copyArr = newArr.slice(0, index);
    var newStr = copyArr.join('');

    // console.log(newStr);
    return newStr
}

// removeUrlAnchor('www.codewars.com?page=1');