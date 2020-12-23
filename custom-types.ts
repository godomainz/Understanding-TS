export {};

type Combinable = number | string ;
type ConversionDescriptor = "as-number"|"as-text";

function combine(input1:Combinable, input2:Combinable, resultType: ConversionDescriptor) {
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultType === "as-number"){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30,26,"as-number");
console.log(combinedAges)

const combinedStringAges = combine("30","26","as-number");
console.log(combinedStringAges)

const combinedNemes = combine("Akila ","Mendis","as-text");
console.log(combinedNemes)