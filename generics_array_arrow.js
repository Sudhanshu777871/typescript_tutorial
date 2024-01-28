"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayGeneric(data) {
    return data[2];
} // using generics in normal function of array
var arrowArrGenerics = function (data) {
    return data[0];
}; // generics in arrow function 
var myArr = [12, 23, 34, 45, 56, 67, 78];
var result = arrayGeneric(myArr);
console.log(result);
var arrow_fun_result = arrayGeneric(myArr);
console.log(arrow_fun_result);
