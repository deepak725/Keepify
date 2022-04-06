import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

const Login = ({setUser,user}) => {
  let navigate = useNavigate();
  function submithandler(event)
  {
    setUser(true);
    event.preventDefault();
    navigate("/notes");
  }

  return (
    <div className="formcontainer" >
    <form className="loginform" onSubmit={submithandler}>
        <div className="form-title">    
        <h3>Log in</h3>
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email"  required/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password"  required/>
        </div>


        <button type="submit" id="submit-btn" className="btn btn-dark btn-lg btn-block" >Sign in</button>
       <NavLink to={"/register"} > New user? click here</NavLink>
    </form>
    </div>
  )
}

export default Login