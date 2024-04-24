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

const add = (a: number, b: number = 5) => {
    return a + b;
};

const printOutput: (a: number | string) => void = (output) =>
    console.log(output);

const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5));
