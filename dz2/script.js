/* Задача 1

Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.»*/

let name = prompt('Ваше имя');
let age = prompt('Ваш возраст');
let city = prompt('Город проживания');
let phone = prompt('Ваш номер телефона');
let email = prompt('Ваша почта');
let company = prompt('Где вы работаете?');

console.log('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');


/*  Задача 2

Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.». */

let year = 2022 - age;
console.log(name + ' родился в ' + year + ' году.');


/* Задача 3

Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */

let str = '288091';

let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (sum1 == sum2) {
	console.log('Да');
} else {
	console.log('Нет');
}


/* Задача 4

Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3. */

let aa = 1;
if (aa > 0) {
	console.log('Верно');
} else {
	console.log('Неверно');
}


/* Задача 5

Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат.*/

let a = 10;
let b = 2;
let sum = a + b;
let raz = a - b;
let pro = a * b;
let cha = a / b;

console.log(sum);
console.log(raz);
console.log(pro);
console.log(cha);

if (sum > 1) {
	console.log(sum * sum);
}


/* Задача 6 

Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
'Неверно'. */

if (a > 2 && a < 11 || b >= 5 && b < 14) {
	console.log('Верно');
} else {
	console.log('Неверно');
}


/* Задача 7 

В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую).*/

let n = 43;

if (n >= 0 && n <= 15) {
	console.log('Первая четверть часа');
} else if (n > 15 && n <= 30) {
	console.log('Вторая четверть часа');
} else if (n > 30 && n <= 45) {
	console.log('Третья четверть часа');
} else if (n > 45 && n <= 59) {
	console.log('Четвертавя четверть часа');
} else {
	console.log('Данное число не входит в разрешенный диапазон ');
}


/* Задача 8

В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью).*/

let day = 26;

if (day >= 1 && day <= 10) {
	console.log('Первая декада');
} else if (day > 10 && day <= 20) {
	console.log('Вторая декада');
} else if (day > 20 && day <= 31) {
	console.log('Третья декада');
} else {
	console.log('Данное число не входит в разрешенный диапазон');
}


/* Задача 9 

Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно.*/

let days = 82;
let years = days / 365;
let months = days / 12;
let weeks = days / 7;
let hours = days * 24;
let min = days * 1440;
let sec = days * 86400;


if (years < 1) {
	console.log('Меньше года');
} else {
	console.log('Количество лет: ' + years);
}

if (months < 1) {
	console.log('Меньше месяца');
} else {
	console.log('Количество месяцев: ' + months);
}

if (weeks < 1) {
	console.log('Меньше недели');
} else {
	console.log('Количество недель: ' + weeks);
}

console.log('Количество минут: ' + min);
console.log('Количество секунд: ' + sec);


/* Задача 10

Напишите скрипт, который по введенному дню (исп. значение переменной из 8
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
т.д.). Скрипт определение поры года написать через switch. */

let fullYears = Math.floor(days / 365);
let daysEx10 = days - (fullYears * 365);
let monthEx10;

if (daysEx10 >= 1 && daysEx10 <= 31) {
	monthEx10 = 1;
	console.log('1. Январь');
} else if (daysEx10 >= 32 && daysEx10 <= 59) {
	monthEx10 = 2;
	console.log('2. Февраль');
} else if (daysEx10 >= 60 && daysEx10 <= 90) {
	monthEx10 = 3;
	console.log('3. Март');
} else if (daysEx10 >= 91 && daysEx10 <= 120) {
	monthEx10 = 4;
	console.log('4. Апрель');
} else if (daysEx10 >= 121 && daysEx10 <= 151) {
	monthEx10 = 5;
	console.log('5. Май');
} else if (daysEx10 >= 152 && daysEx10 <= 181) {
	monthEx10 = 6;
	console.log('6. Июнь');
} else if (daysEx10 >= 182 && daysEx10 <= 212) {
	monthEx10 = 7;
	console.log('7. Июль');
} else if (daysEx10 >= 213 && daysEx10 <= 243) {
	monthEx10 = 8;
	console.log('8. Август');
} else if (daysEx10 >= 244 && daysEx10 <= 273) {
	monthEx10 = 9;
	console.log('9. Сентябрь');
} else if (daysEx10 >= 274 && daysEx10 <= 304) {
	monthEx10 = 10;
	console.log('10. Октябрь');
} else if (daysEx10 >= 305 && daysEx10 <= 334) {
	monthEx10 = 11;
	console.log('11. Ноябрь');
} else if (daysEx10 >= 335 && daysEx10 <= 365) {
	monthEx10 = 12;
	console.log('12. Декабрь');
}

switch (monthEx10) {
	case 1:
	case 2:
	case 12:
		console.log('Зима');
		break;

	case 3:
	case 4:
	case 5:
		console.log('Весна');
		break;

	case 6:
	case 7:
	case 8:
		console.log('Лето');
		break;

	case 9:
	case 10:
	case 11:
		console.log('Осень');
		break;
}