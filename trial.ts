const myArr: (number | string)[] = [12, 23, 34, 45, 55];

myArr.push(90);
myArr.push("Sudhanshu");
const iterateItem: number|string = myArr[4];
for(let x  of myArr){
    console.log(x)
}
export { }