function myUnknownFun(salary: unknown): unknown {
    if (typeof salary == 'string') {
        return `Salary : ${salary}`;
    }
    else {
        return salary;
    }
}

const result = myUnknownFun("Sudhanshu");
console.log(result)
export { };