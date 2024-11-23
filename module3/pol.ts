

{
// polymorphisom


// polymorphisom akoi class a diffrent rup...

class Person {

    getSleep(){

        console.log(`I am sleeping for 8 hours per day`);
    }
}
class Student extends Person {

    getSleep() {
        console.log(`I am sleeping for 7 hours per day`);
    }
}
class Devloper extends Person {

    getSleep() {
        console.log(`I am sleeping for 6 hour per day`);
    }
}
//This is for function calling method .......

// const getSleepingHours = (param:Person)=> {

//     param.getSleep();
// }

// for display
const getSleepingHours = (param:Person) =>{
 //student.getSleep()

    param.getSleep();

}

// create instance of person calss ...............
const Person1 = new Person();
const person2 = new Student();
const person3 = new Devloper();

// function calling in polymorphiom.........
getSleepingHours(Person1);
getSleepingHours(person2);
getSleepingHours(person3);

}


//  getArea

class Shape {

    getArea() : number {
        return 0;
    }
}

class Circle extends Shape{

    
radius :number;

constructor(radius:number){
    super();
    this.radius = radius


}

   
getArea() : number {
   return  Math.PI* this.radius* this.radius
}
}


// Ractangle

class Ractangle extends Shape{

    
    height :number;
    width : number;
    
    constructor(height:number, width:number){
        super();
        this.height = height;
        this.width = width;
    }
    
    
    getArea() : number {
       return  this.height * this.width;
    }
    }
    const getShapeArea = (param: Shape) =>{
        console.log(param.getArea())
    }
    
    const shape1 = new Shape();
    const sheap2 = new Circle(10);
    const sheap3 = new Ractangle(10,20);
getShapeArea(shape1);
getShapeArea(sheap2);

getShapeArea(sheap3);


