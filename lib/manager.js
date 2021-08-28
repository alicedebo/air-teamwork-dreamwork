const Employee = require("./employee");

//employee plus officeNumber and getRole overrident to return 'Manager'
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}


module.exports = Manager;