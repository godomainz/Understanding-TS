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