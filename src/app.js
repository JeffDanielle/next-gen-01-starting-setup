// const userName = "Jeff";
// const cannot be reinstantiated
// userName = 'Jeff';
// let age = 24;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// age = 25;
// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }
// if (age > 20) {
//     var isOld = true;
// }
// console.log(isOld);
// default value for a parameter
// const add = (a: number, b: number = 5) => {
//     return a + b;
// };
// const add = (a: number, b: number = 5) => {
//     return a + b;
// };
// const printOutput: (a: number | string) => void = (output) =>
//     console.log(output);
// const button = document.querySelector("button");
// if (button) {
//     button.addEventListener("click", (event) => console.log(event));
// }
// printOutput(add(5));
var hobbies = ["sports", "cooking"];
var activeHobbies = ["Gaming"];
// console.log([...hobbies, activeHobbies]);
var person = {
    firstName: "Jeff",
    age: 24,
};
// Spread operator fetch key value pairs
var copiedPerson = __assign({}, person);
// Rest accepts any number of parameters
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
};
var addedNumbers = add(2, 5, 6, 7, 8, 9);
console.log(addedNumbers);
// Array destructuring
var h1 = hobbies[0], h2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, h1, h2);
// Object destructuring
var firstName = person.firstName, age = person.age;
console.log(firstName, age);
