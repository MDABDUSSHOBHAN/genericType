{

    type Alphanew = string | number;

const add = (param1: Alphanew, param2: Alphanew): Alphanew => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;          // Number addition
    } else {
        return param1.toString() + param2.toString(); // String concatenation
    }
};


const result = add(20,4);
console.log(result);




// in gard ......





}
