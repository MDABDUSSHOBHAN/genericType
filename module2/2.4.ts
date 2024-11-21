// promise


const createpromise = () =>{

    return new Promise<string>((resolve,reject) =>{

        const data:string = "somthing";

        if(data){

            resolve(data);
        }
        else{

            reject('fail to load data');

        }
    })
}

// calling create promise function 


const showData = async () =>{

    const data = await createpromise();

    console.log(data);
}

showData();



