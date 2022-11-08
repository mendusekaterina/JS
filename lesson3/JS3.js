let x = +prompt('enter the X');
if (x !== 0) {
    console.log('correct');
} else {
    console.log('incorrect');
}


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
        console.log('the day does not exist');
}

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

let z=!!+prompt('enter any X') || 'default'
console.log(z);

