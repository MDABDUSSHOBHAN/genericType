// instanceof guard
{
    class Animal {

        name:string;
        species:string;
    
    
        constructor(name:string,species:string) {
    
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log('I am making sound');
        }
    
    
    }
    // This is sub class of Animal Base class ....
class Dog extends Animal {


    constructor(name:string,species:string){

        super(name,species);
    }
    makeBark(){
        console.log("I am barking");
    }
}

// this is for anoter calss of cat 

class Cat extends Animal {


    constructor(name:string,species:string){

        super(name,species);
    }
    makeMeaw(){
        console.log("I am mewaing");

    }
}

// object innitialize 


const getAnimal = (animal:Animal) =>{

    if(animal instanceof Dog){

        animal.makeBark()
        

    }
    else if (animal instanceof Cat){
        animal.makeMeaw();
    }

 //TS can not dected what type should i ditect...




}



const dog = new Dog("Dog Bhi","dog");
const cat = new Cat("Cat Bhai","cat");





}
