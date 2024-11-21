


{


    // Here will emplement to interface 
// this is declar using typescript.............
    type user ={

        name:string,
        age:number,
    }
const user2:user={

    name:'shobhan',
    age:23,
}
// this code will now write to using interface ....

interface user2 {

    name:string,
    age:number,


    
}

// type used kore interset function Call ---->  interset emplement ....>

type userWithRoel = user & {roll:string}

const data :userWithRoel = {

    name:"shobhan",
    age:100,
    roll :"Manager",
}

// interfce


interface UserWithRole2 extends user2{


    roll :string,
 

}

// this is emplement of interfce code ....

const user7 : UserWithRole2 ={


    name:'shobahnd',
    age:333,
    roll:'Guest',
}



type rollNumber = number



// arry declearation usign typescript....

type Roll1 = number[];

const rollNumber:Roll1 = [1,2,3,4,5];

console.log(rollNumber);


// interface 

interface Roll2 {

    [index:number]:number
}
// array decleration

const rollNumber1:Roll2 =[2,3,4];
console.log(rollNumber1);






    // The end of interface of this code 
}