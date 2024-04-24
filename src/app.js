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
var add = function (a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
};
var printOutput = function (output) {
    return console.log(output);
};
var button = document.querySelector("button");
if (button) {
    button.addEventListener("click", function (event) { return console.log(event); });
}
printOutput(add(5));
var hobbies = ["sports", "cooking"];
var activeHobbies = ["Gaming"];
console.log(__assign(__assign({}, hobbies), { activeHobbies: activeHobbies }));
