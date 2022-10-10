const {add,subtract,multiply} = require("./calculator");


function calculateBiggerResult(a,b){

    return   add(a,b)+subtract(a,b)+multiply(a,b)+5;

}

module.exports=calculateBiggerResult;