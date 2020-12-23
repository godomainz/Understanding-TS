export {}
let userInput: unknown;
let userName:string;

userInput = 5;
userInput = "Akila";

if (typeof userInput === "string"){
    userName = userInput;
}

function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code};
}

const result = generateError("An Error occured",500);
console.log(result);