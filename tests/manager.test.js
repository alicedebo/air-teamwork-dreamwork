const manager = require('../lib/manager');

describe("manager", () => {
    test("if correctly entered parameters, get a manager", () => {
        const alice = new manager("alice", "654321", "allie@gmail.com", "1111111111");
        console.log(alice);
    });
});