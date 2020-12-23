export {};
class Department {
    name: string;

    constructor(n:string){
        this.name = n;
    }

    // describe(){
    //     console.log("Department: "+this.name);
    // }
    describe(this:Department){
        console.log("Department: "+this.name);
    }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();

const accountingCopy = { describe: accounting.describe };
console.log(accountingCopy);
// accountingCopy.describe();

const accountingCopy2 = { name: "DUMMY", describe: accounting.describe };
console.log(accountingCopy2);
accountingCopy2.describe();