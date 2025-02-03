// const calculateResultSum = require('./calculateResultSum');
// const total = calculateResultSum.calculateResultSum([12.1, 32.2, 43.1], .9);
// можно импортировать только функции или целиким весь файл. Если целиком, то нужно писать с точкой. Иначе можно импортировать конкретные функции и сразу использовать их имена



const {calculateResultSum} = require('./calculateResultSum');
require('colors');


// установили colors для окраски вывода

const total = calculateResultSum([12.1, 32.2], .9);
console.log(total > 50 ? (`Total: ${total} rub`).red : (`Total: ${total} rub`).green);  

// const {red, green} = require('colors');
// total > 50 ? console.log(red(`Total: ${total} rub`)) : console.log(green(`Total: ${total} rub`));  

