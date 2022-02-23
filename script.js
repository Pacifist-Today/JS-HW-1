// HW 1 prompt, using variable in alert

let name = prompt("Hello, what is your name", '');

alert("Hello, " + name + "! How are you?");

// HW 2 calculator

let calcSum = function (a,b) {
    let result = a + b;
    console.log("Результат: " + a + " + " + b + " = " + result);
    return result;
}

let calcSub = function (a,b) {
    let result = a - b;
    console.log("Результат: " + a + " - " + b + " = " + result);
    return result;
}

let calcmul = function (a,b) {
    let result = a * b;
    console.log("Результат: " + a + " * " + b + " = " + result);
    return result;
}

let calcdiv = function (a,b) {
    let result = a / b;
    console.log("Результат: " + a + " / " + b + " = " + result);
    return result;
}

let a = +prompt ('Введите первый операнд');
let b = +prompt ('Введите второй операнд');

calcSum(a,b);
calcSub(a,b);
calcmul(a,b);
calcdiv(a,b);

//Task #1

let name = 'John';

let admin = name;

alert(admin); // будет John



//Task #2

//Создайте переменную для названия нашей планеты. Как вы ее назовете?
// 1) ourPlanet, Earth, liveablePlanet
//Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
// 2) user, customer, guest



//Task #3

let ab = '10';

let cd = 10;

let result = a + b;

console.log(result); // result = "1010"

// При суммировании Number с String, первый преобразуется в String и произойдёт их складывание как строчек словно слова идущие друг за другом, то есть "10"+ 10 = 1010