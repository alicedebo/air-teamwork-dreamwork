const employee = require('../lib/employee');

describe("employee", () => {
    test("if correctly entered parameters, get an employee", () => {
        const allison = new employee("allison", "123456", "alkjdsalk@gmail.com");
        console.log(allison);
    });

});