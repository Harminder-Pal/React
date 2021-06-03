
import React,{useState} from 'react'

const EmployeForm = (props)=> {
//render()
const [values, setValues] = useState ({Name:"", age: ""});

const handlenamechange = (e) =>{
    setValues({...values,Name:e.target.value});
}

const handleagechange = (e) =>{
  setValues({...values,age:e.target.value});
}

const handleSubmit = (e) =>{
    e.preventDefault()
    props.valuesEntered({
      id: Math.random().toString,
      ...values,
    });
    setValues({Name: "", age: ""});
}



return (
    <form onSubmit={handleSubmit} >       
     <div>
        <input type="text"  placeholder="Name" value={values.Name} onChange={handlenamechange} />
      
        <input type="number"  placeholder="age" value={values.age} onChange={handleagechange} />
        {/* <input type="text"  placeholder="id" value={values.id} onChange={handlenamechange} /> */}
     
      <button type="submit" >Submit</button>
      </div>
    </form>
  );
}

export default EmployeForm;