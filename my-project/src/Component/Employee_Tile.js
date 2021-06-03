import React from 'react'
//import MyApp from '../App'

const App = (props) =>{
    console.log(props)
    return(
        <>
          <p>ID:{props.id}</p>
          <span>Emp_Name:{props.Name}</span>
          <span>Emp_Age:{props.age}</span>
        </>
    );
}

export default App;