//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий
// для кожного елементу масиву створює li та додає його
// до блоку .menu
// Завдання робити через цикли.
//
let array = ['Main', 'Products', 'About us', 'Contacts']
let ul=document.getElementsByTagName('ul')[0];
for (const element of array) {
    li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
}