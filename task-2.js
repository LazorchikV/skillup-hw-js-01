//## Задание 2. Строки
//```let string = ‘some test string’;```
//**ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ**

//1. Получить первую и последнюю буквы строки
let string = 'some test string';
const firstChar = string.charAt(0); 
const lastChar = string.charAt(string.length-1); 
console.log('${firstChar} this is first char' + ' and ${lastChar} this is last char'); 
document.write('1) ', firstChar, ' this is first char' + ' and ', lastChar ,' this is last char','<br>');

//2. Сделать первую и последнюю буквы в верхнем регистре
string = string.charAt(0).toUpperCase() + string.substr(1) + string.charAt(string.length-1).toUpperCase();
console.log(string); 
document.write('2) some test string => ',string,'<br>');

//3. Найти положение слова ‘string’ в строке
const pos1 = string.match('string'); // метод возвращает совпадения в строке
console.log(pos1);
document.write('3) Положение слова ‘string’ в строке: ',pos1.index,'<br>');

//4. Найти положение второго пробела (“вручную” ничего не считать)
const pos2 = string.indexOf(' ',string.indexOf(' ') + 1); // выводит индекс второго пробела
console.log(pos2);
document.write('4) Положение второго пробела: ',pos2,'<br>');

//5. Получить строку с 5-го символа длиной 4 буквы
const fromTo = string.substr(5, 4); 
console.log(fromTo);
document.write('5) Получить строку с 5-го символа длиной 4 буквы: ',fromTo,'<br>');

//6. Получить строку с 5-го по 9-й символы
const fromTo2 = string.slice(4, 10); 
console.log(fromTo2);
document.write('6) Получить строку с 5-го по 9-й символы: ',fromTo2,'<br>');

//7. Получить новую строку из исходной путем удаления последних 6-и символов
//(то есть исходная строка без последних 6и символов)
const newString = string.slice(0, [string.length-6]);
console.log(newString); 
console.log(newString.length);
document.write('7) Новая строка из исходной путем удаления последних 6-и символов: ',newString, ' (в которой ',newString.length,' символов) ','<br>');

//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
const e = 20;
const f = 16;
const eStr = (e).toString() + (f).toString();
console.log(eStr);
console.log(typeof eStr);
document.write('8) Получить переменную string: ',eStr,'<br>');