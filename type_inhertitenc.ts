interface commonDetails{
    name:string,
    email:string,
    phone:number
}

interface commonDetails{
    salary:number,
    compnayName:string
}

// adding propeties in interface

const commonDetailsObj:commonDetails = {
name:"Sudhanshu",
email:"ksudhanshu394@gmail.com",
phone:8115830551,
salary:8999999999999,
compnayName:"edusmatyly"
}
console.log(commonDetailsObj.name)

// inhertiance property 

interface admin extends commonDetails{
    gstNumber:number,
    officeHeadquater:string
}

const addminDetails:admin={
    name:"Sudhanshu Kumar",
    email:"edusmartly29@gmail.com",
    phone:8115830551,
    salary:90000000000000,
    compnayName:"edusmartly",
    gstNumber:89999,
    officeHeadquater:"Baguluru"
}
console.log(addminDetails)
export {}