let anything : any;
anything = " Next Level Web Devlopment";


anything = 33;

(anything as number)

// (anything as string).concat

// const kgToGm =(value:string | number) =>{
//     if(typeof value === 'string'){
//         const convertedValue = parseFloat(value);
//         return convertedValue;       
//     }    
// }

const KgToGm = (value:string |number) : string| number| undefined=>{

    if(value === typeof(String)){
        const convertedValue = parseFloat(value)*1000;

        return convertedValue;
    }
    if(typeof(value)=== "number"){

        return value*1000;


    }
}

// function callign 
// KgToGm('shobhan') as string
KgToGm(100);
const result1 = KgToGm('1000') as string;
console.log(result1)


