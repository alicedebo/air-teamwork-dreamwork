// employee plus school, getSchool(), getRole() overriden by 'Intern'
const Employee = require("./employee");

//employee plus officeNumber and getRole overrident to return 'Manager'
class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.internSchool = internSchool;
    }
    getinternSchool() {
        return this.internSchool;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;