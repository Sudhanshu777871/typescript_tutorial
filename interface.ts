// INTERFACE IS ALSO SIMILAR TO "TPPES" IN TYPESCRIT. USING THIS WE COULD MAKE CUSTOME DATATYPE SIMMILAR TO "TYPE". WE TALK ABOUT DIFFERNCES LATER
 
interface users {
    name: String,
    email: String,
    phone: Number,
    completeDetails(age: number): string
}

let myPersonalInfo: users = {
    name: "Sudhanshu",
    email: "ksudhanshu394@gmail.com",
    phone: 8115830551,
    completeDetails: function (age) {
        return `Name : ${this.name} Email : ${this.email} Phone : ${this.phone} Age : ${age}`;
    }
}

export {}