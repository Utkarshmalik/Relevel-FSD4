const mathOperations = require("./calculator");


describe("Calculator tests",()=>{

    test("addition of two numbers",()=>{
        var result=mathOperations.add(1,2);
        expect(result).toBe(3);
    })

    test("subtraction of two numbers",()=>{
        var result=mathOperations.subtract(3,5);
        expect(result).toBe(-2);
    })

    test("mulltiplication of two numbers",()=>{
        var result= mathOperations.multiply(10,4);
        expect(result).toBe(40);
    })

    test("division of two numbers",()=>{
        var result = mathOperations.divide(45,5);
        expect(result).toBe(9);
    })
    
    test("division of two numbers when den is zero",()=>{
        var result = mathOperations.divide(45,0);
        expect(result).toBe(Infinity);
    })

    test("division of two numbers when num is zero",()=>{
        var result = mathOperations.divide(0,5);
        expect(result).toBe(0);
    })

    test("division of two numbers when num and den are zero",()=>{
        var result = mathOperations.divide(0,0);
        expect(result).toBe(NaN);
    })

})