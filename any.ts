let hero:string;
// for restriction we have to use that the type checking is done in a better way
function myHero(){
    return "Iron Man";
}
// any is not any data type but it is a marker, and we have to avoid them for using any in our code.......
hero = myHero();
console.log(hero);
export {};