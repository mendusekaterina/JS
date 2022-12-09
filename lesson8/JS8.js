//
//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//  створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let user1 = new User(1, 'katya', 'pupkina', 'katya.pupkina@gmail.com', '+380666532713');
let user2 = new User(2, 'kostya', 'kovalenko', 'kostya.kovalenko@gmail.com', '+380677432712');
let user3 = new User(3, 'elena', 'lipkina', 'elena.lipkina@gmail.com', '+380956433317');
let user4 = new User(4, 'olya', 'vovk', 'olya.vovk@gmail.com', '+380996432755');
let user5 = new User(5, 'petya', 'sinegubov', 'petya.sinegubov@gmail.com', '+380666433317');
let user6 = new User(6, 'alex', 'grishko', 'alex.grishko@gmail.com', '+380506232777');
let user7 = new User(7, 'anna', 'yakovenko', 'anna.yakovenko@gmail.com', '+380666432753');
let user8 = new User(8, 'kolya', 'stus', 'kolya.stus@gmail.com', '+380666499716');
let user9 = new User(9, 'alina', 'ukrainka', 'alina.ukrainka@gmail.com', '+380662032711');
let user10 = new User(10, 'sasha', 'shevchenko', 'sasha.shevchenko@gmail.com', '+380506433714');
let UsersArray = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(UsersArray);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//  залишивши тільки об'єкти з парними id (filter)
//
let filterArray = UsersArray.filter((user) => user.id % 2 === 0);
console.log(filterArray);
//
// - Взяти масив з  User[] з попереднього завдання,
//  та відсортувати його по id. по зростанню (sort)
//
let sortArray = filterArray.sort((a, b) => b.id - a.id);
console.log(sortArray);
// //
// // - створити класс для об'єктів Client з полями id, name, surname ,
// // email, phone, order (поле є масивом зі списком товарів)
// //
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// //
// // створити пустий масив, наповнити його 10 об'єктами Client
// //
let ArrayOfClients = [
    new Client(1, 'katya', 'pupkina', 'katya.pupkina@gmail.com', '+380666532713', ['item1', 'item2']),
    new Client(2, 'kostya', 'kovalenko', 'kostya.kovalenko@gmail.com', '+380677432712', ['item3']),
    new Client(3, 'elena', 'lipkina', 'elena.lipkina@gmail.com', '+380956433317', ['item1', 'item2', 'item4']),
    new Client(4, 'olya', 'vovk', 'olya.vovk@gmail.com', '+380996432755', ['item3', 'item5']),
    new Client(5, 'petya', 'sinegubov', 'petya.sinegubov@gmail.com', '+380666433317', ['item3', 'item4', 'item5']),
    new Client(6, 'alex', 'grishko', 'alex.grishko@gmail.com', '+380506232777', ['item1', 'item5', 'item6']),
    new Client(7, 'anna', 'yakovenko', 'anna.yakovenko@gmail.com', '+380666432753', ['item3', 'item6', 'item7']),
    new Client(8, 'kolya', 'stus', 'kolya.stus@gmail.com', '+380666499716', ['item5', 'item7']),
    new Client(9, 'alina', 'ukrainka', 'alina.ukrainka@gmail.com', '+380662032711', ['item1', 'item5', 'item7', 'item9']),
    new Client(10, 'sasha', 'shevchenko', 'sasha.shevchenko@gmail.com', '+380506433714', ['item7', 'item8', 'item10'])
];
// //
// // - Взяти масив (Client [] з попереднього завдання).
// // Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
ArrayOfClients.sort((a,b)=>(a.order.length-b.order.length))
console.log(ArrayOfClients);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
//  -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//  -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//  -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//  -- changeYear (newValue) - змінює рік випуску на значення newValue
//  -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//     і додає його в поточний об'єкт car
//
function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`)
    };
    this.info = function () {
        for (const carKey in this) {
            if (typeof this[carKey]!=='function'){
            console.log(`${carKey} - ${this[carKey]}`)}
        }
    }
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
    this.changeYear = (newValue) => this.year = newValue;
    this.addDriver = (driver) => this.driver = driver;
}
let newcar = new Car('mazda3', 'Japan', 2011, 200, 2.5);
newcar.drive();
newcar.info();
console.log(newcar.increaseMaxSpeed(100));
console.log(newcar.changeYear(2022));
console.log(newcar.addDriver({name: 'vasya', sername: 'pupkin', driverlicense: 'B', experience: 10}));

//
// - (Те саме, тільки через клас)
//
class CarClass{
constructor (model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;}
    driver () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`)
    }
    info () {
        for (const carKey in this) {
            if (typeof this[carKey]!=='function'){
                console.log(`${carKey} - ${this[carKey]}`);}
        }
    }
    increaseMaxSpeed (newSpeed) {
        console.log(this.maxSpeed += newSpeed);}
    changeYear (newValue) {
        console.log(this.year = newValue);}
    addDriver (driver) {
        console.log(this.driver = driver);}
}
let ourcar = new CarClass('mazda3', 'Japan', 2011, 200, 2.5);
ourcar.driver();
ourcar.info();
ourcar.increaseMaxSpeed(100);;
ourcar.changeYear(2022);
ourcar.addDriver({name: 'vasya', sername: 'pupkin', driverlicense: 'B', experience: 10});
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
function Sinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize
}

let arrayOfSinderellas = [
    new Sinderella('Valeria', 29, 39),
    new Sinderella('Malvina', 20, 36),
    new Sinderella('Mivina', 22, 35),
    new Sinderella('Irina', 21, 36),
    new Sinderella('Evgenia', 30, 40),
    new Sinderella('Ekaterina', 20, 37),
    new Sinderella('Anna', 23, 36),
    new Sinderella('Olga', 20, 35),
    new Sinderella('Marina', 25, 36),
    new Sinderella('Karina', 21, 34),
]

class Princ {

    constructor(name, age, requiredSize) {
        this.name = name;
        this.age = age;
        this.requiredSize = requiredSize;
    }
}

let prince = new Princ('Alexander', 33, 37);
console.log(prince);

for (const sinderellaElement of arrayOfSinderellas) {
    if (sinderellaElement.footSize === prince.requiredSize) {
        console.log(`my Sinderela is ${sinderellaElement.name}`);
    }
}
let find = arrayOfSinderellas.find(value => value.footSize === prince.requiredSize)
console.log(find);
