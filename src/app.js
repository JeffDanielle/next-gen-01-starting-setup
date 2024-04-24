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
var add = function (a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
};
// console.log(add(1, 2));
var printOutput = function (output) {
    return console.log(output);
};
var button = document.querySelector("button");
if (button) {
    button.addEventListener("click", function (event) { return console.log(event); });
}
printOutput(add(5));
