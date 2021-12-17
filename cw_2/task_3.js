// 3. Перепишите с тернарным оператором
//             // if (a > b) {
//             //     max = a;
//             // } else {
//             //     max = b;
//             // }

//             //console.log(max);

var max;
var a = 2;
var b = 1;


if (a > b) {
    max = a;
} else {
    max = b;
}

console.log('max: ' + max);

var maxTernar = (a > b) ? a : b;

console.log('maxTernar: ' + maxTernar);