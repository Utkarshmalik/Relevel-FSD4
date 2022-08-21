
// //synatax sugar

class Shape{

    constructor(name,sides,sideLength){
        this.name=name;
        this.sides=sides;
        this.sideLength=sideLength;
    }

    calcParameter(){
        console.log(this.sides * this.sideLength);
    }
}

const square = new Shape("square",4,20);
const triangle=new Shape("traingle",3,42);



function Shape(name,sides,sideLength){  
    this.name=name;
    this.sides=sides;
    this.sideLength=sideLength;
    
}

Shape.prototype.calcPerimeter=function(){
    return this.sides * this.sideLength;
}



//  const square = new Shape("square",4,20);
//  const triangle=new Shape("traingle",3,42);

//  console.log(square);
// console.log(square.calcPerimeter());
// console.log(triangle);

