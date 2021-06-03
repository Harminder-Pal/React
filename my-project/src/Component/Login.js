import React, {useState} from "react";
import  ReactDOM from "react-dom";
import './logic.css'

class MyApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      UserName:"",
      Password: ""
    }
  };
  //  const [UserName, setUserName] = useState("");

  //  const [Password, setPassword] = useState("");
   inputEvent = (eve) => {
    this.setState({
      UserName: eve.target.value,
    });
   }
  
   inputEvent2 = (eve) => {
    this.setState({
      Password: eve.target.value,
    });
  }
   onSubmits =(eve) =>{
    eve.preventDefault();
    console.log (this.sate.UserName);
    console.log (this.sate.Password);
  }


render()
 {
  return (
  <><div className= "main_div">
    <form onSubmit = {this.onSubmits}>
      <div>
        <h1>My First Login Page </h1>
          <input 
          type ="text"
          placeholder="Enter Your UserName:"
          onChange={this.inputEvent}
          value={this.state.username}
          />
          <br/>
          <input 
          type ="text"
          placeholder="Enter Password:"
          onChange={this.inputEvent2}
          value={this.state.Password}
          />
          <button type ="submit"> submit</button>
      </div>
    </form>
    </div>
    
    </>
);
}

}
export default MyApp