
// Задание 1. Числа

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
const pi = (Number(Math.PI));
const pi2 = (Number(pi.toFixed(2))); // возвращает два числа после запятой
console.log(pi2);  // 3.14 
document.write('1) PI из Math = ',pi ,'<br>','Округленное PI = ',pi2,'<br>');

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51	
const arr1 = Math.min(15,11,16,12, 51, 12, 13, 51);
const arr2 = Math.max(15,11,16,12, 51, 12, 13, 51);
console.log('${arr1} = min value ${arr2} = max value');
document.write(' 2)Минимум = ', arr1,'<br>','Максимум = ',arr2,'<br>');

// 3. Работа с Math.random:
//    * Получить случайное число и округлить его до двух цифр после запятой
const random2 = ((Math.random().toFixed(2)));
console.log(random2);
document.write('3) Случайное число от 0 до 1 = ', random2,'<br>');

//    * Получить случайное целое число от 0 до X. X - любое произвольное число. 
function getRandomInRange(min, max){
	return Math.floor(Math.random() * (max - min));	
}	

// функция возвращает случайное число в диапазоне разницы (max - min)
console.log(getRandomInRange(0, 100));
document.write('Случайное число от 0 до Х = ', getRandomInRange(0, 100),'<br>');	
	
// 	4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let a = 0.6;
let b = 0.7;
let c = a + b;
console.log(parseFloat((c).toFixed(1)));
document.write('4) Проверка результата вычисления 0.6 + 0.7 = ', parseFloat((c).toFixed(1)),'<br>');

// 5. Получить число из строки ‘100$’
const d = parseInt("100$".replace(/\D+/g, ''));
console.log(d);
document.write('5) Получаем число: ', d, ' из строки => ‘100$’','<br>');