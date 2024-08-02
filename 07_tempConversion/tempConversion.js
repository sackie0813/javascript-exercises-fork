const convertToCelsius = function(tempInFarenheit) {
  let celsius = Math.round (((tempInFarenheit-32)*(5/9) )*10) / 10;
  return celsius;
};

const convertToFahrenheit = function(tempInCelsius) {
  let farenheit = Math.round(((tempInCelsius*(9/5)) + 32)*10) /10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
