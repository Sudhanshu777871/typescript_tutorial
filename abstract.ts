abstract class abstractParentClass {
    constructor(public name: string, public address: string, public phone: number, public id: number) {

    }


    abstract showData(): void;
    showId(id): number {
        return id;
    }
}


// code for making a class to inherit them....
class childClass extends abstractParentClass {
    constructor(public name: string, public address: string, public phone: number, public id: number) {
        super(name, address, phone, id);
    }

    showData(): void {
        console.log("This Is Abstract Call Method...");
    }
}

// code for making an object

const myObj = new childClass("Sudhanshu Kumar", "Lucknow", 8115830551, 29);
myObj.showData()
myObj.showId(29);

export {};