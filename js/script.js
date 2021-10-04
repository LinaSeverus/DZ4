"use strict";

let action;
let num1;
let num2;
let result;


action = prompt('Какое действие вы хотите совершить? add -сложение; sub -вычитание; mult -умножение; div -деление');
num1 = prompt('Введите первое число');
num2 = prompt('Введите второе число');

if (action == 'add') {
    result = +num1 + +num2;
    alert(`Результат: ${num1} + ${num2} = ${result}`);
} else if (action == 'sub') {
    result = num1 - num2;
    alert(`Результат: ${num1} - ${num2} = ${result}`);
} else if (action == 'mult') {
    result = num1 * num2;
    alert(`Результат: ${num1} * ${num2} = ${result}`);
} else if (action == 'div') {
    result = num1 / num2;
    alert(`Результат: ${num1} / ${num2} = ${result}`);
} else {
    alert(`Необхоимо ввести действие только из предложенных вариантов!`);
}


