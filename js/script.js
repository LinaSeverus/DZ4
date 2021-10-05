"use strict";

let result;


const action = prompt('Какое действие вы хотите совершить? add -сложение; sub -вычитание; mult -умножение; div -деление');
const num1 = prompt('Введите первое число');
const num2 = prompt('Введите второе число');

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


