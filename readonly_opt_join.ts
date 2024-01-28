type myDetails = {
    readonly id: Number;
    name: String;
    address: String;
    phone?: Number // through question mark the phone property becomes options

}

const data: myDetails = {
    id: 811583,
    name: "Sudhanshu",
    address: "Lucknow",
    phone: 99185649 // this is optionl
}

data.name = "Jannat";
// data.id=99999; can not do beacause it is read only
console.log(data.name)


// LETS MAKE ANOTHER TYPE DATA FOR SEEING THE JOIN
type professionalInfo = {
    work: String,
    salary: String,
    compnyName: String
}


type combineDetails = myDetails & professionalInfo & { offixeJoinDate: String } //  this is joining the all type data

// now using the data
const fullDetails: combineDetails = {
    id:88,
    name: "Sudhanshu Kumar",
    address: "Lucknow",
    phone: 8115830551,
    work: "Software Engineer",
    salary: "1 Cr",
    compnyName: "Paytm",
    offixeJoinDate: "29 Feb 2024"
}


console.log(fullDetails);
export { };