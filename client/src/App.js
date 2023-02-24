import {useState} from 'react';
import axios from 'axios';
import React from 'react';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    axios.post('http://localhost:4000/adduser', {
      username: username,
      password : password
    }).then(() => {
      console.log("works");
    });
  };

  return (
    <div className = "App">
      <div className = "UserInput">
        <label>Username</label>
        <input 
          type = "text"
          onChange = {(event) =>{
            setUsername(event.target.value);
          }}
        />
        <label>Password</label>
        <input 
          type = "text"
          onChange = {(event) =>{
            setPassword(event.target.value);
          }}
        />
      </div>
      <button className = "SignUp" onClick ={addUser} >Sign Up</button>

    </div>
  )
}

export default App;
