var display = document.querySelector(".display");

var operatorA = "0";
var operatorB = "0";
var opera;
var coma = 0;

var listenerBtn = [];
//operators
var sum = document.getElementById('sum');
var subtraction = document.getElementById('subtraction');

var multiplication = document.getElementById('multiplication');
var division = document.getElementById('division');
//Add in array
listenerBtn.push(sum);
listenerBtn.push(subtraction);
listenerBtn.push(multiplication);
listenerBtn.push(division);
//numbers  btns
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var decimal = document.getElementById('decimal');
var equals = document.getElementById('equals');
//Add in array
listenerBtn.push(one);
listenerBtn.push(two);
listenerBtn.push(three);
listenerBtn.push(four);
listenerBtn.push(five);
listenerBtn.push(six);
listenerBtn.push(seven);
listenerBtn.push(eight);
listenerBtn.push(nine);
listenerBtn.push(zero);
listenerBtn.push(decimal);
listenerBtn.push(equals);

//btn C AC, Del (+/-)
var reset = document.getElementById('reset');
var clear = document.getElementById('clear');
var del = document.getElementById('del');
var masmenos = document.getElementById('masmenos');