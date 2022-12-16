//
//
// - є масив simpsons
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'>
// та наповнити його данними з об'єкту.
//
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його
// інформацією з цього об'єкту
//
//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв' +
            'мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві' +
            'молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі' +
            'своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони».' +
            'Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний.' +
            'Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) —' +
            'постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит' +
            'зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом' +
            'универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску.' +
            'Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме,' +
            'детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов.' +
            'Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность' +
            'не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир.' +
            'Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны».' +
            'Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим' +
            'умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала' +
            '«Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night' +
            '(англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом,' +
            'пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в' +
            'шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют' +
            'произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.classList.add('member');
    div.innerHTML = `<h1>${simpson.name} ${simpson.surname}</h1>
Вік: ${simpson.age}<p>Опис героя: ${simpson.info}</p>
<img src="${simpson.photo}">`
    document.body.appendChild(div);
}
//
// Цикл в циклі
// - Є масив coursesArray
//
// Створити для кожного елементу масиву свій блок, блок розділити
// блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'git',
            'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'sass']
    }
];
for (const course of coursesArray) {
    let block = document.createElement('div');
    block.setAttribute('class', 'coursestyle');
    block.innerHTML = `<div class="blockstyle">${course.title}</div>
<div class="twosmall"><div class="small">${course.monthDuration}</div>
<div class="small">${course.hourDuration}</div></div>`
    document.body.appendChild(block);
    let ul = document.createElement('ul');
    block.appendChild(ul);
    for (const module of course.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
}
//
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту,
// розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
let div = document.createElement('div');
div.innerHTML = 'BLOCK';
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'darkseagreen';
div.style.color = 'darkgreen';
div.style.fontSize = '30px'
div.style.border = '2px solid black';
div.style.margin = '2px';
div.style.textAlign = 'center';
document.body.appendChild(div);
document.body.appendChild(div.cloneNode(true));
//
//
// - Є масив coursesAndDurationArray
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести
// інформацію про title та monthDuration
// Завдання робити через цикли.
//
for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${element.title} --- ${element.monthDuration}`;
    document.body.appendChild(div);
}
//
// За допомоги скріпта для кожного елементу масиву
// зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration
// елементу.
//     Завдання робити через цикли.
// -----------
for (const item of coursesAndDurationArray) {
    let blockcourses = document.createElement('div');
    blockcourses.classList.add('item');
    blockcourses.innerHTML = `<h1 class="heading">${item.title}</h1><p>${item.monthDuration}</p>`;
    document.body.append(blockcourses);
}
// - Створити довільний елемент з id = text.  Використовуючи
// JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".
//
let h2 = document.getElementById('text');
console.log(h2);
let button = document.getElementsByTagName('button')[0];
console.log(button);
button.onclick = function () {
    h2.innerText = ''
    // h2.style.display='none';
}
//
// - створити інпут який приймає вік людини та кнопку
// яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
let input = document.createElement('input');
input.setAttribute('type', 'number');
let butt = document.createElement('button');
butt.innerText = 'send';
document.body.append(input, butt);
butt.onclick = function () {
    input.onclick;
    if (input.value < 18) {
        alert('You are too yong!')
    }
    if (input.value >= 18) {
        alert('You are old enough!')
    }
}
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і
//     формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
let input1 = document.createElement('input');//number of rows
input.setAttribute('type', 'number');
let input2 = document.createElement('input');//number of columns
input.setAttribute('type', 'number');
let input3 = document.createElement('input');//cell contents
input.setAttribute('type', 'text');
let buton = document.createElement('button');
buton.innerText = 'build a table';
document.body.append(input1, input2, input3, buton);
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.append(thead, tbody);
document.body.append(table);
buton.onclick=function (){
    input1.oninput;
    input2.oninput;
    input3.oninput;
for (let i = 1; i <= input1.value;i++) {
    let row=document.createElement('tr');
    for (let j=1; j<=input2.value;j++){
        let data_row=document.createElement('td');
        data_row.innerHTML=input3.value;
        row.append(data_row)}
    thead.append(row);
    tbody.append(row);}}
