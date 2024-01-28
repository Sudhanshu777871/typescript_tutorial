"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass(name, email, phone) {
        this.id = "sudhanshu29";
        this.salary = 100000;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.salary = this.salary;
    }
    return myClass;
}());
var makeObj = new myClass("Sudhanshu", "ksudhanshu394@gmail.com", 8115830551);
for (var x in makeObj) {
    console.log(myClass[x]);
}
