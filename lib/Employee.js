// TODO: Write code to define and export the Employee class
class Employee { 
    constructor(name, id, email){
        this.id = id;
        this.name = name;
        this.email = email;

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
        return "Employee";
    }

}



module.exports = Employee;