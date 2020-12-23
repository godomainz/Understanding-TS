// const person: {name:string, age:number} = {
//     name: "Akila",
//     age: 30
// }
// const person: {name:string, age:number,hobbies:string[],role:[number,string]} = {
//     name: "Akila",
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2,"author"]
// }

const  ADMIN = 0;
// enum Role {
//     ADMIN = 5, READ_ONLY, AUTHOR
// }
// enum Role {
//     ADMIN = 5, READ_ONLY = 100, AUTHOR = 120
// }
enum Role {
    ADMIN = "ADMIN", READ_ONLY = "READ_ONLY", AUTHOR = "AUTHOR"
}

const person = {
    name: "Akila",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

console.log(person.role);
console.log(Role.READ_ONLY);
if (person.role === Role.ADMIN){
    console.log("is admin");
}