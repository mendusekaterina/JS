// 1
let arr = [];
arr[arr.length] = 100;
arr[arr.length] = 200;
arr[arr.length] = true;
arr[arr.length] = false;
arr[arr.length] = 'numbers';
arr[arr.length] = [1, 2, 3];
arr[arr.length] = 7;
arr[arr.length] = 8;
arr[arr.length] = 'nine';
arr[arr.length] = 'ten';
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// 2
let book1 = {
    title: 'Bible',
    pageCount: 923 + 293,
    genre: 'scripture'
};
console.log(book1);
let book2 = {
    title: 'Atlantean straightened his shoulders',
    pageCount: 392,
    genre: 'novel'
};
console.log(book2);
let book3 = {
    title: 'City of girls',
    pageCount: 464,
    genre: 'novel'
};
console.log(book3);

let author1 = ['God', 'infinity'];
let author2 = ['Ayn Rand', 77];
let author3 = ['Elizabeth Gilbert', 53];

book1.authors = author1;
book2.authors = author2;
book3.authors = author3;
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book1.authors[0]);
//3
let users = [
    {name: 'olya', username: 'olka', password: 'ol62'},
    {name: 'oleg', username: 'olegek', password: 'oleg38'},
    {name: 'nina', username: 'ninel', password: 'nin42'},
    {name: 'katya', username: 'kat', password: 'ka00'},
    {name: 'alex', username: 'sasha', password: 'al54'},
    {name: 'oskar', username: 'osya', password: 'os32'},
    {name: 'vova', username: 'vovchik', password: 'vov84'},
    {name: 'kolya', username: 'kolyan', password: 'kol77'},
    {name: 'maria', username: 'masha', password: 'mash27'},
    {name: 'elena', username: 'lena', password: 'len26'},
]
console.log(users.length);
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9].password);


