
// spread operator
// destructing
{
    // const poorUser = {


    //     name:"Mr. X",
    
    // }

    const brost1:string[] = ['Mir,','Firoz','Mizan'];
    const bros2: string[] = ['Tanmoy','Nahid','Rahat'];


brost1.push(...bros2);

console.log(brost1)
// 


const mentors1 = {

typescript:"Mezba",
redux:'Mir',
dbms:'Mizan',
    
}

const mentors2 = {

    prisma:"Mezba",
    redux:'Mir',
    cloud:'Mizan',
        
    }

    const mentorList = {

        ...mentors1,
        ...mentors2,
    }


    console.log(mentorList);

}



