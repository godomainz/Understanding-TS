export {};
class Department {
    private employees: string[] = [];

    constructor(private id:string, public name:string){
    }

    describe(){
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("1","Accounting");

accounting.addEmployee("Akila");
accounting.addEmployee("Nimal");
accounting.describe();
accounting.printEmployeeInformation();

