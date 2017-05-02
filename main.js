var Myname = 'My name ';
var is = 'is';
var WRITE_YOUR_NAME = ' WRITE_YOUR_NAME';

console.log(Myname + is + WRITE_YOUR_NAME);


var x = Number(prompt ('Введення x'));
var y = Number(prompt ('Введення y'));
var z = Number(prompt ('Введення z'));

var resulttask = x + (y * z) ;

console.log('Резулятат виразу: ', resulttask);

var firstNumber = Number (prompt ('Перше число для калькуляції'));
var secondNumber = Number (prompt ('Друге число для калькуляції'));

var calcMult = firstNumber * secondNumber;
var calcDiv = firstNumber / secondNumber;
var calcSub = firstNumber - secondNumber;
var calcAdd = firstNumber + secondNumber;

document.write('Результат додавання: ', calcAdd)
document.write('<br>'+'Результат віднімання: ', calcSub)
document.write('<br>'+'Результат множення: ', calcMult)
document.write('<br>'+'Результат ділення: ', calcDiv)
