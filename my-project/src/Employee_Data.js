import React from 'react';
import App from './Employee_Tile';
 
const Emp = (props) =>{
    console.log(props)
    return(
        <div>
           <App employees={props.employees}name ={props.name}/> 
           <App employees={props.employees}age ={props.age}/> 
           {props.employees.map((item,index)=><App key={index} {...item}/>)}
        </div>
    )

}

export default Emp;