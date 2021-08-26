const intern = require('../lib/intern');

describe("intern", () => {
    test("if correctly entered parameters, get a intern", () => {
        const stu = new intern("stu", "401", "stu@gmail.com", "high school");
        console.log(stu);
    });
});