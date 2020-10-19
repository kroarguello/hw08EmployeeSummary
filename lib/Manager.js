// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, phonenumber){
    super(id, name, email, role); 
    this.phonenumber = phonenumber;
    }

    getPhonenumber(){
        return this.phonenumber;
    }
}

module.exports = Manager;