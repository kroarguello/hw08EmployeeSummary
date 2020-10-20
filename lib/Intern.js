// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class intern extends Employee {
    constructor(id, school){
    super(id, name, email, role); 
    this.school = school;
    }

    getSchool(){
        return this.school;
    }

    
}

//module.exports = Intern;