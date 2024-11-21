// maped 



const arrayOfNumber:number[] = [1,3,4,5,7];


const arrayOfString : string[] = arrayOfNumber.map(number => number.toString())


console.log(arrayOfString);


type AreaNumber = {

    height: number,
    width:number,
}

type AreaString = {

    [key in keyof AreaNumber] :string;
}


