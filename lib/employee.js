//properties and methods
//name, id, email, getName(), getId(), getEmail() and
//getRole() that returns employee

class Employee {
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name; 
    }
    getId() {
        return this.id; 
    }
    getEmail() {
        return this.email; 
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;