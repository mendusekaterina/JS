// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('enter the X');
if (x !== 0) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter time');
if (time >= 0 &&
    time < 15) {
    console.log('first quarter');
}

else if
(time >= 15 &&
    time < 30) {
    console.log('second quarter');
}

else if (time >= 30 &&
    time < 45) {
    console.log('third quarter');
}
else if (time >= 45 &&
    time <=59 ) {
    console.log('fourth quarter');
}
else {
    console.log ('not a time')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('enter day');
if (day >= 1 &&
    day <= 10) {
    console.log('first decade');
}

else if
(day > 10 &&
    day <= 20) {
    console.log('second decade');
}

else if (day > 20 &&
    day <= 31) {
    console.log('third decade');
}
else {
    console.log ('the date is not exist')
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа,
// що заплановано на цей день (можна
// замість плану на день, назву дня англійською).

switch (prompt('enter the number of the day of the week'))
{
    case '1':
        console.log ('Monday');
        break;
    case '2':
        console.log ('Tuesday');
        break;
    case '3':
        console.log ('Wednesday');
        break;
    case '4':
        console.log ('Thursday');
        break;
    case '5':
        console.log ('Friday');
        break;
    case '6':
        console.log ('Saturday');
        break;
    case '7':
        console.log ('Sunday');
        break;
    default:
        console.log('the day of week does not exist');
}

// - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.

let a=+prompt('enter a number A');
let b=+prompt('enter a number B');

if (a>b) {
    console.log(a);
}
else if (b>a) {
    console.log(b);
}
else if (b===a){
    console.log('A=B');
}
else {
    console.log('incorrect input')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let z=!!+prompt('enter any X') || 'default'
console.log(z);

