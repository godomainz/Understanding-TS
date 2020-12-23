export {};
const hobbies = ["Sports","Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(...hobbies);
console.log(activeHobbies);

const person = {name: "Akila", age: 30}

const copiedPerson = {...person};

console.log(copiedPerson);
console.log({...copiedPerson});
console.log({...copiedPerson, age:31});

const add = (...numbers:number[]) => {
    return numbers.reduce((curResult,curValue)=>{
        return curResult + curValue;
    },0);
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);