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

const add = (a: number, b: number) => {
    return a + b;
};

// console.log(add(1, 2));

const printOutput: (a: number | string) => void = (output) =>
    console.log(output);

const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
