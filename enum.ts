enum myFirstEnum{
    pending="undefined",
    fullFilled="result",
    reject="error"
}

const valFullFilled = myFirstEnum.fullFilled;
console.log(valFullFilled);
export {};