// Employee methods and github (github username), getGithub(), getRole() overriden to return engineer
const Employee = require("./employee");

//employee plus officeNumber and getRole overrident to return 'Manager'
class Engineer extends Employee {
    constructor(name, id, email, engineerGithub) {
        super(name, id, email);
        this.engineerGithub = engineerGithub;
    }
    getengineerGithub() {
        return this.engineerGithub;
    }
}

module.exports = Engineer;