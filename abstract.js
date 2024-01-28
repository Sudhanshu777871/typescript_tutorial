"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractParentClass = /** @class */ (function () {
    function abstractParentClass(name, address, phone, id) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.id = id;
    }
    abstractParentClass.prototype.showId = function (id) {
        return id;
    };
    return abstractParentClass;
}());
// code for making a class to inherit them....
var childClass = /** @class */ (function (_super) {
    __extends(childClass, _super);
    function childClass(name, address, phone, id) {
        var _this = _super.call(this, name, address, phone, id) || this;
        _this.name = name;
        _this.address = address;
        _this.phone = phone;
        _this.id = id;
        return _this;
    }
    childClass.prototype.showData = function () {
        console.log("This Is Abstract Call Method...");
    };
    return childClass;
}(abstractParentClass));
// code for making an object
var myObj = new childClass("Sudhanshu Kumar", "Lucknow", 8115830551, 29);
myObj.showData()
console.log(myObj.showId(29)) 
