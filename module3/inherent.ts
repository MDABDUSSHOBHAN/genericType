// oop - inheritence 

class Parent {

    name:string;
    age:number;
    address:string;



    constructor(name:string,age:number,address:string){

        this.name= name;
        this.address = address;
        this.age =  age;
    }

    getSleep(numOfHour:number){

        console.log(`${this.name} will sleep for ${numOfHour}`);
    }






}










class Student extends Parent{

    // name:string;
    // age:number;
    // address:string;



    constructor(name:string,age:number,address:string){

        // this.name= name;
        // this.address = address;
        // this.age =  age;

        super('abdus_shobhan',20,'Thakurgaon')
    }

    getSleep(numOfHour:number){

        console.log(`${this.name} will sleep for ${numOfHour}`);
    }
}


// this is for teacher class 

// oop - inheritence 

class Theacher {

    name:string;
    age:number;
    address:string;
    designation:string;



    constructor(name:string,age:number,address:string,designation:string){

        this.name= name;
        this.address = address;
        this.age =  age;
        this.designation = designation;


    }

    getSleep(numOfHour:number){

        console.log(`${this.name} will sleep for ${numOfHour}`);
    }

    takeClass(numOfClass:number){
        console.log(`${this.name} will take ${numOfClass}`);
    }
}







