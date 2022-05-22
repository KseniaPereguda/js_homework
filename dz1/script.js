//Задача 2

let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;

a1 = 5 % 3;
a2 = 3 % 5;
a3 = 5 + '3';
a4 = '5' - 3;
a5 = 75 + 'кг';
a6 = 785 * 653;
a7 = 100 / 25;
a8 = 0 * 0;
a9 = 0 / 2;
a10 = 89 / 0;
a11 = 98 + 2;
a12 = 5 - 98;
a13 = (8 + 56 * 4) / 5;
a14 = (9 - 12) * 7 / (5 + 2);
a15 = + "123";
a16 = 1 || 0;
a17 = false || true;
a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);


// Задача 3 

let height = 23;
let width = 10;
let SPryam = height * width;
console.log(SPryam);


// Задача 4 

height = 10;
let VCilindra = Math.PI * (a7 / 2) * (a7 / 2) * height;
console.log(VCilindra);


// Задача 5

let r = 5;
let SKruga = Math.PI * 5 * 5;
console.log(SKruga);


// Задача 6

let a = 5;
let b = 7;
let h = 10;
let STrap = (a + b) / 2 * h;
console.log(STrap);


// Задача 7

let s = 2000000;
let p = 10;
let years = 5;
let Pereplata = s * p / 100 * 5;
console.log(Pereplata);


// Задача 8 

/* a+2(x-b)=16; 
	2x - 2b = 16 - a;
	2x = 16 - a + 2b;
	x = 8 - a/2  + b; */

a = 8;
b = 3;
let x;
console.log(8 - a / 2 + b);


/* b(x+15)=a+6x;
	bx + 15b - 6x = a;
	15b - a = 6x - bx;
	15b - a = x(6 - b);
	x = (15b - a) / 6 - b; */

console.log((15 * b - a) / (6 - b));


/* x+2x+ax+bx=23780;
	3x + ax + bx = 23780;
	x(3 + a + b) = 23780;
	x = 23780 / (3 + a + b); */

console.log(23780 / (3 + a + b));

