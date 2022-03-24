import React from 'react'
import './Register.css'
import { Navigate, useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
const Register = ({setUser}) => {
  let navigate = useNavigate();
    function submithandler(event)
    {
      setUser(true);
      event.preventDefault();
      
      navigate("/notes");
    }
  
  return (
    <div className='formcontainer2'>
        <form onSubmit={submithandler} className='registerform'>
        <div className="form-title">    
        <h3>Register</h3>
        </div>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" required />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="form-control" placeholder="Enter email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required />
                </div>

                <button type="submit" id="submit-btn" className="btn btn-dark btn-lg btn-block">Register</button>
                <NavLink to={"/"} > Already user? click here</NavLink>
            </form>
    </div>
  )
}

export default Register