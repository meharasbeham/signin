import React from "react";
import './App.css';



const login=()=>{
    return(
        <div className="container">
            <h3>Login</h3>
     <p>   
     <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="inputemail" required></input></p>
        <p>
        <label for="inputPassword" class="form-label">Password:</label>
    <input type="password" class="form-control" id="inputPassword" required></input></p>
    <p>forgot password?</p>
        <button>Login</button>
     <p>New Here? Create Account?</p>
        </div>
    )
}
export default login 