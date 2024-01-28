"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myFun(name) {
    return name;
}
// or we can also write in short form (generics is basically used for dynamic dataType convirison)
myFun("Sudhnashu");
function shortFormGeneric(id) {
    return id;
}
var x = shortFormGeneric(29);
console.log(x);
