"use strict";
// Task 01
// Интерфейсы в TS могут выполнять функцию описания структуры объектов, создавать кастомизированные типы. Давайте сделаем несколько примеров. 
// Создайте интерфейс IGoods, который описывает свойства title - string, amount - number, color - string (не обязательный).
const thing = {
    title: 'shirt',
    amount: 444,
    color: 'black'
};
const person = {
    id: 4,
    username: 'Mike',
    password: 'adfaf554',
    hash: 'adfq654',
    created: 999,
};
const obj_31 = {
    message_id: 32546,
    user_id: 25654,
    username: 'Скринька Пандори',
    time: '2024-01-31 17:45:25',
    body: 'Країни ЄС цього року нададуть...'
};
const obj_32 = {
    message_id: 3876214,
    user_id: 657412,
    username: 'ITGid - info',
    time: '2024-01-29 08:25:15',
    body: 'Небольшой анонс на сегодня...'
};
const clock = {}; // не изменяйте данную строку.
clock.h = 21;
clock.m = 31;
clock.s = 59;
const phone = {
    title: 'Iphone',
    amount: 555,
    size: [11, 22, 33, 55]
};
const iphone_16 = {
    color: ['black', 'white', 'green'],
    title: 'iphone_16',
    amount: 666,
    size: [999, 888, 777, 666, 555],
};
const card = {
    addToCart(id) {
        return id;
    },
    clearCart() {
        console.log('clearCart => is a void method');
    }
};
// Тут создайте интерфейс IRect
const rect = {
    a: 3,
    b: 4,
    area() {
        return this.a * this.b;
    }
};
console.log(rect.area());
// Для проверки создайте объект rect_01 на базе интерфейса IRect, задайте размеры и реализуйте area(). После проверки - закомментируйте объект.
// Task 09
// Создадим абстрактный класс, ARect, который описывает геометрическую фигуру. Абстрактный класс содержит два абстрактных свойства a, b (числа) и метод area (не абстрактный), который возвращает this.a * this.b - число. 
// Обратите внимание - мы реализовали метод в абстрактном классе, в интерфейсе реализация невозможна.
class ARect {
    area() {
        return this.a * this.b;
    }
}
// Тут создайте абстрактный класс
// Task 10
// Повторим то, что прошли. Создайте на основе абстрактного класса ARect класс Rectangular. Добавьте конструктор, который принимает два числа и заполняет свойства a, b. Создайте на базе класса объект со сторонами 0.5 и 20 и выведите полученную площадь в консоль. После проверки - закомментируйте код создания объекта.
class Rectangular extends ARect {
    a;
    b;
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
}
class Paragraph {
    tag = '';
    paired = false;
    text = '';
    getWidth() {
        return 0;
    }
}
// const p = new Paragraph();
// console.log(p.getWidth());
// console.log(p.paired);
// Тут создайте класс Paragraph c имплементацией свойств и методов интерфейса IElement. Пусть для проверки getWidth возвращает 0.
// Task 12
// Класс может реализовывать два интерфейса. Напишите интерфейс IFigureA, интерфейс описывает фигуру квадрат - сторона a (число), и метод getSquare, который возвращает число. 
// Task 13
// Напишите интерфейс IFigureB, интерфейс описывает фигуру квадрат - сторона b (число), и метод getPerimeter, который возвращает число.
// Task 14
// Создайте класс Rect, который имплементирует интерфейсы IFigureA, IFigureB и реализует методы getSquare, getPerimeter. 
// Для проверки, на базе класса создайте объект obj_14, со сторонами 5 и 4 и выведите его площадь и периметр. 
// Task 15
// Создан Абстрактный класс AExample. Напишите интерфейс IExample, который соответствует его структуре.
// abstract class AExample {
//     public src : string = '';
//     public format : string;
//     public alt : string = '';
//     public title : string = '';
//     public width : number = 100;
//     public widthUnits : string = '%';
//     public render () {
//         const img = document.createElement('img');
//         img.src = this.src;
//         img.alt = this.alt;
//         img.title = this.title;
//         img.style.width = this.width + this.widthUnits;
//         return img;
//     }
// }
// Тут напишите IExample
//# sourceMappingURL=sprint_15.js.map