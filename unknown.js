"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myUnknownFun(salary) {
    if (typeof salary == 'string') {
        return "Salary : ".concat(salary);
    }
    else {
        return salary;
    }
}
var result = myUnknownFun("Sudhanshu");
console.log(result);
