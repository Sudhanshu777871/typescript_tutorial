"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myFirstEnum;
(function (myFirstEnum) {
    myFirstEnum["pending"] = "undefined";
    myFirstEnum["fullFilled"] = "result";
    myFirstEnum["reject"] = "error";
})(myFirstEnum || (myFirstEnum = {}));
var valFullFilled = myFirstEnum.fullFilled;
console.log(valFullFilled);
