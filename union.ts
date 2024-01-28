// UNION IS USED FOR WHEN WE DO NOT KNOW WHAT DATATYPE COME AND WHEN MULTIPPLE DATATYPE WANTS IT IS DENOTED BY (|)

function validAge(name: String, age: Number): boolean | String { // here we can return boolean value ot string value
    if (age == 18) {
        return true;
    }
    else {
        return `${name} Not Valid Age`;
    }
}


validAge("Sudhanshu", 18);

const myDetails: (Number| String)[] = ["Sudhanshu Kuamr",887];

console.log(myDetails)
export { };