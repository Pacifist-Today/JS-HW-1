// HW 1 prompt, using variable in alert

let name = prompt("Hello, what is your name", '')

alert("Hello, " + name + "! How are you?")

// HW 2 calculator

let calcSum = function (a,b) {
    let result = a + b
    console.log("Результат: " + a + " + " + b + " = " + result)
    return result
}

let calcSub = function (a,b) {
    let result = a - b
    console.log("Результат: " + a + " - " + b + " = " + result)
    return result
}

let calcmul = function (a,b) {
    let result = a * b
    console.log("Результат: " + a + " * " + b + " = " + result)
    return result
}

let calcdiv = function (a,b) {
    let result = a / b
    console.log("Результат: " + a + " / " + b + " = " + result)
    return result
}

let a = +prompt ('Введите первый операнд')
let b = +prompt ('Введите второй операнд')

calcSum(a,b)
calcSub(a,b)
calcmul(a,b)
calcdiv(a,b)