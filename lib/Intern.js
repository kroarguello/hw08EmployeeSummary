// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class intern extends Employee {
    constructor(name, id, email, role, extraInfo){
    super(id, name, email, role); 
    this.school = extraInfo;
    }

    getSchool(){
        return this.school;
    }

    
}

//module.exports = Intern;