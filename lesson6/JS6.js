//
//
// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
let dovg = (str) => console.log(str.length);
dovg('hello world');
dovg('lorem ipsum');
dovg('javascript is cool');
//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
let vel = (str) => console.log(str.toUpperCase());
vel('hello world');
vel('lorem ipsum');
vel('javascript is cool');
//
// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let mal = (str) => console.log(str.toLowerCase());
mal('HELLO WORLD');
mal('LOREM IPSUM');
mal('JAVASCRIPT IS COOL');

// - Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.length);
let cleanstr = str.trim();
console.log(cleanstr.length);


// - Напишіть функцію stringToarray(str),
// яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str);
// ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let string = 'Ревуть воли як ясла повні'

function stringToarray(str) {
    console.log(str.split(' '));
}

stringToarray(string);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві
// на стрінгові.

let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(array.map(value => value + ''));

// - створити функцію sortNums(direction),
// яка прймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        nums.sort((a, b) => b - a);
    } else {
        console.log('enter correct direction');
    }
}

sortNums(nums, 'descending');
console.log(nums);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю
// більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortmonthDuration = coursesAndDurationArray.sort((a, b)=>(b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray);

let filterMoreThenFive=coursesAndDurationArray.filter(value=>value.monthDuration>5);
console.log(filterMoreThenFive);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let coloda=[
    {color:'black',cardSuit:'spade',value:'2'},
    {color:'black',cardSuit:'spade',value:'3'},
    {color:'black',cardSuit:'spade',value:'4'},
    {color:'black',cardSuit:'spade',value:'5'},
    {color:'black',cardSuit:'spade',value:'6'},
    {color:'black',cardSuit:'spade',value:'7'},
    {color:'black',cardSuit:'spade',value:'8'},
    {color:'black',cardSuit:'spade',value:'9'},
    {color:'black',cardSuit:'spade',value:'10'},
    {color:'black',cardSuit:'spade',value:'jack'},
    {color:'black',cardSuit:'spade',value:'queen'},
    {color:'black',cardSuit:'spade',value:'king'},
    {color:'black',cardSuit:'spade',value:'ace'},
    {color:'black',cardSuit:'clubs',value:'2'},
    {color:'black',cardSuit:'clubs',value:'3'},
    {color:'black',cardSuit:'clubs',value:'4'},
    {color:'black',cardSuit:'clubs',value:'5'},
    {color:'black',cardSuit:'clubs',value:'6'},
    {color:'black',cardSuit:'clubs',value:'7'},
    {color:'black',cardSuit:'clubs',value:'8'},
    {color:'black',cardSuit:'clubs',value:'9'},
    {color:'black',cardSuit:'clubs',value:'10'},
    {color:'black',cardSuit:'clubs',value:'jack'},
    {color:'black',cardSuit:'clubs',value:'queen'},
    {color:'black',cardSuit:'clubs',value:'king'},
    {color:'black',cardSuit:'clubs',value:'ace'},
    {color:'red',cardSuit:'heart',value:'2'},
    {color:'red',cardSuit:'heart',value:'3'},
    {color:'red',cardSuit:'heart',value:'4'},
    {color:'red',cardSuit:'heart',value:'5'},
    {color:'red',cardSuit:'heart',value:'6'},
    {color:'red',cardSuit:'heart',value:'7'},
    {color:'red',cardSuit:'heart',value:'8'},
    {color:'red',cardSuit:'heart',value:'9'},
    {color:'red',cardSuit:'heart',value:'10'},
    {color:'red',cardSuit:'heart',value:'jack'},
    {color:'red',cardSuit:'heart',value:'queen'},
    {color:'red',cardSuit:'heart',value:'king'},
    {color:'red',cardSuit:'heart',value:'ace'},
    {color:'red',cardSuit:'diamond',value:'2'},
    {color:'red',cardSuit:'diamond',value:'3'},
    {color:'red',cardSuit:'diamond',value:'4'},
    {color:'red',cardSuit:'diamond',value:'5'},
    {color:'red',cardSuit:'diamond',value:'6'},
    {color:'red',cardSuit:'diamond',value:'7'},
    {color:'red',cardSuit:'diamond',value:'8'},
    {color:'red',cardSuit:'diamond',value:'9'},
    {color:'red',cardSuit:'diamond',value:'10'},
    {color:'red',cardSuit:'diamond',value:'jack'},
    {color:'red',cardSuit:'diamond',value:'queen'},
    {color:'red',cardSuit:'diamond',value:'king'},
    {color:'red',cardSuit:'diamond',value:'ace'},
];
console.log(coloda.filter(card=>card.color==='black'&&card.cardSuit==='spade'&&card.value==='ace'));
console.log(coloda.filter(card=>card.value==='6'));
console.log(coloda.filter(card=>card.color==='red'));
console.log(coloda.filter(card=>card.cardSuit==='diamond'));
console.log(coloda.filter(card=>(card.cardSuit==='clubs'&&card.value>=9)));
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти
// по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce=coloda.reduce((newarr,card)=>{
    if (card.cardSuit==='spade'){
        newarr.spades.push(card)}
    else  if (card.cardSuit==='diamond'){
        newarr.diamonds.push(card)}
    else if (card.cardSuit==='heart'){
        newarr.hearts.push(card)}
    else if (card.cardSuit==="clubs"){
        newarr.clubses.push(card)
    };
    return newarr;}
,{spades:[],diamonds:[],clubses:[],hearts:[]});
console.log(reduce);