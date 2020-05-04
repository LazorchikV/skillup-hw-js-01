
//## Задание 3. Объекты

//1. Создать объект с полем product, равным ‘iphone’
const obj = {
	         product: "iphone"
}; 

//2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
const H = obj.price = 1000;
const I = obj.currency = "dollar";

//3. Добавить поле details, которое будет содержать объект с полями model и color
const J = obj.details = {
	           model: "10",
			   color: "Gold" 
};
console.log(obj);
document.write('1) Описание объекта :',obj.product,'<br> Стоимость: $', H,'<br> Модель: ',obj.details['model'],'<br> Цвет: ',obj.details['color'],'<br>');
//**Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.**
