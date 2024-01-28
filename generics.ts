function myFun<Type>(name:Type):Type{
return name;
}


// or we can also write in short form (generics is basically used for dynamic dataType convirison)
myFun("Sudhnashu");

function shortFormGeneric<T>(id:T):T{
    return id;
}

const x = shortFormGeneric(29);
console.log(x);
export {};