// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, extraInfo){
    super(id, name, email, role); 
    this.github = extraInfo;
    }

    getGithub (){
        
        return this.github;
    }

}

module.exports = Engineer;