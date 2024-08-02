const leapYears = function(year) {
    const isDivisbleByFour = (year % 4 === 0);
    const isDivisbleByCentury = (year % 100 === 0);
    const isDivisibleByFourHundred = (year % 400 === 0);

    if (isDivisbleByFour && (!isDivisbleByCentury || isDivisibleByFourHundred)) {
        return true;
    }
    else {
        return false;
    }
};

//1600 is divisible by four AND is divisible by 100 and 400
// 1700 is divisible by four AND is divislbe by 100 and is not divisible by 400,
// return false 

// Do not edit below this line
module.exports = leapYears;
