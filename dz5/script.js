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


/*7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
кроме пробела, то пирамида должна быть нарисована этим символом,
например:


*
**
***
****
*****
******
*******
********
*********
*/

function piramid(a) {
	let to;

	if (a > 0) {
		to = a;
	} else {
		to = 9;
	}

	for (i = 1; i <= to; i++) {
		let str = '';
		for (j = 1; j <= i; j++) {

			if (a > 0) {
				str = str + i;
			} else {
				str = str + a;
			}

		}
		console.log(str);
	}
}

piramid('*');


/*8. Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:

		*
	  ***
	 *****
	*******
  *********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник.*/


function triangle(a) {
	for (let i = 1; i <= a; i++) {
		let line = '';
		for (let j = 1; j <= (a - i); j++) {
			line = line + ' ';
		}

		for (let j = 1; j <= ((i * 2) - 1); j++) {
			line = line + '*';
		}

		console.log(line);
	}
}

triangle(7);



function triangle2(a) {
	for (let i = a; i >= 1; i--) {
		let line = '';
		for (let j = 1; j <= (a - i); j++) {
			line = line + ' ';
		}

		for (let j = 1; j <= ((i * 2) - 1); j++) {
			line = line + '*';
		}

		console.log(line);
	}
}

triangle2(5);


/*9. Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000.*/

function fibonachi() {
	let newArray = [0, 1];
	let last = 1;
	while (last < 1000) {
		newArray.push(last);
		last = newArray[newArray.length - 1] + newArray[newArray.length - 2];
	}
	return newArray;
}

console.log(fibonachi());


/*10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом
(9 и менее). Исп. Рекурсию.*/

function fun10(a) {
	if (a < 9) {
		return a;
	}

	a = String(a);
	let sum = 0;

	for (i = 0; i < a.length; i++) {
		sum = sum + +a[i];
	}

	return fun10(sum);
}

console.log(fun10(182734));


/*11. Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл.*/

function fun11(array, i) {
	if (i > array.length - 1) {
		return;
	}
	console.log(array[i])
	fun11(array, i + 1);
}

fun11([12, 4, 89, 22], 0);


/*12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
группы студента и выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке.
Рамку вывести в консоль.*/

/* Результат:
**********************************
* Домашняя работа: «Функции»     *
* Выполнил: студент гр. 34567890 *
* Иванов Иван Иванович           *
**********************************
*/

function fun12() {
	let name = prompt('Введите ФИО');
	let group = prompt('Введите номер группы');
	let line1 = '* Домашняя работа: «Функции»';
	let line2 = '* Выполнил: студент гр. ' + group;
	let line3 = '* ' + name;
	let maxLength = max(line1.length, line2.length);
	maxLength = max(maxLength, line3.length);
	let lineBorder = '';
	for (i = 0; i < maxLength + 2; i++) {
		lineBorder = lineBorder + '*';
	}
	console.log(lineBorder);
	printLine(line1, maxLength);
	printLine(line2, maxLength);
	printLine(line3, maxLength);
	console.log(lineBorder);
}

function printLine(line, maxLength) {
	for (let i = line.length; i <= maxLength; i++) {
		line = line + ' ';
	}
	line = line + '*';
	console.log(line);
}

fun12();