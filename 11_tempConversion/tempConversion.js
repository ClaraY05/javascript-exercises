const convertToCelsius = function(tempF) {
  let tempC = (tempF-32)*(5/9);
  return (tempC%1===0)?tempC:parseFloat(tempC.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC*9/5)+32;
  return (tempF%1===0)?tempF:parseFloat(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
