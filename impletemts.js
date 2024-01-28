"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass(name) {
        this.name = name;
    }
    myClass.prototype.showData = function () {
        console.log(this.name);
    };
    return myClass;
}());
// code for making an object
var myObj = new myClass("Sudhanshu Kumar");
myObj.showData();
