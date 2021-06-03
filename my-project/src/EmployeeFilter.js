import React, { useState } from 'react'

const EmployeeFilter = (props) =>{
    const dropdownChangeHandler = (Event) =>{
        props.onChangeFilter(Event.target.value);
    };
    const[age,setage] = useState("20");
    const array = [12,23,32,34,43,45,54,56,65,67,76,20,22,24,25,26,78,87,89,98,90,100,10];

    const handlechange = (e) => {
        setage(e.target.value)
        props.saveAge(e.target.value)
    }

    return(
        <div className= 'Employee-filter'>
            <div className = 'Employee-filter_control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange ={dropdownChangeHandler}>
                    <option value = '20'>20</option>
                    <option value = '21'>21</option>
                    <option value = '22'>22</option>
                    <option value = '23'>23</option>
                    <option value = '24'>24</option>
                    <option value = '25'>25</option>
                </select>
            </div>
        </div>
    )
}

export default EmployeeFilter;