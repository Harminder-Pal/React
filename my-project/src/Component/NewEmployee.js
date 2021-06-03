import React, { useState } from 'react';

import EmployeForm from './EmployeeForm';


const NewEmp =(props) => {
   
    return (
        <>
            <EmployeForm valuesEntered ={props.valuesEntered} />
        </>
    );
}

export default NewEmp;