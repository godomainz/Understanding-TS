export {};
const hobbies = ["Sports","Cooking","Cricket","Chess"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

// console.log(...hobbies);
// console.log(activeHobbies);

const person = {name: "Akila", age: 30}

const copiedPerson = {...person};

// console.log(copiedPerson);
// console.log({...copiedPerson});
// console.log({...copiedPerson, age:31});

const add = (...numbers:number[]) => {
    return numbers.reduce((curResult,curValue)=>{
        return curResult + curValue;
    },0);
}

const addedNumbers = add(5, 10, 2, 3.7);
// console.log(addedNumbers);

const [hobby1, hobby2, ...remaininghobbies] = hobbies;
console.log(hobby1);
console.log(hobby2)
console.log(remaininghobbies)

const {name:userName,age} = person;
console.log(userName,age);