//
// - створити функцію яка обчислює та повертає площу прямокутника
// зі сторонами а і б
//
let S = (a, b) => a * b;
console.log(S(5, 6));


//
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
const PI = 3.14
let A = (r) => PI * (r ** 2);
console.log(A(3));
//
// - створити функцію яка обчислює та повертає площу циліндру
// висотою h, та радіутом r
//
let Scil = (r, h) => 2 * PI * r * h;
console.log(Scil(3, 7));
//
// - створити функцію яка приймає масив та виводить кожен його елемент
//
function letArr(arr) {
    for (const item of arr) {
        console.log(item)
    }
}

letArr([1, 9, 8, 7]);
//
// - створити функцію яка створює параграф з текстом.
// Текст задати через аргумент
//
function par(text) {
    document.write(`<p>${text}</p>`);
}

par('hello, okten');
//
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
//
function spysok(textli) {
    document.write(`<ul>
                <li>${textli}</li>
                <li>${textli}</li>
                <li>${textli}</li>
                    </ul>`);
}

spysok('anytext');
//
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)
//
function spysok2(textli, num) {
    document.write(`<ul>`)
    let i = 0
    while (i < num) {
        document.write(`<li>${textli}</li>`);
        i++
    }
    document.write(`</ul>`);
}

spysok2('anytext2', 2);
//
// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
//
function anyArr(...arr) {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}

anyArr(1, 'asde', true, 123);
//
// - створити функцію яка приймає масив об'єктів
// з наступними полями id,name,age , та виводить їх в документ. Для
// кожного об'єкту окремий блок.
//
const arrOfOblects = [
    {id: 1, name: 'katya', age: 30},
    {id: 2, name: 'kostya', age: 31},
    {id: 3, name: 'elena', age: 30},
    {id: 4, name: 'olya', age: 30}
]

function masObj(array) {
    for (const user of array) {
        document.write(`<div>${user.id}: ${user.name} - ${user.age}</div>`);
    }
}

masObj(arrOfOblects);
//
// - створити функцію яка повертає найменьше число з масиву
//
let masyv = [3, 4, -29, -4, 100]

function minvalue(arr) {
    let min = arr[0];
    for (el of arr) {
        if (el < min) {
            min = el;
        }
    }
    return min;
}

console.log(minvalue(masyv));
;
//
// - створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
//???
let arrayS = [1, 2, 3, 4, 5,5]

function Sum(array) {
    let Sum = 0
    for (item of array) {
        Sum += item;
    }
    return Sum
}
console.log(Sum(arrayS));