//# Задание 1

//- Создай две переменные которые будут хранить название и цену товара: `name` и `price`
let name = "";
let price = "";

//- Присвой переменным такие характеристики товара (сразу при объявлении)
  //- название: Домкрат гидравлический
  //- цена: 100
name = "Домкрат гидравлический";
price = 100;
  
//- Используя шаблонную строку выведи в консоль информацию о товаре, должно получится:
  //`'Выбран «Домкрат гидравлический», цена за штуку 100 тугриков'`.
console.log('Выбран "',name,'"','цена за штуку ',price,'тугриков');
document.write('Выбран "',name,'"',' цена за штуку ',price,' тугриков','<br>');
//- Присвой товару новую цену - 300
price = 300;

//- Используя шаблонную строку выведи в консоль информацию о товаре, получится:
 // `'Выбран «Домкрат гидравлический», цена за штуку 300 тугриков'`.
 console.log('Выбран "',name,'"','цена за штуку ',price,'тугриков');
 document.write('Выбран "',name,'"',' цена за штуку ',price,' тугриков','<br>');
 
 //# Задание 2

//Напиши скрипт проверки количества товаров на складе. Есть переменные `total`
//(количество товаров на складе) и `ordered` (единиц товара в заказе).
const total = 100;
const ordered = 50;
if (total > 0){
	console.log('В данный момент на складе',total,'едениц товара');
document.write('В данный момент на складе',total,' едениц товара','<br>');
}else{
	console.log('На складе нет товара');
document.write('На складе нет товара','<br>');
};

//Сравни эти значения и по результатам выведи:

//- Если в заказе указано число, превышающее количество товаров на складе, то
  //выведи сообщение `"На складе недостаточно твоаров!"`.
if (total < ordered){
	console.log('На складе недостаточно товара');
document.write('На складе недостаточно товара','<br>');
}

//- В другом случае выводи сообщение `"Заказ оформлен, с вами свяжется менеджер"`.
else{
	console.log('Заказ оформлен, с вами свяжется менеджер');
document.write('Заказ оформлен, с вами свяжется менеджер','<br>');
};

//Проверь работоспособность кода с разными значениями переменной `ordered`,
//например `20`, `80` и `130`.

//# Задание 3

//Напиши скрипт имитирующий авторизацию администратора в панели управления.
/*const ADMIN_PASSWORD = 'admin123';
users ={user:"admin",
        admin_password: true
	   };
function 
//Есть переменная `message` в которую будет записано сообщение о результате. При
//загрузке страницы у посетителя запрашивается пароль через `prompt`:



//- Если нажали `Cancel`, записать в `message` строку `'Отменено пользователем!'`
//- В протовном случае, если введен пароль который совпадает со значением
  //константы `ADMIN_PASSWORD`, записать в `message` строку `'Добро пожаловать!'`
//- В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
 // записать в `message` строку `'Доступ запрещен, неверный пароль!'`
//- После всех проверок вывести в `alert` значение переменной `message`.

let message;
*/