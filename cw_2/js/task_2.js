// 2. Повторить с switch, при условии 
//             num = 5 - "Tiny"
//             num = 10 - "Small"
//             num = 15 - "Medium"
//             num = 20 - "Large"
//             num = 25 - "Huge"

var num = +prompt('Enter your size');

switch (num) {
    case 5:
        console.log("Tiny");
        break;

    case 10:
        console.log("Small");
        break;

    case 15:
        console.log("Medium");
        break;

    case 20:
        console.log("Large");
        break;

    case 25:
        console.log("Huge");
        break;

    default:
        console.log("We don't have your size");
}