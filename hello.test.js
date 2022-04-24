const { isExportDeclaration } = require("typescript");
const hello = require("./hello");
describe("My hello", () => {
    test("work", ()=> {
        isExportDeclaration(hello.hello()).toEqual("Hello World");
    });
});