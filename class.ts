class myClass {
    readonly id: string = "sudhanshu29";
    private salary: number = 100000;
    name: string;
    email: string;
    phone: number
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;

        this.salary = this.salary;
    }
}

const makeObj = new myClass("Sudhanshu", "ksudhanshu394@gmail.com", 8115830551);


for (let x in makeObj) {
    console.log(myClass[x])
}

export { };