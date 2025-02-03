const {plus, times} = require('number-precision');


function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => plus(acc + purchase), 0);
    total = times(total, discount);
    return total;
}

module.exports = {calculateResultSum};