interface Vehicle1 {

    startEngine():void;
    stopEngine():void;
    move(): void;

    // this is a abstract method of calss abstract class 


}
// now i can implements this method of three function()

class Car implements Vehicle1 {

    startEngine(): void {
        console.log('I am starting Car Enginn');
    }

    stopEngine(): void {
        console.log(' I am stopping car Enginn');
    }
    move(): void {
        console.log("I am moving Enginn");
    }
    
}
const n = new Car();

n.move()
n.startEngine()
n.stopEngine()


// abstract class use kore abstraction method implementaion.....