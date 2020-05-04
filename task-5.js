//## Задание 5. If else
//Что будет результатом следующих сравнений:
5 >= 1 //true
0 === 1 //false
4 <= 1 //false
1 != 1 //false
"A" > "B" //false
"B" < "C" //true
"a" > "A" //true
"b" < "A" //false
true === false //false
true != true //false

//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let hidden = "hidden";
if (hidden === "hidden"){
	hidden = "visible";
}else{hidden = "hidden"};
console.log(hidden);
document.write(hidden,'<br>');
//2. Используя if, записать условие:
 //   - если переменная равна нулю, присвоить ей 1;
 //   - если меньше нуля - строку “less then zero”;
 //   - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let hi = 5;
if (hi == 0){
	hi = 1;
} else if (hi < 0) {
	hi = "less then zero";
} else if (hi > 0) {
	hi *= 10;
};
console.log(hi);
document.write(hi,'<br>');

//3. Дан объект `let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }`. 
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' 
// и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = {name: 'Lexus', 
		   age: 10, 
		   create: 2008, 
		   needRepair: false};
if (car.age > 5){
	console.log('Need Repair',car.needRepair = true)
}else {console.log('Need Repair',car.needRepair)};

//4. Дан объект `let item = { name: 'Intel core i7', price: '100$', discount: '15%' }`.
//Написать условие если у *item* есть поле discount и там есть значение которое не **NaN** 
// а также есть поле *price* значение которого также не **NaN**
//  то в объекте *item* создать поле *priceWithDiscount* и записать туда цену с учетом скидки и вывести ее в консоль,
// обратите внимание что поля *discount* и *price* это строки и вам из них нужно получить числа чтобы выполнить расчет. 
// иначе если поля *discount* нет то вывести просто поле *price* в консоль.
let item = { name: 'Intel core i7', price: '100$', discount: '15%' };

if (item.discount && item.price != Number.NaN){
	item.priceWithDiscount = (parseInt(item.price,10)) - (parseInt(item.price,10))*(parseInt(item.discount,10)) / 100;
	console.log(item.priceWithDiscount)
}else{console.log(item.price)};

// 5. Дан следующий код:
let product = {
    name: "Яблоко",
    price: "10$"
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
//Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене 
//то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
if (parseInt(product.price,10) >= min && parseInt(product.price,10) <= max){
	console.log(product.name);
	document.write('Итог поиска: ',product.name ,'<br>');
}else{console.log('Товар не найден');
document.write('Товар не найден','<br>');
};