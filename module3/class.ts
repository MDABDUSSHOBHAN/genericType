
//  class in OOP
// class Animal {

//     name:string;
//     species:string;
//     sound: string;
//     // constructor(name:string, species:string,sound:string){
//     constructor(name:string,species:string,sound:string) {

//         this.name = name;
//         this.sound = sound;
//         this.species = species;       
//     }
// }

class Animal {

    name:string;
    species:string;
    sound:string;
    constructor(name:string,species:string, sound:string ){

        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makesound(){

        console.log(`The ${this.name} says ${this.sound}`);
    }
}



const dog = new Animal('dog','XXXXX','ghew ghew');
const cat = new Animal("Cat","xxxxx","Mew mew");
dog.makesound();
cat.makesound();








