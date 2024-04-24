// const userName = "Jeff";
// const cannot be reinstantiated
// userName = 'Jeff';
// let age = 24;

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

const hobbies = ["sports", "cooking"];
const activeHobbies = ["Gaming"];

// console.log([...hobbies, activeHobbies]);

const person = {
    firstName: "Jeff",
    age: 24,
};

// Spread operator fetch key value pairs
const copiedPerson = {...person};

// Rest accepts any number of parameters
const add = (...numbers: number[]) => {
    return numbers.reduce((acc, cur) => acc + cur, 0);
};

const addedNumbers = add(2, 5, 6, 7, 8, 9);
console.log(addedNumbers);

// Array destructuring
const [h1, h2, ...remainingHobbies] = hobbies;
console.log(hobbies, h1, h2);

// Object destructuring
const {firstName, age} = person;
console.log(firstName, age);
