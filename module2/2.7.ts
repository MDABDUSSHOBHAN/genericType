// conditional Type 


type a1 = null
type b1 = undefined

type x = a1 extends null ? true : false ; //conditional type x ar type depend on anoter type


type Sheikh = {

    bike:string,
    car:string,
    ship:string,
    plane:string,
}

type checkVehicle<T> = T extends keyof Sheikh ? true:false;

type hasplane = checkVehicle<"plane">