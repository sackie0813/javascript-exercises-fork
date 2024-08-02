const sumAll = function(min, max) {
    // Add starting from min, add increments of 1
    if (!Number.isInteger(min) ||!Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

//5 , 10
// 0, 5 