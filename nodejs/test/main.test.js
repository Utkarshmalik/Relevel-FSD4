const calculateResult = require("../main");
const calculator = require("../calculator");

jest.mock("../calculator");

describe("Testing practice",()=>{


    test("functions",()=>{

        const addMock = jest.spyOn(calculator, "add");
        addMock.mockImplementation((a,b) => 4);

        const multiplyMock = jest.spyOn(calculator, "multiply");
        multiplyMock.mockImplementation((a,b) => 5);

        const subtractionMock = jest.spyOn(calculator, "subtract");
        subtractionMock.mockImplementation((a,b) => 6);


        expect(calculateResult(3,4)).toBe(20);

    })

})