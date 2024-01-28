"use strict";
// UNION IS USED FOR WHEN WE DO NOT KNOW WHAT DATATYPE COME AND WHEN MULTIPPLE DATATYPE WANTS IT IS DENOTED BY (|)
Object.defineProperty(exports, "__esModule", { value: true });
function validAge(name, age) {
    if (age == 18) {
        return true;
    }
    else {
        return "".concat(name, " Not Valid Age");
    }
}
validAge("Sudhanshu", 18);
