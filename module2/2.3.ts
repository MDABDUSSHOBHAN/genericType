// generic type of typescript 


{
type GenericArray<T> = Array<T>;



    const rollNumber:GenericArray<number> = [1,2,3,4,5,6];

    const mentors: GenericArray<string> = ['Mr. X','Mr. Y'];

    const boolArray:GenericArray<boolean> = [true,false,true];

}

// generic interfce 


interface Devloper<T> {

    name:string,
    computer:{
        brand:string;
        model:string;
        releaseYear:number;
    }
    smartWatch:T

}


const poorDevloper: Devloper<{

    brand:string;
    model:string;
    display:string;
}> ={

    name:'abdus shobhan',
    computer:{
        brand:'ASUS',
        model: 'X-234',
        releaseYear: 2013,
    },
    smartWatch:{
        brand:'Emilab',
        model:'kw56',
        display:'OLED',

    }
}


const richDevloper: Devloper<> ={

    name:'FR Rahman',
    computer:{
        brand:'HP',
        model: 'V-3234',
        releaseYear: 2023,
    },
    smartWatch:{
        brand:'Apple',
        model:'kw56',
        display:'New',

    }
}



// Here is emplement function wiht generic Type......

{

    const createArray = (param:string) : string[] =>{
        return [param]
    }


   const createArrayWithGeneric = <T>(param: T) :T[] =>{

          return [param];
   }

    const res1 = createArray('Md Abdus Shobhan');
    const rest2 = createArrayWithGeneric(1222);

const resGenericobj = createArrayWithGeneric<{
    id:number,
    name:string,
}>({

    id:22,
    name:'Mr.X',
})


const createArrayWithGeneric2 = <T>(params:T):T[] =>{

    return[params]



}

// const createArray = (param:string) : string[] =>{
//     return [param]
// }
const addCourseToStudent = <T>(student:T) =>{

    const course = "Next Level Web Devlopment";

    return {

        ... student,
        course,
    }
};


const student1= addCourseToStudent({
    name:"Mr.X",
    email:"X@gmail.com",
    devType:"NFWV",
})
}