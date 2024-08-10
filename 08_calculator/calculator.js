const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  if(array.length === 0) {
    return 0;
  }
	else {return array
    .reduce((acc,curr) => acc+curr);
  }
};

const multiply = function(array) {
  return array
    .reduce((acc,curr) => acc*curr);
};

const power = function(a,b) {
  let result = a;
  for (let i = 1; i<b; i++) {
    result += result*b;
  }
  return result;
};

// 5! 
/*
  1*1 , 1*2, 2*3, 6*4, 24*5
*/
const factorial = function(a) {
  let result = 1;
  for (let i = 1; i < a; i++) {
     result += result*i;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
