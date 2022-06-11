/*1. Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром.*/

function fun1(a, b, c) {
	return (a - b) / c;
}

console.log(fun1(10, 4, 2));


/*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром.*/

function fun2(a) {
	a1 = a * a * a;
	a2 = a * a;
}

fun2(2);
console.log(a1, a2);


/*3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.*/

function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

console.log('меньшее ' + min(4, 5));

function max(a, b) {
	if (a < b) {
		return b;
	} else {
		return a;
	}
}

console.log('большее ' + max(9, 5));


/*4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.*/

function arr(a, b) {
	let from = min(a, b);
	let to = max(a, b);
	let array = [];
	for (let i = from; i <= to; i++) {
		array.push(i);
	}
	return array;
}

function printArray(arrayToPrint) {
	console.log(arrayToPrint);
}

let a4 = +prompt('Введите первое число');
let a5 = +prompt('Введите второе число');

let result = arr(a4, a5);
printArray(result);


/*5. Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/

function isEven(a) {
	if (a % 2 == 0) {
		return true
	} else {
		return false
	}
}

console.log(isEven(8));


/*6. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.*/

function fun6(array) {
	let evenArray = [];
	for (let i = 0; i < array.length; i++) {
		if (isEven(array[i])) {
			evenArray.push(array[i]);
		}
	}
	return evenArray;
}

let arr6 = [4, 88, 24, 13, 9, 7, 14];
console.log(fun6(arr6));
