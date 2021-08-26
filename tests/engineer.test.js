const engineer = require('../lib/engineer');

describe("engineer", () => {
    test("if correctly entered parameters, get a engineer", () => {
        const ali = new engineer("ali", "555555", "ali@gmail.com", "alicdebo");
        console.log(ali);
    });
});