import React from 'react'
import EmployeeFilter from './EmployeeFilter';

const Employe = (props) =>{
    const saveAge = (age) =>{
        console.log("Selected age:",age)
    }
    return(
        <EmployeeFilter saveAge={saveAge}/>
    );
}

export default Employe;