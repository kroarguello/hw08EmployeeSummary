// TODO: Write code to define and export the Employee class
class Employee { 
    constructor(name, id, email, role, extraInfo){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;

    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getId(){
        return this.id;
    }
 

    getRole(){
        return this.role;
    }

}



module.exports = Employee;