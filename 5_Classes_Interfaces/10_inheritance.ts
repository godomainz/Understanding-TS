export {};
class Department {
    private employees: string[] = [];

    constructor(private readonly id:string, public name:string){
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

class ITDepartment extends Department {

    constructor(id:string, public admins:string[]){
        super(id,"IT Department");
    }

    printAdmins(){
        console.log(this.admins);
    }
}

const accounting = new Department("1","Accounting");

accounting.addEmployee("Akila");
accounting.addEmployee("Nimal");
accounting.describe();
accounting.printEmployeeInformation();

const it = new ITDepartment("2",["Akila", "Shaun"]);
it.describe();
it.printAdmins();
console.log(it);