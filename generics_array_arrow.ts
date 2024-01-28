function arrayGeneric<Type>(data: Type[]): Type {
    return data[2];
}// using generics in normal function of array

const arrowArrGenerics = <Type>(data: Type[]): Type => {
    return data[0];
} // generics in arrow function 

const myArr = [12, 23, 34, 45, 56, 67, 78];
const result = arrayGeneric(myArr);

console.log(result);

const arrow_fun_result = arrayGeneric(myArr);
console.log(arrow_fun_result);

export { };