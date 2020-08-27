var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  if(number2!==0){  return number1 / number2;}
  else return 0;
};


var number1 = parseInt(prompt("Enter a Number"));
var number2 = parseInt(prompt("Enter a 2nd Number"));

alert(divide(number1, number2));
