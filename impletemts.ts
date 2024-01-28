interface myInterface {
    showData(): void;
}

class myClass implements myInterface {
    public name:string;
    public constructor(name: string) {
       this.name = name;
    }
    showData(): void {
        console.log(this.name)
    }
}

// code for making an object
const myObj = new myClass("Sudhanshu Kumar");
myObj.showData();

export { };