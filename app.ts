// const person: {name:string, age:number} = {
//     name: "Akila",
//     age: 30
// }
const person: {name:string, age:number,hobbies:string[],role:[number,string]} = {
    name: "Akila",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2,"author"]
}

person.role[0]=5
console.log(person.role[0])
person.role.push("admin")
console.log(person.role)