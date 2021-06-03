import React from 'react';
import Emp from './component/Employee_Data';
import NewEmp from './component/NewEmployee';
import Employe from './component/Employee';



const employees = [
    {
        id: 'e1',
        Name: 'Akhil',
        age: 20
    },
    {
        id: 'e2',
        Name: 'Aman',
        age: 21
    },
    {
        id: 'e3',
        Name: 'Vikas',
        age: 22
    },
    {
        id: 'e4',
        Name: 'Harminder',
        age: 23
    },
    {
        id: 'e5',
        Name: 'Deeksha',
        age: 24
    },
    {
        id: 'e6',
        Name: 'Punit',
        age: 25
    }
];
    const MyApp = () =>{
        const valuesEntered=(a,b,c) =>{
            console.log("Entered Name:",a)
            console.log("Entered age:",b)
            console.log("Entered id:",c)
        }
    return(
       <> <div>
            <h1>Employees Data</h1>
            <Emp employees ={employees}/>
            <NewEmp valuesEntered={valuesEntered}/>
        </div>
        </>
    );
    }
 
export default MyApp;